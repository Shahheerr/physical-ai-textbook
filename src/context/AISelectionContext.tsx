import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { AISelectionState } from '../types/ai-selection';

interface AISelectionContextType extends AISelectionState {
  setSelectedText: (text: string) => void;
  setCoordinates: (coords: { x: number; y: number } | null) => void;
  setIsActive: (active: boolean) => void;
  setResponseStatus: (status: 'idle' | 'loading' | 'processing' | 'completed' | 'error') => void;
  setResponseContent: (content: string) => void;
  setIsPanelVisible: (visible: boolean) => void;
  setIsButtonVisible: (visible: boolean) => void;
  setButtonPosition: (position: { x: number; y: number } | null) => void;
  resetState: () => void;
}

const defaultState: AISelectionState = {
  selectedText: '',
  coordinates: null,
  timestamp: null,
  isActive: false,
  requestText: '',
  responseStatus: 'idle',
  responseContent: '',
  contextTruncated: '',
  error: null,
  isPanelVisible: false,
  isButtonVisible: false,
  buttonPosition: null,
  isMobile: false,
  longPressActive: false,
};

const AISelectionContext = createContext<AISelectionContextType | undefined>(undefined);

interface AISelectionProviderProps {
  children: ReactNode;
}

export const AISelectionProvider: React.FC<AISelectionProviderProps> = ({ children }) => {
  const [state, setState] = useState<AISelectionState>(defaultState);

  const setSelectedText = useCallback((text: string) => {
    setState(prev => ({
      ...prev,
      selectedText: text,
      requestText: text,
      contextTruncated: text.length > 100 ? text.substring(0, 100) + '...' : text,
    }));
  }, []);

  const setCoordinates = useCallback((coords: { x: number; y: number } | null) => {
    setState(prev => ({ ...prev, coordinates: coords }));
  }, []);

  const setIsActive = useCallback((active: boolean) => {
    setState(prev => ({ ...prev, isActive: active }));
  }, []);

  const setResponseStatus = useCallback((status: 'idle' | 'loading' | 'processing' | 'completed' | 'error') => {
    setState(prev => ({ ...prev, responseStatus: status }));
  }, []);

  const setResponseContent = useCallback((content: string) => {
    setState(prev => ({ ...prev, responseContent: content }));
  }, []);

  const setIsPanelVisible = useCallback((visible: boolean) => {
    setState(prev => ({ ...prev, isPanelVisible: visible }));
  }, []);

  const setIsButtonVisible = useCallback((visible: boolean) => {
    setState(prev => ({ ...prev, isButtonVisible: visible }));
  }, []);

  const setButtonPosition = useCallback((position: { x: number; y: number } | null) => {
    setState(prev => ({ ...prev, buttonPosition: position }));
  }, []);

  const resetState = useCallback(() => {
    setState(defaultState);
  }, []);

  const contextValue: AISelectionContextType = React.useMemo(() => ({
    ...state,
    setSelectedText,
    setCoordinates,
    setIsActive,
    setResponseStatus,
    setResponseContent,
    setIsPanelVisible,
    setIsButtonVisible,
    setButtonPosition,
    resetState,
  }), [state, setSelectedText, setCoordinates, setIsActive, setResponseStatus, setResponseContent, setIsPanelVisible, setIsButtonVisible, setButtonPosition, resetState]);

  return (
    <AISelectionContext.Provider value={contextValue}>
      {children}
    </AISelectionContext.Provider>
  );
};

export const useAISelection = (): AISelectionContextType => {
  const context = useContext(AISelectionContext);
  if (context === undefined) {
    throw new Error('useAISelection must be used within an AISelectionProvider');
  }
  return context;
};