import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAISelection } from '../../context/AISelectionContext';

const AskAIButton: React.FC = () => {
  const {
    isButtonVisible,
    selectedText,
    coordinates,
    setButtonPosition,
    setIsButtonVisible,
    setIsPanelVisible,
    setSelectedText
  } = useAISelection();

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (coordinates) {
      // Adjust position to prevent button from going off-screen
      const adjustedX = Math.min(coordinates.x, window.innerWidth - 60);
      const adjustedY = Math.min(coordinates.y, window.innerHeight - 60);

      setPosition({ x: adjustedX, y: adjustedY });
      setButtonPosition({ x: adjustedX, y: adjustedY });
    }
  }, [coordinates, setButtonPosition]);

  const handleClick = () => {
    if (selectedText) {
      // We don't need to set it again if it's already correct, but just in case
      setSelectedText(selectedText);
      setIsPanelVisible(true);
      setIsButtonVisible(false);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to allow for button click
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isButtonVisible && (
        <motion.button
          className="ask-ai-button"
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            zIndex: 10000,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          aria-label="Ask AI about selected text"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'white' }}
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C14.5013 4 16.64 5.33124 17.8869 7.31256L7.31256 17.8869C5.33124 16.64 4 14.5013 4 12C4 7.58172 7.58172 4 12 4ZM17.3126 16.1131L16.1131 17.3126C17.36 16.0657 18 14.366 18 12.5C18 8.91015 15.0899 6 11.5 6C9.63397 6 7.93429 6.64003 6.68744 7.88686L7.88686 6.68744C9.1337 5.44059 10.762 4.72114 12.5 4.72114C16.4925 4.72114 19.7211 7.9501 19.7211 11.9425C19.7211 13.6806 19.0017 15.3089 17.7548 16.5558L16.5558 17.7548C17.8027 16.5079 18.4442 14.866 18.4442 13.0575C18.4442 11.249 17.7248 9.60708 16.4779 8.36023L8.36023 16.4779C9.60708 17.7248 11.249 18.4442 13.0575 18.4442C14.866 18.4442 16.5079 17.8027 17.7548 16.5558L17.3126 16.1131Z"
              fill="currentColor"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AskAIButton;