import { HeadshotStyle, Language } from "./types";

export const STYLES_DATA: HeadshotStyle[] = [
  {
    id: "professional_enhance",
    name: "Professional Retouch",
    previewColor: "bg-teal-600",
    icon: "enhance",
    prompt: "Enhance this portrait to look professional and high-quality. Improve lighting, clarity, and texture to create a realistic, studio-quality look. Preserve the subject's likeness and natural features while reducing noise and refining details."
  },
  {
    id: "sketch_to_digital",
    name: "Sketch to Digital",
    previewColor: "bg-indigo-600",
    icon: "pencil",
    prompt: "Transform this pencil sketch into a high-quality, realistic digital portrait. Respect the original sketch's structure and composition. Enhance the image with professional digital painting techniques: apply realistic skin textures, dynamic lighting, and rich colors. Remove sketch lines and paper grain. The result should be a polished, studio-quality digital artwork."
  },
  {
    id: "pencil_sketch",
    name: "Pencil Sketch",
    previewColor: "bg-zinc-500",
    icon: "sketch_pen",
    prompt: "Create a high-quality, hand-drawn pencil sketch of this person. Render this image as a highly detailed graphite pencil drawing on textured, off-white heavy-stock paper. Simulate the use of a full range of graphite grades (from hard 2H for light details to soft 6B for deep shadows). Utilize visible cross-hatching and directional strokes to define volume and shadow. Employ expressive, varying line weights: sharp and dark for occlusion shadows, faint and wispy for highlights and textures. Keep the edges slightly loose or unfinished to maintain an authentic sketchbook aesthetic. Lighting should be high-contrast monochromatic tonal depth. Negative: Color, digital painting, smooth gradients, vector art, gloss, blur, 3D rendering artifacts."
  },
  {
    id: "watercolor_art",
    name: "Watercolor Art",
    previewColor: "bg-cyan-500",
    icon: "brush",
    prompt: "Create a professional hand-painted watercolor illustration of this person. The style must feature soft watercolor washes, visible brush textures, subtle gradients, and organic edges with natural pigment diffusion. Render the subject with artistic precision on textured cold-press watercolor paper, utilizing wet-on-wet techniques for blending and distinct dry-brush strokes for details. The lighting should be soft and natural, enhancing the fluid, translucent quality of the medium. Maintain the subject's likeness while strictly adhering to a traditional analog watercolor aesthetic. Negative: digital vector look, sharp artificial outlines, opaque acrylic look, photography."
  },
  {
    id: "oil_painting",
    name: "Oil Painting",
    previewColor: "bg-emerald-800",
    icon: "palette",
    prompt: "Create a high-quality, hand-painted oil portrait of this person. Apply the aesthetic of traditional oil painting with visible, textured brushstrokes (impasto) and rich, layered colors. The image should exhibit the physical properties of oil paint on canvas, including soft edges, organic blending, and tonal depth. Lighting should be atmospheric and classical, enhancing the subject's features with a warm, painterly glow. The background should be abstract and textured. Negative: digital smoothness, vector art, hyper-realistic photography, flat colors."
  },
  {
    id: "pastel_art",
    name: "Pastel Art",
    previewColor: "bg-rose-400",
    icon: "crayon",
    prompt: "Create a soft, hand-drawn pastel illustration of this person. Render the image with the texture of dry pastel crayons on coarse-grain paper, featuring visible stroke marks, soft blending, and powdery edges. The lighting should be warm and diffused, creating gentle shadows and highlights. The color palette should be harmonious and slightly desaturated, characteristic of traditional pastel art. Maintain the subject's likeness while prioritizing an artistic, sketch-like quality with organic imperfections. Negative: shiny digital look, vector sharpness, hyper-realism, dark harsh shadows."
  },
  {
    id: "surreal_cracks",
    name: "Surreal Cracks",
    previewColor: "bg-neutral-900",
    icon: "cracked_mask",
    prompt: "Using the uploaded image as a reference, create a high-resolution, black-and-white close-up showing the right side of the subject's face, focusing on the eye and cheek. The composition is a tight vertical crop, highlighting the texture and surreal transformation of the face. Facial Features and Transformation: The subject has a well-defined jaw and cheekbones, natural lips, and a strong nose. The right eye is completely colorless, designed as a solid, reflective black sphere (sclera and iris are black), giving a dramatic and unsettling appearance. The skin around the eye and cheekbones, extending slightly onto the forehead and jaw, is covered with a thick, cracked layer resembling peeling paint, dried plaster, or old porcelain (cracker effect). This cracked layer is white/light gray, contrasting sharply with the dark, textured, granular surface visible beneath. A single, teardrop-shaped droplet of white, cracked material is visible just below the lower eyelid. The hair is natural, short, or styled as in the reference image and is clearly visible at the far left of the image. Composition and Perspective: Extremely close-up, portrait orientation. The focus is sharp on the eye and the intricate texture of the flaking skin, with a shallow depth of field that blurs the background and the left side of the face/hair. The perspective is slightly angled, looking directly at the right side of the face. Color and Tone: Black and white monochrome. The high contrast highlights the stark white cracks on the dark, rough-textured underlayer and the deep black eye. Rich tonal variations range from bright white on the flaking edges and raised lip areas, through detailed medium grays in the rough-textured areas, to deep black in the eye and shadow areas. Lighting and Atmosphere: Dramatic studio lighting, with a main light slightly angled forward to the right, casts sharp highlights on the flaky edges and lips, and deep shadows that enhance the three-dimensional texture of the cracks. The atmosphere is dark, surreal, unsettling, and richly textured. Artistic Style: Hyperrealistic photography, conceptual portraiture, dark fantasy, horror-inspired, highly detailed texture drawing, realistic rendering, 8K resolution, cinematic quality. Negative Notes: Full body, animation, drawing, low resolution, blurred edges, colors, colored eyes, multiple subjects, text, signature."
  },
  {
    id: "mixed_media",
    name: "Mixed Media Art",
    previewColor: "bg-stone-600",
    icon: "layers",
    prompt: "This person, with the exact same facial features, eye details, hairstyle, and hair color as the reference photograph, captured with meticulous detail and a natural, realistic complexion. The image is expressive and profound, rendered in a mixed media style using thick brushstrokes, a rough texture, and prominent paint droplets. The composition is close-up and tightly framed, focusing on the upper chest and neckline while keeping the face fully visible with sharp, precisely defined features that mirror the reference photograph, without any blurring or abstraction. The subject's posture suggests a slight upward tilt of the head and a forward orientation, reflected in the placement of shadows and the angles of the body. The clothing is masculine: a dark shirt or jacket, embellished with multi-layered rough strokes, fine pleats, and subtle highlights using deep charcoal, muted black, and muted earth tones. The artistic style blends contemporary expressionism with neo-pictorial abstraction, highlighting emotional depth through dramatic chiaroscuro lighting and finely textured surfaces. The skin around the neck and collarbone features expressive abstract shades of pale green, cool gray, and deep blue blended with muted earth tones, while the face remains entirely realistic and distinct. A distinctive horizontal line runs across the canvas below the collarbone, reinforcing the effect of breaking across two panels. The background is a somber, abstract mix of deep olive green, pale yellow, and dark brown, with layers of scratches, blotches, and dripping textures. A thin, curved white vertical line descends from the upper left, creating a dramatic contrast. The overall atmosphere is somber, contemplative, atmospheric, and rawly emotional, with high-contrast lighting that accentuates the textured medium and expressive depth. Cons: Blurry eyes, pale face, facial features stripped away, inaccurate facial structure, distortion, little detail, dim lighting, AI artifacts, artificial skin, distorted anatomy."
  },
  {
    id: "orange_blue",
    name: "Orange & Blue Split",
    previewColor: "bg-blue-800",
    icon: "split",
    prompt: "Create a portrait of this person, captured with meticulous detail and natural skin. The subject stands confidently in a smart, masculine pose—body slightly away from the camera, gaze gently turned to the side, and hands resting comfortably near chest. Attire is modern, casual menswear (fitted T-shirt or light shirt with jeans or tailored trousers). A striking vertical band of warm orange light brightens the face and body, creating strong contrast and deep shadows. The background is a clean, minimalist blue, bathed in cool ambient blue light. Maintain the subject's likeness. High resolution, photorealistic."
  },
  {
    id: "dynamic_red",
    name: "Dynamic Red",
    previewColor: "bg-red-600",
    icon: "sunglasses",
    prompt: "Create a portrait of this person, likely in their forties, with the same facial features, hairstyle, and hair color as in the reference image, captured in sharp detail and with natural skin, stands in a dynamic, high-angle shot. He wears a black Designoart hat, stylish sunglasses that dangle slightly, a black leather jacket, a black shirt, black trousers, and black and gray sneakers. His right hand adjusts his sunglasses while his left rests on his hip, looking directly at the camera. The background is a bright, static red. Studio lighting, dramatic, high contrast, and natural shadows. Negative: Blurry, low resolution, extra edges, poor anatomy, watermark, text."
  },
  {
    id: "neon_night",
    name: "Neon Night",
    previewColor: "bg-fuchsia-800",
    icon: "moon",
    prompt: "A man, likely in his early fifties, with the exact same facial features, hairstyle, and hair color as the reference image, captured in fine detail and with natural-looking skin. He wears a black leather jacket and looks directly at the viewer in a medium shot, slightly off-center. The scene is an urban environment at night, illuminated by vibrant neon lights that cast strong pink and blue hues on his face and jacket. The lighting creates a high-contrast, distinctive atmosphere. The image was shot using a state-of-the-art cinematic lens (85mm f/1.4) to achieve rich texture, soft background blur, and precise color transitions, ensuring a hyper-realistic portrait that perfectly matches the reference man's facial features and style. Cons: Blurry, Low Resolution, Extra Edges, Poor Anatomy, Watermark, Text"
  },
  {
    id: "golden_hour_knit",
    name: "Golden Hour Knit",
    previewColor: "bg-amber-700",
    icon: "window",
    prompt: "Indoor cinematic portrait of this person under warm golden hour light spilling through blinds. He wears a cream knit sweater, leaning against a wooden wall, eyes half-lit, expression thoughtful. The interplay of light and shadow forms geometric patterns on his face and clothes. Background softly blurred with amber highlights. Captured with an 85mm lens for intimate cinematic mood, realistic textures, and emotional subtlety. Negative: Blurry, low resolution, bad anatomy, watermark, text."
  },
  {
    id: "ring_light",
    name: "Ring Light",
    previewColor: "bg-rose-700",
    icon: "ring",
    prompt: "A man, same facial features and hairstyle, wearing a casual light hoodie. A large ring light placed directly in front creates circular reflections in his pupils and soft, even shadows around his face. Two low-powered PAR Cans behind him add faint color gradients (violet and amber) that subtly outline his silhouette against the black background. Negative: blurry, low-res, watermark, text."
  },
  {
    id: "noir_lamp",
    name: "1940s Noir",
    previewColor: "bg-stone-950",
    icon: "lamp",
    prompt: "Create a 1940s film noir style portrait based on this person. Illumination comes from a single old brass desk lamp, casting deep, dramatic shadows and warm light effects (rendered in cinematic black and white). The atmosphere is smoky and melancholic. High contrast chiaroscuro lighting. Close-up shot, sharp details, natural skin texture. High fidelity to the original subject."
  },
  {
    id: "patterned_noir",
    name: "Patterned Noir",
    previewColor: "bg-neutral-800",
    icon: "grid",
    prompt: "Create a monochromatic artistic portrait of this person. Illuminate them with high-contrast patterned light, creating a distinctive network of white dots and deep shadows on their features against a pure black background. The perspective should be from the ground looking up (low angle), with the subject looking directly into the lens. Cinematic 85mm f/1.4 style, rich texture, soft blur, subtle gray transitions. Meticulous detail, natural skin texture."
  },
  {
    id: "outdoor_stripes",
    name: "Striped Shadows",
    previewColor: "bg-gray-500",
    icon: "blinds",
    prompt: "Create a bright, high-contrast black and white photograph of this person, shot outdoors against a plain light background. Capture them in full sharp detail with natural skin texture. The subject should be seen in a mid-shot, looking to the right, from a slightly low angle, wearing a light-colored, short-sleeved mesh button-up shirt. Strong directional lighting casts distinct striped shadows across their body and attire. Maintain the subject's likeness. Avoid: blurry, low-res, extra limbs, bad anatomy, watermark, text."
  },
  {
    id: "surreal_hand",
    name: "Surreal Hand",
    previewColor: "bg-zinc-950",
    icon: "hand",
    prompt: "Transform this image into a dark surrealist art piece. The subject is captured in a striking close-up, their hand covering their mouth. A dark, elegant smile is etched into the palm of the hand. The subject wears a simple, dark hooded robe with partial illumination. The image is black and white with high-contrast lighting from above, creating deep shadows and mystery. Preserve the subject's likeness in the visible areas."
  },
  {
    id: "corporate",
    name: "Corporate Executive",
    previewColor: "bg-slate-700",
    icon: "briefcase",
    prompt: "Create a professional corporate executive headshot of this person. Use a neutral grey gradient studio background. The person should be wearing a high-end tailored business suit. Lighting should be soft and flattering studio lighting. Elevate the presentation to be LinkedIn-ready and extremely professional while maintaining the subject's likeness. High resolution, photorealistic, 8k."
  },
  {
    id: "tech_startup",
    name: "Tech Founder",
    previewColor: "bg-blue-600",
    icon: "monitor",
    prompt: "Create a modern tech startup founder headshot of this person. Background should be a blurred, bright modern open-plan office with glass and bokeh. The person should wear premium smart-casual attire (e.g., a high-quality t-shirt with a blazer, or a crisp button-down). Lighting should be bright, natural, and energetic. Maintain the subject's likeness. High resolution, photorealistic."
  },
  {
    id: "outdoor",
    name: "Outdoor Natural",
    previewColor: "bg-amber-600",
    icon: "sun",
    prompt: "Create a professional outdoor lifestyle headshot of this person. Background should be a soft-focus park or city street during golden hour with beautiful bokeh. The person should wear stylish yet relaxed professional clothing. The lighting should be warm, back-lit (rim lighting), and natural. Maintain the subject's likeness. High resolution, photorealistic."
  },
  {
    id: "studio_bw",
    name: "Studio B&W",
    previewColor: "bg-stone-900",
    icon: "camera",
    prompt: "Create a dramatic black and white studio portrait of this person. Use a pure black background. Lighting should be Rembrandt style with high contrast and deep shadows to create depth. The person should look serious and thoughtful. Attire should be simple and dark (e.g., black turtleneck). Maintain the subject's likeness. High resolution, photorealistic, monochrome."
  },
  {
    id: "vintage_film",
    name: "Vintage Film",
    previewColor: "bg-sepia-600", // Will need a custom class or fallback, using sepia tone mapping roughly to amber-900 or orange-900
    icon: "film",
    prompt: "Create a vintage film style portrait of this person. Apply a sepia tone or warm desaturated color palette with grain texture. The background should be a textured, abstract vintage wall or fabric. Lighting should be soft and natural, reminiscent of early 20th-century photography. Attire should appear timeless. Maintain the subject's likeness. High resolution, photorealistic, cinematic, film grain."
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    previewColor: "bg-purple-600",
    icon: "zap",
    prompt: "Transform this person into a futuristic cyberpunk character. The background should be a blurred neon-lit futuristic city at night with pink and blue hues. The lighting on the face should be dramatic, with neon rim lighting (magenta and cyan). Attire can include a futuristic jacket or collar detail. Maintain the subject's likeness. High resolution, photorealistic, 8k, cinematic."
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
      pencil_sketch: { name: "Pencil Sketch", desc: "Hand-drawn graphite look on textured paper with detailed cross-hatching and shading." },
      watercolor_art: { name: "Watercolor Art", desc: "Hand-painted watercolor illustration with soft washes, visible brush textures, and organic edges." },
      oil_painting: { name: "Oil Painting", desc: "Classic oil-on-canvas aesthetic with rich impasto textures and atmospheric lighting." },
      pastel_art: { name: "Pastel Art", desc: "Soft, hand-drawn pastel illustration with crayon textures and gentle blending." },
      surreal_cracks: { name: "Surreal Cracks", desc: "High-contrast B&W close-up with cracked porcelain texture and black eye." },
      mixed_media: { name: "Mixed Media Art", desc: "Expressive mixed media style with thick brushstrokes, rough textures, and emotional depth." },
      orange_blue: { name: "Orange & Blue Split", desc: "Modern masculine pose, vertical orange light strip, cool blue background." },
      dynamic_red: { name: "Dynamic Red", desc: "High angle, red background, leather jacket, sunglasses." },
      neon_night: { name: "Neon Night", desc: "Urban night scene with vibrant pink and blue neon lights, black leather jacket." },
      golden_hour_knit: { name: "Golden Hour Knit", desc: "Warm cinematic lighting spilling through blinds, cream knit sweater, intimate mood." },
      ring_light: { name: "Ring Light", desc: "Even illumination with circular catchlights, casual hoodie, violet/amber backlight." },
      noir_lamp: { name: "1940s Noir", desc: "Cinematic B&W, illuminated by a desk lamp, smoky atmosphere." },
      patterned_noir: { name: "Patterned Noir", desc: "High-contrast B&W with a dot matrix light pattern and low angle." },
      outdoor_stripes: { name: "Striped Shadows", desc: "Bright high-contrast B&W, outdoor, mesh shirt, striped shadows." },
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
      pencil_sketch: { name: "رسم بقلم الرصاص", desc: "مظهر رسم يدوي بالجرافيت على ورق محكم مع تظليل وتفاصيل دقيقة." },
      watercolor_art: { name: "فن الألوان المائية", desc: "رسم بالألوان المائية يدويًا مع تدرجات ناعمة وملمس فرشاة مرئي." },
      oil_painting: { name: "لوحة زيتية", desc: "جمالية الزيت الكلاسيكي على القماش مع قوام بارز وإضاءة جوية." },
      pastel_art: { name: "فن الباستيل", desc: "رسم يدوي ناعم بألوان الباستيل مع قوام طباشيري وإضاءة دافئة." },
      surreal_cracks: { name: "تشققات سريالية", desc: "صورة مقربة بالأبيض والأسود مع نسيج بورسلين متصدع وعين سوداء." },
      mixed_media: { name: "فن الوسائط المختلطة", desc: "أسلوب وسائط مختلطة تعبيري بفرشاة كثيفة وقوام خشن وعمق عاطفي." },
      orange_blue: { name: "برتقالي وأزرق", desc: "إضاءة برتقالية عمودية، خلفية زرقاء باردة، ووقفة عصرية واثقة." },
      dynamic_red: { name: "ديناميكي أحمر", desc: "زاوية عالية، خلفية حمراء، سترة جلدية، نظارات شمسية." },
      neon_night: { name: "ليلة نيون", desc: "مشهد ليلي حضري بأضواء نيون وردية وزرقاء نابضة بالحياة، سترة جلدية سوداء." },
      golden_hour_knit: { name: "كنزة الساعة الذهبية", desc: "إضاءة سينمائية دافئة عبر الستائر، كنزة كريمية، جو حميمي." },
      ring_light: { name: "إضاءة حلقية", desc: "إضاءة متوازنة، انعكاسات دائرية في العين، هودي كاجوال، خلفية سوداء مع لمسات بنفسجية." },
      noir_lamp: { name: "نوار الأربعينات", desc: "أبيض وأسود سينمائي، إضاءة مصباح مكتب، جو ضبابي وكئيب." },
      patterned_noir: { name: "نوار منقط", desc: "أبيض وأسود بتباين عالي مع إضاءة بنمط نقاط وزاوية تصوير منخفضة." },
      outdoor_stripes: { name: "ظلال مخططة", desc: "أبيض وأسود عالي التباين، خارجي، قميص شبكي، ظلال مخططة." },
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
