import { useState, useEffect, useCallback } from 'react';

interface SelectionState {
  text: string;
  coordinates: { x: number; y: number } | null;
  isSelectionActive: boolean;
}

interface UseTextSelectionProps {
  isDisabled?: boolean;
  allowedContainerSelector?: string;
}

export const useTextSelection = ({ 
  isDisabled = false, 
  allowedContainerSelector = '.markdown' 
}: UseTextSelectionProps = {}) => {
  const [selectionState, setSelectionState] = useState<SelectionState>({
    text: '',
    coordinates: null,
    isSelectionActive: false,
  });

  // Debounce function to prevent excessive updates
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleSelectionChange = useCallback(() => {
    if (isDisabled) {
      setSelectionState({ text: '', coordinates: null, isSelectionActive: false });
      return;
    }

    const selectionObj = window.getSelection();
    if (!selectionObj || selectionObj.rangeCount === 0) {
      setSelectionState({ text: '', coordinates: null, isSelectionActive: false });
      return;
    }

    const anchorNode = selectionObj.anchorNode;
    const focusNode = selectionObj.focusNode;

    // Helper to check if node works with closest
    const isNodeInContainer = (node: Node | null) => {
      if (!node) return false;
      const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node as Element;
      return element?.closest(allowedContainerSelector) !== null;
    };

    // Check if selection is within the allowed container
    if (!isNodeInContainer(anchorNode) || !isNodeInContainer(focusNode)) {
      setSelectionState((prev) => 
        prev.isSelectionActive ? { ...prev, isSelectionActive: false } : prev
      );
      return;
    }

    const selectedText = selectionObj.toString().trim();

    if (selectedText.length > 5) {
      const range = selectionObj.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Calculate position (e.g., at the end of the selection)
      const x = rect.right;
      const y = rect.top;

      setSelectionState({
        text: selectedText,
        coordinates: { x, y },
        isSelectionActive: true,
      });
    } else {
      setSelectionState((prev) =>
        prev.isSelectionActive ? { ...prev, isSelectionActive: false } : prev
      );
    }
  }, [isDisabled, allowedContainerSelector]);

  useEffect(() => {
    const debouncedHandleSelection = debounce(handleSelectionChange, 100);

    const handleMouseUp = () => {
      // Small timeout to let the selection finalize
      setTimeout(() => debouncedHandleSelection(), 0);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        debouncedHandleSelection();
      }
    };

    // Mobile/Touch support
    const handleTouchEnd = () => {
      setTimeout(() => debouncedHandleSelection(), 0);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleSelectionChange]);

  return selectionState;
};