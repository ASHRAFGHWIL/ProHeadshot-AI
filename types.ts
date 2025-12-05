export enum AppStep {
  UPLOAD = 'UPLOAD',
  STYLE_SELECTION = 'STYLE_SELECTION',
  GENERATING = 'GENERATING',
  RESULT = 'RESULT',
}

export interface HeadshotStyle {
  id: string;
  name: string; // Used for fallback or internal logic
  icon: string; // Icon name reference
  previewColor: string;
  prompt: string; // The backend prompt (usually kept in English for model performance)
}

export interface GeneratedImage {
  data: string; // Base64 string
  mimeType: string;
}

export enum GeminiModel {
  PRO_IMAGE = 'gemini-3-pro-image-preview',
}

export type Language = 'en' | 'ar';
