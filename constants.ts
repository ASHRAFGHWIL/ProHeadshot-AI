import { HeadshotStyle } from "./types";

export const STYLES: HeadshotStyle[] = [
  {
    id: "corporate",
    name: "Corporate Executive",
    description: "Professional studio lighting, grey gradient background, sharp business attire.",
    previewColor: "bg-slate-700",
    icon: "briefcase",
    prompt: "Transform this person into a professional corporate executive headshot. Use a neutral grey gradient studio background. The person should be wearing a high-end tailored business suit. Lighting should be soft and flattering studio lighting. Maintain the person's key facial features and identity but elevate the presentation to be LinkedIn-ready and extremely professional. High resolution, photorealistic, 8k."
  },
  {
    id: "tech_startup",
    name: "Tech Founder",
    description: "Modern open office background, smart casual, approachable yet leader-like.",
    previewColor: "bg-blue-600",
    icon: "monitor",
    prompt: "Transform this person into a modern tech startup founder headshot. Background should be a blurred, bright modern open-plan office with glass and bokeh. The person should wear premium smart-casual attire (e.g., a high-quality t-shirt with a blazer, or a crisp button-down). Lighting should be bright, natural, and energetic. Maintain facial identity. High resolution, photorealistic."
  },
  {
    id: "outdoor",
    name: "Outdoor Natural",
    description: "Golden hour lighting, nature bokeh, warm and friendly atmosphere.",
    previewColor: "bg-amber-600",
    icon: "sun",
    prompt: "Transform this person into a professional outdoor lifestyle headshot. Background should be a soft-focus park or city street during golden hour with beautiful bokeh. The person should wear stylish yet relaxed professional clothing. The lighting should be warm, back-lit (rim lighting), and natural. Maintain facial identity. High resolution, photorealistic."
  },
  {
    id: "studio_bw",
    name: "Studio B&W",
    description: "High contrast black and white, dramatic shadows, artistic and timeless.",
    previewColor: "bg-stone-900",
    icon: "camera",
    prompt: "Transform this person into a dramatic black and white studio portrait. Use a pure black background. Lighting should be Rembrandt style with high contrast and deep shadows to create depth. The person should look serious and thoughtful. Attire should be simple and dark (e.g., black turtleneck). Maintain facial identity. High resolution, photorealistic, monochrome."
  }
];
