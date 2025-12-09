import React, { useEffect } from 'react';
import { useAISelection } from '../../context/AISelectionContext';
import { useTextSelection } from '../../hooks/useTextSelection';

// This component bridges the local hook state to the global context
const AISelectionIntegration: React.FC = () => {
  const {
    setSelectedText,
    setCoordinates,
    setIsButtonVisible,
    isButtonVisible,
    isPanelVisible, // Get this from context
    resetState
  } = useAISelection();

  // Pass configuration to hook
  // We use .markdown as the selector for Docusaurus content
  const { text, coordinates, isSelectionActive } = useTextSelection({
    isDisabled: isPanelVisible,
    allowedContainerSelector: '.markdown'
  });

  useEffect(() => {
    if (isSelectionActive && text && coordinates) {
      setSelectedText(text);
      setCoordinates(coordinates);
      setIsButtonVisible(true);
    } else {
      // Logic to hide button if selection is cleared or too short
      // We check !isButtonVisible to avoid unnecessary re-renders/loops if it's already hidden
      // However, we might want to keep the button visible for a moment or until explicit dismissal
      // matching the original logic: "Hide button if selection is too short"
      if (!isSelectionActive && isButtonVisible) {
        // Optional: Add a delay or strict condition here if needed.
        // For now, if selection is gone, valid context is gone.
        setIsButtonVisible(false);
      }
    }
  }, [isSelectionActive, text, coordinates, setSelectedText, setCoordinates, setIsButtonVisible, isButtonVisible]);

  // Handle global Escape key to close/reset separate from selection logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsButtonVisible(false);
      }
    };
    document.addEventListener('keyup', handleKeyDown);
    return () => document.removeEventListener('keyup', handleKeyDown);
  }, [setIsButtonVisible]);

  return null;
};

export default AISelectionIntegration;