import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAISelection } from '../../context/AISelectionContext';

const AIRightPanel: React.FC = () => {
  const {
    isPanelVisible,
    selectedText,
    contextTruncated,
    setIsPanelVisible,
  } = useAISelection();

  const [inputMessage, setInputMessage] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const responseAreaRef = React.useRef<HTMLDivElement>(null);

  // Pre-fill input when panel opens with new text
  useEffect(() => {
    if (isPanelVisible && selectedText) {
      // Format: "Is <selected_text> ko samjhao."
      const formattedMessage = `Is "${selectedText}" ko samjhao.`;
      setInputMessage(formattedMessage);

      // Focus and place cursor at end
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(formattedMessage.length, formattedMessage.length);
        }
      }, 100);
    }
  }, [isPanelVisible, selectedText]);

  const handleClose = () => {
    setIsPanelVisible(false);
  };

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPanelVisible) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPanelVisible]);

  // Typing simulation effect with error handling and configurable speed
  const simulateTypingEffect = (fullText: string, speed: number = 20) => {
    if (!fullText) {
      setResponse('');
      return;
    }

    setResponse(''); // Clear previous response
    let index = 0;
    try {
      const typingInterval = setInterval(() => {
        try {
          if (index < fullText.length) {
            setResponse(prev => prev + fullText.charAt(index));
            index++;
          } else {
            clearInterval(typingInterval);
          }
        } catch (intervalError) {
          console.error('Error in typing interval:', intervalError);
          clearInterval(typingInterval);
        }
      }, speed); // Configurable typing speed
      return typingInterval;
    } catch (error) {
      console.error('Error starting typing simulation:', error);
      setResponse(fullText); // Fallback to displaying full text immediately
    }
  };

  // API service function for RAG endpoint calls with logging
  const callRagAPI = async (user_query: string, selected_text_context: string) => {
    const startTime = Date.now();
    try {
      console.log('Sending API request to RAG endpoint:', {
        user_query: user_query.substring(0, 50) + (user_query.length > 50 ? '...' : ''), // Log truncated query
        selected_text_context: selected_text_context.substring(0, 50) + (selected_text_context.length > 50 ? '...' : '')
      });

      const response = await fetch(process.env.REACT_APP_RAG_API_URL || 'http://localhost:8000/api/v1/ask_rag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_query,
          selected_text_context
        })
      });

      const duration = Date.now() - startTime;
      if (!response.ok) {
        console.error(`API request failed after ${duration}ms with status ${response.status}`);
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log(`API request succeeded after ${duration}ms`);
      return data;
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`API request failed after ${duration}ms:`, error);
      throw error;
    }
  };

  // Handle send query with enhanced error handling
  const handleSendQuery = async () => {
    if (!inputMessage.trim()) {
      setError('Please enter a query before sending.');
      return; // Don't send empty queries
    }

    setLoading(true);
    setError(null);

    try {
      // Data assembly
      const requestBody = {
        user_query: inputMessage,
        selected_text_context: selectedText || contextTruncated || ''
      };

      // API call
      const data = await callRagAPI(requestBody.user_query, requestBody.selected_text_context);

      // Response handling with typing simulation
      if (data && data.answer) {
        simulateTypingEffect(data.answer, 20); // 20ms per character for natural typing feel
      } else {
        setError('No response received from the AI service.');
      }
    } catch (error: any) {
      // Enhanced error handling with specific messages
      if (error.message.includes('fetch')) {
        setError('Network error: Unable to connect to the AI service. Please check your connection.');
      } else if (error.message.includes('400')) {
        setError('Bad request: The query format is invalid.');
      } else if (error.message.includes('401') || error.message.includes('403')) {
        setError('Authentication error: Access denied to the AI service.');
      } else if (error.message.includes('404')) {
        setError('Service not found: The AI endpoint is unavailable.');
      } else if (error.message.includes('500')) {
        setError('Server error: The AI service encountered an internal error. Please try again later.');
      } else if (error.message.includes('502') || error.message.includes('503') || error.message.includes('504')) {
        setError('Service temporarily unavailable: The AI service is experiencing high load or maintenance.');
      } else {
        setError(`Connection Error: ${error.message || 'Check Backend Server'}`);
      }
      console.error('API call error:', error);
    } finally {
      // Clean up
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isPanelVisible && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="ai-panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Main panel */}
          <motion.div
            className="ai-right-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="ai-panel-header">
              <div className="ai-panel-title">
                <span>🤖</span>
                <span>AI Tutor Context</span>
              </div>
              <button
                className="ai-close-button"
                onClick={handleClose}
                aria-label="Close panel"
              >
                ×
              </button>
            </div>

            {/* Content Area */}
            <div className="ai-panel-content">
              <div className="ai-context-box">
                <h3 className="ai-context-label">Context Selected</h3>
                <p className="ai-context-text">
                  "{contextTruncated || selectedText}"
                </p>
              </div>

              <p className="ai-helper-text">
                Ask a question about the selected text above.
              </p>

              {/* Response Area */}
              <div className="ai-response-area" ref={responseAreaRef}>
                {loading ? (
                  <div className="ai-loading-indicator">
                    <div className="ai-spinner"></div>
                    <span>Processing your query...</span>
                  </div>
                ) : error ? (
                  <div className="ai-error-message">
                    {error}
                  </div>
                ) : response ? (
                  <div className="ai-response-text">
                    {response}
                  </div>
                ) : (
                  <div className="ai-placeholder-text">
                    Your AI response will appear here...
                  </div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="ai-input-area">
              <div className="ai-input-wrapper">
                <textarea
                  ref={inputRef}
                  className="ai-chat-textarea"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask something..."
                />
                <button
                  className="ai-send-button"
                  onClick={handleSendQuery}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Add the CSS animation for the spinner - using CSS custom properties for theme support
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ai-loading-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    color: var(--ai-subtext-color, #666);
  }

  .ai-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--ai-panel-border, #f3f3f3);
    border-top: 2px solid var(--ifm-color-primary, #3498db);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .ai-response-area {
    margin-top: 15px;
    min-height: 100px;
    padding: 15px;
    border: 1px solid var(--ai-input-border, #e0e0e0);
    border-radius: 8px;
    background-color: var(--ai-input-bg, #fafafa);
  }

  .ai-error-message {
    color: #ef4444;
    padding: 10px;
    background-color: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 4px;
  }

  .ai-response-text {
    white-space: pre-wrap;
    line-height: 1.6;
    color: var(--ai-text-color, inherit);
  }

  .ai-placeholder-text {
    color: var(--ai-subtext-color, #999);
    font-style: italic;
  }
  
  /* Dark mode specific overrides */
  [data-theme='dark'] .ai-error-message {
    color: #f87171;
    background-color: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.4);
  }
`;
document.head.appendChild(style);

export default AIRightPanel;