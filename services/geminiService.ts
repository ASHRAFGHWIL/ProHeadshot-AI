import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from "../types";

/**
 * Generates or edits an image based on an input image and a text prompt.
 * Uses Gemini 3 Pro Image ("nano banana pro").
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
    // Initialize the Gemini client dynamically to ensure it uses the latest API key
    // process.env.API_KEY is injected by the environment after selection.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Ensure clean base64 string
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: GeminiModel.PRO_IMAGE,
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
      // Config for gemini-3-pro-image-preview
      config: {
        imageConfig: {
          aspectRatio: "3:4", // Matches UI vertical aspect ratio
          imageSize: "1K", // Default for Pro model
        }
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
