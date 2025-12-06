import { HeadshotStyle, Language } from "./types";

export const STYLES_DATA: HeadshotStyle[] = [
  {
    id: "cinematic_cartoon",
    name: "Cinematic Cartoon",
    previewColor: "bg-pink-600",
    icon: "rocket",
    prompt: "Generate a high-end 3D cinematic cartoon portrait of this person. Style: Pixar-like 3D animation. Features: Expressive big eyes, smooth stylized skin with subsurface scattering, soft rounded shapes. Lighting: Dramatic studio lighting with rim light to separate subject from background. Background: Blurred, vibrant atmosphere. Render: Octane render, 8k, highly detailed. STRICTLY maintain the subject's recognizable facial identity."
  },
  {
    id: "professional_enhance",
    name: "Professional Retouch",
    previewColor: "bg-teal-600",
    icon: "enhance",
    prompt: "Professional photo retouch of this image. Improve lighting balance, enhance skin texture to be realistic but clean, and sharpen details. output in 8k resolution. STRICTLY maintain the subject's exact facial features and identity. Do not alter facial structure. Style: High-end magazine photography."
  },
  {
    id: "classic_portrait",
    name: "Classic Portrait",
    previewColor: "bg-slate-500",
    icon: "camera",
    prompt: "Classic studio portrait. Angle: Front facing 0 degrees. Lighting: Classic Softbox lighting, soft and flattering. Background: Soft smooth grey. Subject: Head and shoulders, slight smile, shoulders slightly tilted. Style: High-quality professional photography. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "corporate_office",
    name: "Corporate Office Shot",
    previewColor: "bg-blue-700",
    icon: "briefcase",
    prompt: "Corporate Office Portrait. Angle: 15 degrees from front. Location: Modern glass office background. Pose: Standing confidently, hands clasped or holding a laptop. Lighting: Professional white office lighting. Background: Blurred modern office environment. Subject: Professional business attire. Style: High-quality corporate photography. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "hero_angle_low",
    name: "Hero Angle Low Shot",
    previewColor: "bg-indigo-800",
    icon: "rocket",
    prompt: "Heroic Portrait. Angle: Low camera angle looking up at the subject (power shot). Location: Rooftop or dramatic sky background. Pose: Confident, chin slightly raised. Lighting: Cinematic backlighting (rim light) creating a silhouette effect. Style: Dramatic, movie poster aesthetic, high quality. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "night_portrait_glow",
    name: "Night Portrait Soft Glow",
    previewColor: "bg-pink-800",
    icon: "heart",
    prompt: "Night Portrait Soft Glow. Angle: 45 degrees from the left. Location: On a bridge or corniche at night. Pose: Side smiling glance, romantic mood. Lighting: Soft warm glow on face. Background: Beautiful city bokeh (blurred city lights). Style: Romantic, atmospheric, cinematic night photography. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "street_lifestyle",
    name: "Street Lifestyle Shot",
    previewColor: "bg-violet-700",
    icon: "building",
    prompt: "Street Lifestyle Portrait. Angle: 20 degrees from the right. Location: Busy city center at night. Pose: Captured mid-step while walking, candid movement. Lighting: Vibrant neon city lights with reflections on the street/ground. Background: Crowded urban environment at night. Style: Dynamic urban photography, cinematic. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "sport_action",
    name: "Sport Action Portrait",
    previewColor: "bg-orange-600",
    icon: "dumbbell",
    prompt: "Sport Action Portrait. Angle: 10 degrees high angle. Location: Gym or open field. Pose: Light movement or ready stance (athletic). Details: Dramatic lighting, slight sweat beads on skin for realism. Style: High energy sports photography, intense, sharp focus. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "artistic_shadow",
    name: "Artistic Shadow Play",
    previewColor: "bg-stone-950",
    icon: "window",
    prompt: "Artistic Shadow Play Portrait. Angle: 60 degrees from the left. Location: Indoor room with strong window lighting. Pose: Subject positioned for split lighting - half face in light, half in deep shadow. Mood: Serious, dramatic, high contrast. Style: Artistic photography, chiaroscuro. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "extreme_closeup",
    name: "Extreme Close-Up",
    previewColor: "bg-neutral-950",
    icon: "eye",
    prompt: "Extreme Close-Up Portrait. Angle: Direct front facing. Location: Solid black background. Pose: Intense focus on eye expression and facial details. Lighting: Narrow beam lighting focused strictly on the eyes. Style: Macro photography, dramatic, high contrast. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "golden_hour_outdoor",
    name: "Golden Hour Outdoor",
    previewColor: "bg-amber-500",
    icon: "sun",
    prompt: "Outdoor Lifestyle Portrait. Angle: 45 degrees from the right. Location: European street at sunset. Lighting: Golden Hour backlight (rim light) creating a warm halo. Background: Blurred European street with soft bokeh. Subject: Head and shoulders, candid side glance, spontaneous expression. Style: Professional outdoor photography, warm tones. STRICTLY maintain the subject's exact facial features and identity."
  },
  {
    id: "sketch_to_digital",
    name: "Sketch to Digital",
    previewColor: "bg-indigo-600",
    icon: "pencil",
    prompt: "Transform this sketch into a realistic digital painting. Add realistic skin tones, shading, and dramatic lighting while respecting the original line work and composition. Style: High-quality concept art, smooth digital painting. Remove paper grain. Maintain the subject's likeness."
  },
  {
    id: "pencil_sketch",
    name: "Pencil Sketch",
    previewColor: "bg-zinc-500",
    icon: "sketch_pen",
    prompt: "Create a high-quality graphite pencil sketch portrait. detailed cross-hatching shading, rough paper texture, monochromatic grey tones. Style: Traditional fine art sketch. Maintain the subject's facial identity. Negative: color, smooth digital gradients."
  },
  {
    id: "watercolor_art",
    name: "Watercolor Art",
    previewColor: "bg-cyan-500",
    icon: "brush",
    prompt: "Watercolor painting portrait. Soft, translucent color washes, visible paint drips, and wet-on-wet blending techniques. Textured cold-press paper background. Style: Dreamy, artistic, organic edges. Maintain the subject's facial features."
  },
  {
    id: "oil_painting",
    name: "Oil Painting",
    previewColor: "bg-emerald-800",
    icon: "palette",
    prompt: "Classic oil painting portrait on canvas. Visible impasto brushstrokes, rich blended colors, and texture. Rembrandt-style dramatic lighting. Style: Traditional fine art masterpiece. Maintain the subject's facial identity. Negative: flat digital look, photograph."
  },
  {
    id: "pastel_art",
    name: "Pastel Art",
    previewColor: "bg-rose-400",
    icon: "crayon",
    prompt: "Soft pastel crayon drawing. Chalky texture, gentle blending, and warm soft lighting. Rough paper grain visible. Style: Impressionist pastel portrait. Maintain the subject's likeness. Negative: sharp vector lines, glossy finish."
  },
  {
    id: "surreal_cracks",
    name: "Surreal Cracks",
    previewColor: "bg-neutral-900",
    icon: "cracked_mask",
    prompt: "Surreal artistic close-up portrait. The subject's face is cracking like dry white porcelain or peeling paint, revealing a dark, rough texture underneath. One eye is completely solid black (sclera and iris). High contrast black and white photography. Dramatic studio lighting. Maintain the subject's facial structure and identity."
  },
  {
    id: "mixed_media",
    name: "Mixed Media Art",
    previewColor: "bg-stone-600",
    icon: "layers",
    prompt: "Mixed media artistic portrait. Combine realistic photography with thick acrylic brushstrokes, ink splatters, and collage textures. Grunge aesthetic, emotional and expressive. Dark moody colors. Maintain the subject's exact facial features. Negative: clean vector art."
  },
  {
    id: "orange_blue",
    name: "Orange & Blue Split",
    previewColor: "bg-blue-800",
    icon: "split",
    prompt: "Cinematic portrait photography. A vertical beam of warm orange light illuminates one side of the face/body, contrasting with a cool blue deep background. High contrast, dramatic shadows. Subject wears modern casual attire. Photorealistic 8k. Maintain exact facial identity."
  },
  {
    id: "dynamic_red",
    name: "Dynamic Red",
    previewColor: "bg-red-600",
    icon: "sunglasses",
    prompt: "Fashion editorial portrait. Subject wearing a black leather jacket and sunglasses. Background is a flat, vibrant, electric red. High-angle shot, dynamic pose. Sharp focus, studio strobe lighting. Photorealistic. Maintain subject's identity."
  },
  {
    id: "neon_night",
    name: "Neon Night",
    previewColor: "bg-fuchsia-800",
    icon: "moon",
    prompt: "Nighttime urban portrait. Illuminating the face with pink and blue neon rim lighting (cyberpunk aesthetic). Background: blurred city lights / bokeh. Subject wears a dark jacket. High contrast, cinematic color grading. Photorealistic. Maintain exact facial identity."
  },
  {
    id: "golden_hour_knit",
    name: "Golden Hour Knit",
    previewColor: "bg-amber-700",
    icon: "window",
    prompt: "Intimate cinematic portrait. Warm golden hour sunlight streaming through window blinds, casting slat shadows on the face. Subject wearing a cozy cream knit sweater. Dust motes in the air, soft focus background. Photorealistic, emotional. Maintain subject's identity."
  },
  {
    id: "ring_light",
    name: "Ring Light",
    previewColor: "bg-rose-700",
    icon: "ring",
    prompt: "Studio influencer portrait. Illuminated by a large ring light (circular catchlights in eyes). Soft, shadowless frontal lighting. Background: dark with subtle violet and amber backlighting. Subject wears a casual hoodie. sharp focus. Photorealistic. Maintain identity."
  },
  {
    id: "noir_lamp",
    name: "1940s Noir",
    previewColor: "bg-stone-950",
    icon: "lamp",
    prompt: "Film Noir style portrait, black and white. Lit by a single desk lamp, creating deep dramatic shadows (chiaroscuro). Smoky atmosphere, cinematic film grain. 1940s detective aesthetic. Maintain subject's facial features."
  },
  {
    id: "patterned_noir",
    name: "Patterned Noir",
    previewColor: "bg-neutral-800",
    icon: "grid",
    prompt: "Artistic black and white portrait. High contrast. Light is projected through a grid or dot mesh, creating a geometric light pattern across the face. Pitch black background. Dramatic, edgy look. Maintain subject's identity."
  },
  {
    id: "outdoor_stripes",
    name: "Striped Shadows",
    previewColor: "bg-gray-500",
    icon: "blinds",
    prompt: "High-contrast black and white outdoor portrait. Harsh sunlight casting distinct striped shadows (from a fence or pergola) across the subject. Subject wears a textured or mesh shirt. Sharp detail. Photorealistic. Maintain identity."
  },
  {
    id: "surreal_hand",
    name: "Surreal Hand",
    previewColor: "bg-zinc-950",
    icon: "hand",
    prompt: "Dark surrealist art. Black and white photography. Close up. The subject has a hand covering their mouth, but a dark, realistic smile is etched/tattooed onto the palm of the hand. Dramatic top-down lighting. Moody, mysterious. Maintain subject's upper face identity."
  },
  {
    id: "corporate",
    name: "Corporate Executive",
    previewColor: "bg-slate-700",
    icon: "briefcase",
    prompt: "Professional LinkedIn headshot. Subject wearing a high-end business suit. Background: neutral studio grey gradient. Lighting: Soft, flattering, professional 3-point setup. Posture: Confident and approachable. Photorealistic 8k. STRICTLY maintain subject's identity."
  },
  {
    id: "tech_startup",
    name: "Tech Founder",
    previewColor: "bg-blue-600",
    icon: "monitor",
    prompt: "Modern tech founder headshot. Subject wearing smart-casual attire (blazer over t-shirt). Background: Bright, blurred modern open-plan office with glass walls. Lighting: Natural, bright, energetic. Photorealistic. Maintain subject's identity."
  },
  {
    id: "outdoor",
    name: "Outdoor Natural",
    previewColor: "bg-amber-600",
    icon: "sun",
    prompt: "Lifestyle outdoor headshot. Golden hour lighting (warm, soft). Background: Blurred park or city street with bokeh. Subject wearing stylish relaxed clothing. Smile: Natural and friendly. Photorealistic 8k. Maintain subject's identity."
  },
  {
    id: "studio_bw",
    name: "Studio B&W",
    previewColor: "bg-stone-900",
    icon: "camera",
    prompt: "Classic studio portrait, black and white. Background: Solid black. Lighting: Rembrandt lighting (triangle of light on cheek), high contrast. Subject wearing a black turtleneck or dark simple clothing. Serious, artistic mood. Photorealistic. Maintain identity."
  },
  {
    id: "vintage_film",
    name: "Vintage Film Look",
    previewColor: "bg-sepia-600",
    icon: "film",
    prompt: "Vintage 1920s photograph with sepia tone, heavy film grain, vignette, and soft focus, maintaining the subject's facial identity. Negative: color, sharp focus, modern."
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    previewColor: "bg-purple-600",
    icon: "zap",
    prompt: "Futuristic Cyberpunk portrait. Subject wearing tech-wear / futuristic collar. Lighting: Intense neon magenta and cyan rim lights. Background: Blurred futuristic cityscape. Skin texture: Realistic but lit by neon. Cinematic 8k. Maintain subject's identity."
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
    connectDesc: "To use the professional model (Gemini 3 Pro), you need to select your Google Cloud project.",
    connectBtn: "Select API Key",
    billingNote: "This model requires a paid project. See billing details.",
    library: "Library",
    recentUploads: "Recent Uploads",
    noImages: "No images saved yet.",
    clearHistory: "Clear History",
    useImage: "Use",
    styles: {
      cinematic_cartoon: { name: "Cinematic Cartoon", desc: "High-end 3D animated movie style (Pixar-esque) with expressive features and dramatic lighting." },
      professional_enhance: { name: "Professional Retouch", desc: "Enhances clarity, lighting, and texture while preserving 100% of identity." },
      classic_portrait: { name: "Classic Portrait", desc: "Front facing, soft grey background, slight smile, classic softbox lighting." },
      corporate_office: { name: "Corporate Office Shot", desc: "15° Angle, Modern Glass Office, Standing Pose, Professional White Lighting." },
      hero_angle_low: { name: "Hero Angle Low Shot", desc: "Low angle (from below), dramatic sky/building, strong chin-up pose, cinematic backlight." },
      night_portrait_glow: { name: "Night Portrait Soft Glow", desc: "45° left, bridge/corniche at night, side smiling glance, warm soft glow, city bokeh." },
      street_lifestyle: { name: "Street Lifestyle Shot", desc: "20° right, busy city night, candid walking pose, neon lights & reflections." },
      sport_action: { name: "Sport Action Portrait", desc: "10° high angle, gym/field, athletic stance, dramatic lighting, realistic sweat details." },
      artistic_shadow: { name: "Artistic Shadow Play", desc: "60° Left, Window Light, High Contrast, Split Face Shadow, Serious Mood." },
      extreme_closeup: { name: "Extreme Close-Up", desc: "Direct front, solid black background, intense eye focus, narrow dramatic lighting." },
      golden_hour_outdoor: { name: "Golden Hour Outdoor", desc: "45° Right, European Sunset, Candid Side Glance, Backlit." },
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
      vintage_film: { name: "Vintage Film Look", desc: "Vintage 1920s photo with sepia tone, heavy grain, and soft focus." },
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
    connectDesc: "لاستخدام النموذج الاحترافي (Gemini 3 Pro)، يجب اختيار مشروع Google Cloud الخاص بك.",
    connectBtn: "اختيار مفتاح API",
    billingNote: "يتطلب هذا النموذج مشروعاً مدفوعاً. راجع تفاصيل الفوترة.",
    library: "المكتبة",
    recentUploads: "آخر التحميلات",
    noImages: "لا توجد صور محفوظة.",
    clearHistory: "مسح السجل",
    useImage: "استخدم",
    styles: {
      cinematic_cartoon: { name: "كارتون سينمائي", desc: "أسلوب أفلام الرسوم المتحركة ثلاثية الأبعاد (ستايل بيكسار) مع ملامح معبرة وإضاءة درامية." },
      professional_enhance: { name: "تحسين احترافي", desc: "تحسين الوضوح والإضاءة والملمس مع الحفاظ على الهوية بنسبة 100٪." },
      classic_portrait: { name: "بورتريه كلاسيكي", desc: "زاوية مواجهة، خلفية رمادية ناعمة، ابتسامة بسيطة، إضاءة سوفت بوكس كلاسيكية." },
      corporate_office: { name: "لقطة عمل احترافية", desc: "زاوية 15°، مكتب زجاجي حديث، وقفة واثقة، إضاءة بيضاء رسمية، خلفية ضبابية." },
      hero_angle_low: { name: "لقطة درامية بطولية", desc: "زاوية تصوير من الأسفل للأعلى لإظهار القوة، خلفية سماء أو مباني، وقفة واثقة، إضاءة سينمائية." },
      night_portrait_glow: { name: "لقطة رومانسية ليلية", desc: "زاوية 45° يسار، على جسر أو كورنيش ليلاً، نظرة جانبية مبتسمة، ضوء دافئ ناعم وخلفية أضواء المدينة." },
      street_lifestyle: { name: "لقطة شوارع", desc: "20° يمين، وسط المدينة ليلاً، لقطة مشي عفوية، أضواء نيون وانعكاسات." },
      sport_action: { name: "لقطة رياضية طاقتها عالية", desc: "زاوية 10° من الأعلى، جيم أو ساحة مفتوحة، وضعية استعداد، إضاءة درامية، تفاصيل عرق لواقعية." },
      artistic_shadow: { name: "لقطة فنية مع ظلال قوية", desc: "زاوية 60° يسار، إضاءة نافذة قوية، تباين عالي، نصف الوجه في الظل، طابع جاد." },
      extreme_closeup: { name: "لقطة مقربة بارعة", desc: "مواجهة مباشرة، خلفية سوداء، تركيز على تفاصيل العين، إضاءة ضيقة ومحددة." },
      golden_hour_outdoor: { name: "لقطة خارجية ذهبية", desc: "45° يمين، شارع أوروبي وقت الغروب، نظرة جانبية عفوية، إضاءة خلفية." },
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
      vintage_film: { name: "مظهر الفيلم القديم", desc: "صورة من عشرينات القرن الماضي مع لون سيبيا، حبيبات فيلم، وتركيز ناعم." },
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