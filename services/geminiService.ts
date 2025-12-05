import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from "../types";

// Initialize the Gemini client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates or edits an image based on an input image and a text prompt.
 * Uses Gemini 2.5 Flash Image ("nano banana").
 * 
 * @param imageBase64 - The input image in base64 format (stripped of data:image/xyz;base64, prefix if possible, but the API handles cleaned base64)
 * @param prompt - The text instruction for the model
 * @param mimeType - The mime type of the input image
 * @returns Promise resolving to the base64 string of the generated image
 */
export const generateOrEditImage = async (
  imageBase64: string,
  prompt: string,
  mimeType: string = 'image/jpeg'
): Promise<string> => {
  try {
    // Ensure clean base64 string
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH_IMAGE,
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      // Config matching guidelines for image generation/editing
      config: {
        // No responseMimeType or responseSchema for nano banana models
        // We can add optional negative prompts or other configs if needed, 
        // but keeping it simple for stability.
      }
    });

    // Iterate through parts to find the image
    const parts = response.candidates?.[0]?.content?.parts;
    
    if (!parts) {
      throw new Error("No content generated");
    }

    for (const part of parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }

    // If no image part found, maybe there's text explaining why (safety, etc)
    const textPart = parts.find(p => p.text);
    if (textPart) {
      throw new Error(`Generation failed: ${textPart.text}`);
    }

    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
