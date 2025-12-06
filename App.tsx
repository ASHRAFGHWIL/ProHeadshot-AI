import React, { useState, useRef, useEffect } from 'react';
import { AppStep, HeadshotStyle, Language } from './types';
import { STYLES_DATA, TRANSLATIONS } from './constants';
import { generateOrEditImage } from './services/geminiService';
import StyleDropdown from './components/StyleDropdown';
import { StyleIcon } from './components/StyleIcon';
import { 
  CameraIcon, 
  UploadCloudIcon, 
  ChevronLeftIcon, 
  SparklesIcon, 
  DownloadIcon, 
  MagicWandIcon,
  LibraryIcon,
  TrashIcon,
  XIcon,
  HistoryIcon,
  ZapIcon
} from './components/Icons';

const App: React.FC = () => {
  // Default to Arabic as requested
  const [language, setLanguage] = useState<Language>('ar');
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.UPLOAD);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<HeadshotStyle | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editPrompt, setEditPrompt] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  // Gallery state
  const [imageLibrary, setImageLibrary] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);

  const t = TRANSLATIONS[language];
  const isRTL = language === 'ar';

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Update document font family based on language
    if (language === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', system-ui, sans-serif";
    }
  }, [language]);

  const handleSelectKey = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
    }
  };

  // Load history from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('headshot_app_library');
      if (stored) {
        setImageLibrary(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Failed to load history", e);
    }
  }, []);

  const saveToLibrary = (newImage: string) => {
    setImageLibrary(prev => {
        // Prevent duplicates
        const filtered = prev.filter(img => img !== newImage);
        // Add to front, limit to 6 to save space
        const updated = [newImage, ...filtered].slice(0, 6);
        
        // Try persisting
        try {
            localStorage.setItem('headshot_app_library', JSON.stringify(updated));
        } catch (e) {
            console.warn("LocalStorage quota exceeded, keeping in memory only.");
        }
        return updated;
    });
  };

  const removeFromLibrary = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = [...imageLibrary];
    updated.splice(index, 1);
    setImageLibrary(updated);
    try {
        localStorage.setItem('headshot_app_library', JSON.stringify(updated));
    } catch (e) { console.warn("Failed to save history update"); }
  };

  const clearLibrary = () => {
    setImageLibrary([]);
    localStorage.removeItem('headshot_app_library');
  };

  const selectFromLibrary = (img: string) => {
    setUploadedImage(img);
    setCurrentStep(AppStep.STYLE_SELECTION);
    setShowGallery(false);
    setError(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setUploadedImage(result);
        saveToLibrary(result);
        setCurrentStep(AppStep.STYLE_SELECTION);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStyleSelect = (style: HeadshotStyle) => {
    setSelectedStyle(style);
  };

  const handleGenerate = async () => {
    if (!uploadedImage || !selectedStyle) return;

    setIsGenerating(true);
    setCurrentStep(AppStep.GENERATING);
    setError(null);

    try {
      const resultBase64 = await generateOrEditImage(uploadedImage, selectedStyle.prompt);
      setGeneratedImage(resultBase64);
      setCurrentStep(AppStep.RESULT);
    } catch (err: any) {
      console.error(err);
      
      // Handle key missing error (re-prompt)
      if (err.message && (err.message.includes("Requested entity was not found") || err.message.includes("404"))) {
        setError(t.errorBilling);
        setCurrentStep(AppStep.STYLE_SELECTION);
      } else if (err.message && err.message.includes("content policy")) {
         setError(t.errorGeneric + " (Safety Filter)");
         setCurrentStep(AppStep.STYLE_SELECTION);
      } else {
         setError(t.errorGeneric);
         setCurrentStep(AppStep.STYLE_SELECTION);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEdit = async () => {
    if (!generatedImage || !editPrompt.trim()) return;

    setIsGenerating(true);
    
    try {
      const finalPrompt = editPrompt; 
      const resultBase64 = await generateOrEditImage(`data:image/jpeg;base64,${generatedImage}`, finalPrompt);
      setGeneratedImage(resultBase64);
      setEditPrompt(""); 
    } catch (err: any) {
      console.error(err);
      if (err.message && (err.message.includes("Requested entity was not found") || err.message.includes("404"))) {
         setError(t.errorBilling);
      } else {
         setError(t.errorEdit);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setUploadedImage(null);
    setGeneratedImage(null);
    setSelectedStyle(null);
    setCurrentStep(AppStep.UPLOAD);
    setError(null);
    setEditPrompt("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${generatedImage}`;
    link.download = `headshot-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- Render Steps ---

  const renderUpload = () => (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-brand-500/10 rounded-full mb-4 ring-1 ring-brand-500/30">
          <CameraIcon className="w-8 h-8 text-brand-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6 font-arabic leading-tight">
          {t.title}
        </h1>
        <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed font-arabic">
          {t.subtitle}
        </p>
      </div>

      <div className="w-full max-w-md space-y-8">
        <label 
          htmlFor="file-upload" 
          className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-700 rounded-2xl cursor-pointer hover:border-brand-500 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex flex-col items-center justify-center pt-5 pb-6 relative z-10">
            <UploadCloudIcon className="w-12 h-12 mb-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
            <p className="mb-2 text-lg text-slate-300 font-medium font-arabic">{t.uploadTitle}</p>
            <p className="text-sm text-slate-500 font-arabic">{t.uploadSubtitle}</p>
          </div>
          <input 
            id="file-upload" 
            type="file" 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileUpload}
            ref={fileInputRef}
          />
        </label>

        {/* Recent Uploads Section */}
        {imageLibrary.length > 0 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="text-slate-400 text-sm font-semibold font-arabic flex items-center gap-2">
                <HistoryIcon className="w-4 h-4" />
                {t.recentUploads}
              </h3>
              <button onClick={() => setShowGallery(true)} className="text-brand-400 text-xs hover:text-brand-300 font-arabic">
                {t.library}
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {imageLibrary.slice(0, 4).map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => selectFromLibrary(img)}
                  className="relative aspect-square rounded-lg overflow-hidden border border-slate-800 hover:border-brand-500 transition-all group"
                >
                  <img src={img} alt={`Recent ${idx}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded font-arabic">{t.useImage}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderStyleSelection = () => (
    <div className="w-full max-w-5xl mx-auto py-8 animate-fade-in">
      <div className="flex items-center mb-8">
        <button 
          onClick={handleReset}
          className="ltr:mr-4 rtl:ml-4 p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
        >
          {/* Rotate icon for RTL */}
          <ChevronLeftIcon className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
        <h2 className="text-2xl font-bold text-white font-arabic">{t.chooseStyle}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Source Image */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 sticky top-6">
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider font-arabic">{t.sourceImage}</h3>
               <button onClick={() => setShowGallery(true)} className="text-brand-400 text-xs hover:underline font-arabic flex items-center gap-1">
                 <LibraryIcon className="w-3 h-3" />
                 {t.library}
               </button>
            </div>
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-950 shadow-2xl group">
              {uploadedImage && (
                <img 
                  src={uploadedImage} 
                  alt="Original" 
                  className="w-full h-full object-cover"
                />
              )}
              {/* Quick swap overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <button onClick={() => setShowGallery(true)} className="px-4 py-2 bg-slate-800 rounded-lg text-white text-sm font-arabic border border-slate-600 hover:bg-slate-700">
                    Change Photo
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* Style Selection - Professional Dropdown Layout */}
        <div className="lg:col-span-2 flex flex-col h-full">
            <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 flex-grow">
               <div className="mb-8">
                  <StyleDropdown 
                    styles={STYLES_DATA} 
                    selectedStyle={selectedStyle} 
                    onSelect={handleStyleSelect} 
                    translations={t.styles}
                    label={t.chooseStyle}
                  />
               </div>

               {/* Selected Style Details Card */}
               <div className="transition-all duration-300 ease-in-out min-h-[160px]">
                 {selectedStyle ? (
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 animate-fade-in">
                       <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${selectedStyle.previewColor} text-white shadow-lg`}>
                              <StyleIcon icon={selectedStyle.icon} className="w-8 h-8" />
                          </div>
                          <div>
                             <h3 className="text-xl font-bold text-white mb-2 font-arabic">
                                {t.styles[selectedStyle.id as keyof typeof t.styles].name}
                             </h3>
                             <p className="text-slate-300 leading-relaxed font-arabic">
                                {t.styles[selectedStyle.id as keyof typeof t.styles].desc}
                             </p>
                          </div>
                       </div>
                    </div>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-600 border-2 border-dashed border-slate-800 rounded-xl p-8">
                        <MagicWandIcon className="w-8 h-8 mb-3 opacity-50" />
                        <p className="font-arabic">Select a style to preview details</p>
                    </div>
                 )}
               </div>

               <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleGenerate}
                    disabled={!selectedStyle}
                    className={`
                      flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg font-arabic w-full md:w-auto justify-center
                      ${selectedStyle 
                        ? 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-brand-500/25 hover:shadow-brand-500/40 transform hover:-translate-y-0.5' 
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }
                    `}
                  >
                    <SparklesIcon className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                    {t.generateBtn}
                  </button>
               </div>
               
               {error && (
                <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-200 mt-4 font-arabic animate-fade-in flex flex-col items-start gap-2">
                  <p>{error}</p>
                  {error === t.errorBilling && (
                    <button 
                        onClick={handleSelectKey}
                        className="text-sm underline hover:text-white"
                    >
                        {t.connectBtn}
                    </button>
                  )}
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );

  const renderGenerating = () => (
    <div className="flex flex-col items-center justify-center h-[70vh] animate-fade-in text-center px-4">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <SparklesIcon className="w-8 h-8 text-brand-500 animate-pulse" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-white mb-3 font-arabic">{t.generatingTitle}</h2>
      <p className="text-slate-400 text-lg max-w-md font-arabic leading-relaxed">
        {t.generatingDesc}
      </p>
    </div>
  );

  const renderResult = () => (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 animate-fade-in pb-20">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={handleReset}
          className="flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeftIcon className={`w-5 h-5 ltr:mr-1 rtl:ml-1 ${isRTL ? 'rotate-180' : ''}`} />
          <span className="font-arabic">{t.startOver}</span>
        </button>
        <div className="flex gap-3">
           <button 
            onClick={handleDownload}
            className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
          >
            <DownloadIcon className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <span className="font-arabic">{t.download}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Result Image Area */}
        <div className="relative group">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10">
            {isGenerating && (
               <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center">
                 <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-white font-medium font-arabic">{t.refining}</p>
                 </div>
               </div>
            )}
            
            {generatedImage && (
              <img 
                src={`data:image/jpeg;base64,${generatedImage}`} 
                alt="Generated Headshot" 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Controls & Editing */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 font-arabic">{t.resultTitle}</h2>
            <p className="text-slate-400 font-arabic leading-relaxed">
              {t.resultDesc}
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center mb-4 text-brand-400">
              <MagicWandIcon className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              <h3 className="font-semibold uppercase tracking-wide text-sm font-arabic">{t.magicEditor}</h3>
            </div>
            
            <p className="text-sm text-slate-400 mb-4 font-arabic">
              {t.magicEditorDesc}
            </p>

            <div className="relative">
              <textarea
                value={editPrompt}
                onChange={(e) => setEditPrompt(e.target.value)}
                placeholder={t.magicEditorPlaceholder}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none h-32 font-arabic"
                disabled={isGenerating}
              />
              <button
                onClick={handleEdit}
                disabled={isGenerating || !editPrompt.trim()}
                className="absolute bottom-4 ltr:right-4 rtl:left-4 p-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                title="Apply Edit"
              >
                <SparklesIcon className="w-5 h-5" />
              </button>
            </div>
            
             {error && (
              <div className="mt-3 p-3 bg-red-900/20 rounded-lg text-red-300 text-sm font-arabic border border-red-500/20">
                {error}
                {error === t.errorBilling && (
                    <div className="mt-2">
                        <button 
                            onClick={handleSelectKey}
                            className="text-xs bg-red-800 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                            {t.connectBtn}
                        </button>
                    </div>
                  )}
              </div>
            )}
          </div>

           <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-800/50">
             <h4 className="text-sm font-semibold text-slate-300 mb-3 font-arabic">{t.quickActions}</h4>
             <div className="flex flex-wrap gap-2">
               {t.quickPrompts.map((prompt) => (
                 <button
                   key={prompt}
                   onClick={() => {
                     setEditPrompt(prompt);
                   }}
                   className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs text-slate-300 transition-colors font-arabic"
                 >
                   {prompt}
                 </button>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30 transition-all duration-300">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse" onClick={handleReset} style={{cursor: 'pointer'}}>
            <div className="bg-gradient-to-tr from-brand-600 to-brand-400 p-1.5 rounded-lg">
              <CameraIcon className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight font-arabic">
              {language === 'ar' ? 'مصور' : 'Headshot'}
              <span className="text-brand-400">{language === 'ar' ? 'البورتريه' : 'AI'}</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowGallery(true)}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
              title={t.library}
            >
              <LibraryIcon className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-slate-800 mx-1"></div>
            <button 
              onClick={() => setLanguage(l => l === 'en' ? 'ar' : 'en')}
              className="text-sm font-semibold px-3 py-1 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow flex flex-col">
          {currentStep === AppStep.UPLOAD && renderUpload()}
          {currentStep === AppStep.STYLE_SELECTION && renderStyleSelection()}
          {currentStep === AppStep.GENERATING && renderGenerating()}
          {currentStep === AppStep.RESULT && renderResult()}
      </main>
      
      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowGallery(false)}></div>
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-fade-in">
             <div className="flex items-center justify-between p-4 border-b border-slate-800">
               <h3 className="text-xl font-bold font-arabic flex items-center gap-2">
                 <LibraryIcon className="w-5 h-5 text-brand-400" />
                 {t.library}
               </h3>
               <button onClick={() => setShowGallery(false)} className="p-2 hover:bg-slate-800 rounded-lg">
                 <XIcon className="w-5 h-5 text-slate-400" />
               </button>
             </div>
             
             <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
               {imageLibrary.length === 0 ? (
                 <div className="flex flex-col items-center justify-center py-12 text-slate-500">
                   <LibraryIcon className="w-12 h-12 mb-3 opacity-20" />
                   <p className="font-arabic">{t.noImages}</p>
                 </div>
               ) : (
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                   {imageLibrary.map((img, idx) => (
                     <div key={idx} className="relative aspect-[3/4] group rounded-xl overflow-hidden border border-slate-800">
                       <img src={img} alt={`Saved ${idx}`} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                         <div className="flex gap-2">
                           <button 
                             onClick={() => selectFromLibrary(img)}
                             className="flex-1 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold py-2 rounded font-arabic"
                           >
                             {t.useImage}
                           </button>
                           <button 
                             onClick={(e) => removeFromLibrary(idx, e)}
                             className="bg-red-500/20 hover:bg-red-500/40 text-red-200 p-2 rounded"
                             title="Delete"
                           >
                             <TrashIcon className="w-4 h-4" />
                           </button>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>
             
             {imageLibrary.length > 0 && (
                <div className="p-4 border-t border-slate-800 flex justify-end">
                   <button 
                     onClick={clearLibrary}
                     className="text-red-400 text-sm hover:text-red-300 font-arabic flex items-center gap-2 px-3 py-2 hover:bg-red-900/20 rounded-lg transition-colors"
                   >
                     <TrashIcon className="w-4 h-4" />
                     {t.clearHistory}
                   </button>
                </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;