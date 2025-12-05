import { HeadshotStyle, Language } from "./types";

export const STYLES_DATA: HeadshotStyle[] = [
  {
    id: "professional_enhance",
    name: "Professional Retouch",
    previewColor: "bg-teal-600",
    icon: "enhance",
    prompt: "Enhance this portrait to look professional and high-quality. Improve lighting, clarity, and texture while keeping the person's facial features and identity exactly the same. Reduce noise and ensure a realistic, studio-quality look."
  },
  {
    id: "sketch_to_digital",
    name: "Sketch to Digital",
    previewColor: "bg-indigo-600",
    icon: "pencil",
    prompt: "Transform this pencil sketch into a high-quality, realistic digital portrait. Respect the original sketch's structure, composition, and facial features. Enhance the image with professional digital painting techniques: apply realistic skin textures, dynamic lighting, and rich colors. Remove sketch lines and paper grain. The result should be a polished, studio-quality digital artwork suitable for a professional profile or concept art."
  },
  {
    id: "patterned_noir",
    name: "Patterned Noir",
    previewColor: "bg-neutral-800",
    icon: "grid",
    prompt: "Transform this person into a monochromatic artistic portrait. The subject should have the exact same facial features, hairstyle, and hair color as the reference. Illuminate them with high-contrast patterned light, creating a distinctive network of white dots and deep shadows on their features against a pure black background. The perspective should be from the ground looking up (low angle), with the subject looking directly into the lens. Cinematic 85mm f/1.4 style, rich texture, soft blur, subtle gray transitions. Meticulous detail, natural skin texture."
  },
  {
    id: "surreal_hand",
    name: "Surreal Hand",
    previewColor: "bg-zinc-950",
    icon: "hand",
    prompt: "Transform this person into a dark surrealist art piece. The subject is captured in a striking close-up, their hand covering their mouth. A dark, elegant smile is etched into the palm of the hand. The subject wears a simple, dark hooded robe with partial illumination. The image is black and white with high-contrast lighting from above, creating deep shadows and mystery. Maintain facial identity in the visible parts."
  },
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
  },
  {
    id: "vintage_film",
    name: "Vintage Film",
    previewColor: "bg-sepia-600", // Will need a custom class or fallback, using sepia tone mapping roughly to amber-900 or orange-900
    icon: "film",
    prompt: "Transform this person into a vintage film style portrait. Apply a sepia tone or warm desaturated color palette with grain texture. The background should be a textured, abstract vintage wall or fabric. Lighting should be soft and natural, reminiscent of early 20th-century photography. Attire should appear timeless. Maintain facial identity. High resolution, photorealistic, cinematic, film grain."
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    previewColor: "bg-purple-600",
    icon: "zap",
    prompt: "Transform this person into a futuristic cyberpunk character. The background should be a blurred neon-lit futuristic city at night with pink and blue hues. The lighting on the face should be dramatic, with neon rim lighting (magenta and cyan). Attire can include a futuristic jacket or collar detail. Maintain facial identity. High resolution, photorealistic, 8k, cinematic."
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
    errorBilling: "Permission denied. This model requires a Paid Google Cloud Project. Please select a different API key.",
    connectTitle: "Connect Google AI",
    connectDesc: "To use the professional model (Nano Banana Pro), you need to select your Google Cloud project.",
    connectBtn: "Select API Key",
    billingNote: "This model requires a paid project. See billing details.",
    styles: {
      professional_enhance: { name: "Professional Retouch", desc: "Enhances clarity, lighting, and texture while preserving 100% of identity." },
      sketch_to_digital: { name: "Sketch to Digital", desc: "Transform pencil sketches into polished, realistic digital art." },
      patterned_noir: { name: "Patterned Noir", desc: "High-contrast B&W with a dot matrix light pattern and low angle." },
      surreal_hand: { name: "Dark Surrealism", desc: "High-contrast B&W, hand covering mouth with a smile etched on the palm." },
      corporate: { name: "Corporate Executive", desc: "Professional studio lighting, grey gradient background, sharp business attire." },
      tech_startup: { name: "Tech Founder", desc: "Modern open office background, smart casual, approachable yet leader-like." },
      outdoor: { name: "Outdoor Natural", desc: "Golden hour lighting, nature bokeh, warm and friendly atmosphere." },
      studio_bw: { name: "Studio B&W", desc: "High contrast black and white, dramatic shadows, artistic and timeless." },
      vintage_film: { name: "Vintage Film", desc: "Sepia tones, film grain texture, timeless and nostalgic atmosphere." },
      cyberpunk: { name: "Cyberpunk Neon", desc: "Futuristic neon lighting, night city background, vibrant pinks and blues." },
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
    errorBilling: "تم رفض الإذن. يتطلب هذا النموذج مشروعاً مدفوعاً. يرجى اختيار مفتاح API آخر.",
    connectTitle: "ربط Google AI",
    connectDesc: "لاستخدام النموذج الاحترافي (Nano Banana Pro)، يجب اختيار مشروع Google Cloud الخاص بك.",
    connectBtn: "اختيار مفتاح API",
    billingNote: "يتطلب هذا النموذج مشروعاً مدفوعاً. راجع تفاصيل الفوترة.",
    styles: {
      professional_enhance: { name: "تحسين احترافي", desc: "تحسين الوضوح والإضاءة والملمس مع الحفاظ على الهوية بنسبة 100٪." },
      sketch_to_digital: { name: "رسم إلى رقمي", desc: "تحويل الرسومات الأولية إلى فن رقمي واقعي ومتقن." },
      patterned_noir: { name: "نوار منقط", desc: "أبيض وأسود بتباين عالي مع إضاءة بنمط نقاط وزاوية تصوير منخفضة." },
      surreal_hand: { name: "سريالية مظلمة", desc: "صورة سوداء وبيضاء، يد تغطي الفم مع ابتسامة مرسومة على الكف." },
      corporate: { name: "مدير تنفيذي", desc: "إضاءة استوديو احترافية، خلفية رمادية متدرجة، زي رسمي أنيق." },
      tech_startup: { name: "رائد أعمال تقني", desc: "خلفية مكتب عصري مفتوح، ملابس أنيقة غير رسمية (Smart Casual)." },
      outdoor: { name: "إضاءة طبيعية", desc: "إضاءة الساعة الذهبية، خلفية طبيعية، جو دافئ وودود." },
      studio_bw: { name: "استوديو أبيض وأسود", desc: "تباين عالي، ظلال درامية، طابع فني كلاسيكي." },
      vintage_film: { name: "طابع سينمائي كلاسيكي", desc: "ألوان دافئة (Sepia)، نسيج محبب، ومظهر كلاسيكي خالد." },
      cyberpunk: { name: "سايبر بانك نيون", desc: "ألوان نيون زاهية، خلفية مدينة مستقبلية، وإضاءة درامية." },
    },
    quickPrompts: [
      "اجعلها بالأبيض والأسود",
      "زيادة سطوع الإضاءة",
      "تغبيش الخلفية أكثر",
      "اجعل المظهر أكثر جدية"
    ]
  }
};