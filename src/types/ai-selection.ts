// TypeScript interfaces for AI text selection feature

export interface TextSelectionContext {
  selectedText: string;
  coordinates: { x: number; y: number } | null;
  timestamp: Date | null;
  isActive: boolean;
  elementRect?: DOMRect;
}

export interface AIResponseState {
  requestText: string;
  responseStatus: 'idle' | 'loading' | 'processing' | 'completed' | 'error';
  responseContent: string;
  contextTruncated: string;
  error: string | null;
}

export interface UIState {
  isPanelVisible: boolean;
  isButtonVisible: boolean;
  buttonPosition: { x: number; y: number } | null;
  isMobile: boolean;
  longPressActive: boolean;
}

export interface AISelectionState extends TextSelectionContext, AIResponseState, UIState {}