import React from 'react';
import { HeadshotStyle } from '../types';
import { BriefcaseIcon, CameraIcon, MonitorIcon, SunIcon, FilmIcon, ZapIcon, WandSparklesIcon, PencilIcon, HandIcon, GridIcon, LampIcon, BlindsIcon, SplitIcon, SunglassesIcon, MoonIcon, WindowIcon, RingLightIcon, BrushIcon, PenToolIcon, PaletteIcon, CrayonIcon, CrackedFaceIcon, LayersIcon } from './Icons';

interface StyleCardProps {
  style: HeadshotStyle;
  name: string;
  description: string;
  isSelected: boolean;
  onSelect: (style: HeadshotStyle) => void;
}

const StyleCard: React.FC<StyleCardProps> = ({ style, name, description, isSelected, onSelect }) => {
  const Icon = () => {
    switch (style.icon) {
      case 'enhance': return <WandSparklesIcon className="w-6 h-6" />;
      case 'pencil': return <PencilIcon className="w-6 h-6" />;
      case 'sketch_pen': return <PenToolIcon className="w-6 h-6" />;
      case 'brush': return <BrushIcon className="w-6 h-6" />;
      case 'palette': return <PaletteIcon className="w-6 h-6" />;
      case 'crayon': return <CrayonIcon className="w-6 h-6" />;
      case 'cracked_mask': return <CrackedFaceIcon className="w-6 h-6" />;
      case 'layers': return <LayersIcon className="w-6 h-6" />;
      case 'lamp': return <LampIcon className="w-6 h-6" />;
      case 'grid': return <GridIcon className="w-6 h-6" />;
      case 'blinds': return <BlindsIcon className="w-6 h-6" />;
      case 'split': return <SplitIcon className="w-6 h-6" />;
      case 'sunglasses': return <SunglassesIcon className="w-6 h-6" />;
      case 'moon': return <MoonIcon className="w-6 h-6" />;
      case 'window': return <WindowIcon className="w-6 h-6" />;
      case 'ring': return <RingLightIcon className="w-6 h-6" />;
      case 'hand': return <HandIcon className="w-6 h-6" />;
      case 'briefcase': return <BriefcaseIcon className="w-6 h-6" />;
      case 'monitor': return <MonitorIcon className="w-6 h-6" />;
      case 'sun': return <SunIcon className="w-6 h-6" />;
      case 'film': return <FilmIcon className="w-6 h-6" />;
      case 'zap': return <ZapIcon className="w-6 h-6" />;
      default: return <CameraIcon className="w-6 h-6" />;
    }
  };

  return (
    <button
      onClick={() => onSelect(style)}
      className={`relative group flex flex-col items-start p-6 rounded-xl border transition-all duration-300 text-start w-full h-full
        ${isSelected 
          ? 'bg-brand-500/10 border-brand-500 ring-2 ring-brand-500 ring-opacity-50' 
          : 'bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-750'
        }
      `}
    >
      <div className={`p-3 rounded-lg mb-4 ${style.previewColor} text-white`}>
        <Icon />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 font-arabic">{name}</h3>
      <p className="text-sm text-slate-400 leading-relaxed font-arabic">{description}</p>
      
      {isSelected && (
        <div className="absolute top-4 rtl:left-4 rtl:right-auto ltr:right-4 ltr:left-auto">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
          </span>
        </div>
      )}
    </button>
  );
};

export default StyleCard;