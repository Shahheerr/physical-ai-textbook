import React, { useEffect } from 'react';
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
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

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
                <button className="ai-send-button">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Add the CSS animation for the spinner
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export default AIRightPanel;