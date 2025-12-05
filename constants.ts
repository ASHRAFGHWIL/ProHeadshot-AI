import { HeadshotStyle, Language } from "./types";

export const STYLES_DATA: HeadshotStyle[] = [
  {
    id: "corporate",
    name: "Corporate Executive",
    previewColor: "bg-slate-700",
    icon: "briefcase",
    prompt: "Transform this person into a professional corporate executive headshot. Use a neutral grey gradient studio background. The person should be wearing a high-end tailored business suit. Lighting should be soft and flattering studio lighting. Maintain the person's key facial features and identity but elevate the presentation to be LinkedIn-ready and extremely professional. High resolution, photorealistic, 8k."
  },
  {
    id: "tech_startup",
    name: "Tech Founder",
    previewColor: "bg-blue-600",
    icon: "monitor",
    prompt: "Transform this person into a modern tech startup founder headshot. Background should be a blurred, bright modern open-plan office with glass and bokeh. The person should wear premium smart-casual attire (e.g., a high-quality t-shirt with a blazer, or a crisp button-down). Lighting should be bright, natural, and energetic. Maintain facial identity. High resolution, photorealistic."
  },
  {
    id: "outdoor",
    name: "Outdoor Natural",
    previewColor: "bg-amber-600",
    icon: "sun",
    prompt: "Transform this person into a professional outdoor lifestyle headshot. Background should be a soft-focus park or city street during golden hour with beautiful bokeh. The person should wear stylish yet relaxed professional clothing. The lighting should be warm, back-lit (rim lighting), and natural. Maintain facial identity. High resolution, photorealistic."
  },
  {
    id: "studio_bw",
    name: "Studio B&W",
    previewColor: "bg-stone-900",
    icon: "camera",
    prompt: "Transform this person into a dramatic black and white studio portrait. Use a pure black background. Lighting should be Rembrandt style with high contrast and deep shadows to create depth. The person should look serious and thoughtful. Attire should be simple and dark (e.g., black turtleneck). Maintain facial identity. High resolution, photorealistic, monochrome."
  }
];

export const TRANSLATIONS = {
  en: {
    title: "AI Headshot Photographer",
    subtitle: "Transform casual selfies into professional, studio-quality headshots in seconds.",
    uploadTitle: "Click to upload photo",
    uploadSubtitle: "SVG, PNG, JPG (Max 10MB)",
    chooseStyle: "Choose your style",
    sourceImage: "Source Image",
    generateBtn: "Generate Headshot",
    generatingTitle: "Creating Magic",
    generatingDesc: "Gemini is analyzing your features and applying the style...",
    resultTitle: "Your Professional Headshot",
    resultDesc: "Generated using the selected style. You can download it now or use AI to refine specific details.",
    magicEditor: "AI Magic Editor",
    magicEditorDesc: "Not quite right? Describe what you want to change.",
    magicEditorPlaceholder: "e.g. 'Make the background blurred office', 'Add a smile'...",
    quickActions: "Quick Actions",
    startOver: "Start Over",
    download: "Download",
    refining: "Refining image...",
    errorGeneric: "Failed to generate image. Please try again.",
    errorEdit: "Failed to edit image. Try a different prompt.",
    connectTitle: "Connect Google AI",
    connectDesc: "To use the professional model (Nano Banana Pro), you need to select your Google Cloud project.",
    connectBtn: "Select API Key",
    billingNote: "This model requires a paid project. See billing details.",
    styles: {
      corporate: { name: "Corporate Executive", desc: "Professional studio lighting, grey gradient background, sharp business attire." },
      tech_startup: { name: "Tech Founder", desc: "Modern open office background, smart casual, approachable yet leader-like." },
      outdoor: { name: "Outdoor Natural", desc: "Golden hour lighting, nature bokeh, warm and friendly atmosphere." },
      studio_bw: { name: "Studio B&W", desc: "High contrast black and white, dramatic shadows, artistic and timeless." },
    },
    quickPrompts: [
      "Make it black and white",
      "Brighten the lighting",
      "Blur the background",
      "Look more serious"
    ]
  },
  ar: {
    title: "مصور بورتريه بالذكاء الاصطناعي",
    subtitle: "حول صور السيلفي العادية إلى صور احترافية بجودة الاستوديو في ثوانٍ.",
    uploadTitle: "اضغط لرفع الصورة",
    uploadSubtitle: "SVG, PNG, JPG (الحد الأقصى 10 ميجابايت)",
    chooseStyle: "اختر النمط المناسب",
    sourceImage: "الصورة الأصلية",
    generateBtn: "إنشاء الصورة",
    generatingTitle: "جاري المعالجة",
    generatingDesc: "يقوم الذكاء الاصطناعي بتحليل ملامحك وتطبيق النمط المختار...",
    resultTitle: "صورتك الاحترافية",
    resultDesc: "تم الإنشاء باستخدام النمط المحدد. يمكنك تحميلها الآن أو استخدام المحرر الذكي للتعديل.",
    magicEditor: "المحرر الذكي",
    magicEditorDesc: "تريد تعديل شيء ما؟ صف التغيير المطلوب.",
    magicEditorPlaceholder: "مثال: 'اجعل الخلفية مكتباً عصرياً'، 'أضف ابتسامة'، 'اجعل الإضاءة أكثر دفئاً'...",
    quickActions: "إجراءات سريعة",
    startOver: "البدء من جديد",
    download: "تحميل الصورة",
    refining: "جاري تحسين الصورة...",
    errorGeneric: "فشل إنشاء الصورة. يرجى المحاولة مرة أخرى.",
    errorEdit: "فشل التعديل. حاول استخدام وصف مختلف.",
    connectTitle: "ربط Google AI",
    connectDesc: "لاستخدام النموذج الاحترافي (Nano Banana Pro)، يجب اختيار مشروع Google Cloud الخاص بك.",
    connectBtn: "اختيار مفتاح API",
    billingNote: "يتطلب هذا النموذج مشروعاً مدفوعاً. راجع تفاصيل الفوترة.",
    styles: {
      corporate: { name: "مدير تنفيذي", desc: "إضاءة استوديو احترافية، خلفية رمادية متدرجة، زي رسمي أنيق." },
      tech_startup: { name: "رائد أعمال تقني", desc: "خلفية مكتب عصري مفتوح، ملابس أنيقة غير رسمية (Smart Casual)." },
      outdoor: { name: "إضاءة طبيعية", desc: "إضاءة الساعة الذهبية، خلفية طبيعية، جو دافئ وودود." },
      studio_bw: { name: "استوديو أبيض وأسود", desc: "تباين عالي، ظلال درامية، طابع فني كلاسيكي." },
    },
    quickPrompts: [
      "اجعلها بالأبيض والأسود",
      "زيادة سطوع الإضاءة",
      "تغبيش الخلفية أكثر",
      "اجعل المظهر أكثر جدية"
    ]
  }
};
