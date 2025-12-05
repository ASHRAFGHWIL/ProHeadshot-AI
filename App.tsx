import React, { useState, useRef, useCallback } from 'react';
import { AppStep, HeadshotStyle } from './types';
import { STYLES } from './constants';
import { generateOrEditImage } from './services/geminiService';
import StyleCard from './components/StyleCard';
import { 
  CameraIcon, 
  UploadCloudIcon, 
  ChevronLeftIcon, 
  SparklesIcon, 
  DownloadIcon, 
  RefreshIcon,
  MagicWandIcon
} from './components/Icons';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.UPLOAD);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<HeadshotStyle | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editPrompt, setEditPrompt] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Use refs for file input to clear it if needed
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
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
      setError(err.message || "Failed to generate image. Please try again.");
      setCurrentStep(AppStep.STYLE_SELECTION);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEdit = async () => {
    if (!generatedImage || !editPrompt.trim()) return;

    setIsGenerating(true);
    const previousImage = generatedImage;
    // Temporarily show loading state in the result view
    // We stay in RESULT step but show spinner
    
    try {
      // Use the currently generated image as the base for editing
      const resultBase64 = await generateOrEditImage(`data:image/jpeg;base64,${generatedImage}`, editPrompt);
      setGeneratedImage(resultBase64);
      setEditPrompt(""); // Clear prompt on success
    } catch (err: any) {
      console.error(err);
      setError("Failed to edit image. Try a different prompt.");
      // Revert if needed or just show error. The generatedImage state is still the old one if we didn't update it.
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
    link.download = `pro-headshot-${Date.now()}.jpg`;
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
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">
          AI Headshot Photographer
        </h1>
        <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
          Transform your casual selfies into professional, studio-quality headshots in seconds using Gemini AI.
        </p>
      </div>

      <div className="w-full max-w-md">
        <label 
          htmlFor="file-upload" 
          className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-700 rounded-2xl cursor-pointer hover:border-brand-500 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex flex-col items-center justify-center pt-5 pb-6 relative z-10">
            <UploadCloudIcon className="w-12 h-12 mb-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
            <p className="mb-2 text-lg text-slate-300 font-medium">Click to upload photo</p>
            <p className="text-sm text-slate-500">SVG, PNG, JPG (Max 10MB)</p>
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
      </div>
    </div>
  );

  const renderStyleSelection = () => (
    <div className="w-full max-w-5xl mx-auto py-8 animate-fade-in">
      <div className="flex items-center mb-8">
        <button 
          onClick={handleReset}
          className="mr-4 p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white">Choose your style</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Preview of Uploaded Image */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 sticky top-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Source Image</h3>
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-950 shadow-2xl">
              {uploadedImage && (
                <img 
                  src={uploadedImage} 
                  alt="Original" 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* Style Grid */}
        <div className="lg:col-span-2 space-y-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STYLES.map(style => (
              <StyleCard 
                key={style.id} 
                style={style} 
                isSelected={selectedStyle?.id === style.id} 
                onSelect={handleStyleSelect} 
              />
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleGenerate}
              disabled={!selectedStyle}
              className={`
                flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg
                ${selectedStyle 
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-brand-500/25 hover:shadow-brand-500/40 transform hover:-translate-y-0.5' 
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }
              `}
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              Generate Headshot
            </button>
          </div>
          
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-200 mt-4">
              {error}
            </div>
          )}
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
      <h2 className="text-3xl font-bold text-white mb-3">Creating Magic</h2>
      <p className="text-slate-400 text-lg max-w-md">
        Gemini is analyzing your features and applying the <span className="text-brand-400 font-semibold">{selectedStyle?.name}</span> style...
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
          <ChevronLeftIcon className="w-5 h-5 mr-1" />
          Start Over
        </button>
        <div className="flex gap-3">
           <button 
            onClick={handleDownload}
            className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download
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
                    <p className="text-white font-medium">Refining image...</p>
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
            
            {/* Compare on hover (optional enhancement, kept simple for now) */}
          </div>
        </div>

        {/* Controls & Editing */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Your Professional Headshot</h2>
            <p className="text-slate-400">
              Generated using the <strong>{selectedStyle?.name}</strong> style. You can download it now or use AI to refine specific details.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center mb-4 text-brand-400">
              <MagicWandIcon className="w-5 h-5 mr-2" />
              <h3 className="font-semibold uppercase tracking-wide text-sm">AI Magic Editor</h3>
            </div>
            
            <p className="text-sm text-slate-400 mb-4">
              Not quite right? Describe what you want to change.
            </p>

            <div className="relative">
              <textarea
                value={editPrompt}
                onChange={(e) => setEditPrompt(e.target.value)}
                placeholder="e.g. 'Make the background blurred office', 'Add a smile', 'Make the lighting warmer', 'Add a vintage filter'"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none h-32"
                disabled={isGenerating}
              />
              <button
                onClick={handleEdit}
                disabled={isGenerating || !editPrompt.trim()}
                className="absolute bottom-4 right-4 p-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                title="Apply Edit"
              >
                <SparklesIcon className="w-5 h-5" />
              </button>
            </div>
            
             {error && (
              <p className="mt-3 text-red-400 text-sm">{error}</p>
            )}
          </div>

           <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-800/50">
             <h4 className="text-sm font-semibold text-slate-300 mb-3">Quick Actions</h4>
             <div className="flex flex-wrap gap-2">
               {[
                 "Make it black and white",
                 "Brighten the lighting",
                 "Blur the background more",
                 "Make it look more serious"
               ].map((prompt) => (
                 <button
                   key={prompt}
                   onClick={() => {
                     setEditPrompt(prompt);
                     // Optional: auto-submit or let user submit
                   }}
                   className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs text-slate-300 transition-colors"
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
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2" onClick={handleReset} style={{cursor: 'pointer'}}>
            <div className="bg-gradient-to-tr from-brand-600 to-brand-400 p-1.5 rounded-lg">
              <CameraIcon className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">ProHeadshot<span className="text-brand-400">AI</span></span>
          </div>
          <div className="text-xs font-mono text-slate-600 border border-slate-800 rounded px-2 py-1">
             v1.0 • Gemini 2.5 Flash
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
    </div>
  );
};

export default App;
