export enum AppStep {
  UPLOAD = 'UPLOAD',
  STYLE_SELECTION = 'STYLE_SELECTION',
  GENERATING = 'GENERATING',
  RESULT = 'RESULT',
}

export interface HeadshotStyle {
  id: string;
  name: string;
  description: string;
  prompt: string;
  icon: string; // Icon name reference
  previewColor: string;
}

export interface GeneratedImage {
  data: string; // Base64 string
  mimeType: string;
}

export enum GeminiModel {
  FLASH_IMAGE = 'gemini-2.5-flash-image',
}
