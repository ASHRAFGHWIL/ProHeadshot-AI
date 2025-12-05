import React from 'react';
import { BriefcaseIcon, CameraIcon, MonitorIcon, SunIcon, FilmIcon, ZapIcon, WandSparklesIcon, PencilIcon, HandIcon, GridIcon, LampIcon, BlindsIcon, SplitIcon, SunglassesIcon, MoonIcon, WindowIcon, RingLightIcon, BrushIcon, PenToolIcon, PaletteIcon, CrayonIcon, CrackedFaceIcon, LayersIcon, RocketIcon, EyeIcon, BuildingIcon, HeartIcon, DumbbellIcon } from './Icons';

export const StyleIcon: React.FC<{ icon: string, className?: string }> = ({ icon, className }) => {
    switch (icon) {
      case 'enhance': return <WandSparklesIcon className={className} />;
      case 'pencil': return <PencilIcon className={className} />;
      case 'sketch_pen': return <PenToolIcon className={className} />;
      case 'brush': return <BrushIcon className={className} />;
      case 'palette': return <PaletteIcon className={className} />;
      case 'crayon': return <CrayonIcon className={className} />;
      case 'cracked_mask': return <CrackedFaceIcon className={className} />;
      case 'layers': return <LayersIcon className={className} />;
      case 'lamp': return <LampIcon className={className} />;
      case 'grid': return <GridIcon className={className} />;
      case 'blinds': return <BlindsIcon className={className} />;
      case 'split': return <SplitIcon className={className} />;
      case 'sunglasses': return <SunglassesIcon className={className} />;
      case 'moon': return <MoonIcon className={className} />;
      case 'window': return <WindowIcon className={className} />;
      case 'ring': return <RingLightIcon className={className} />;
      case 'hand': return <HandIcon className={className} />;
      case 'briefcase': return <BriefcaseIcon className={className} />;
      case 'monitor': return <MonitorIcon className={className} />;
      case 'sun': return <SunIcon className={className} />;
      case 'film': return <FilmIcon className={className} />;
      case 'zap': return <ZapIcon className={className} />;
      case 'rocket': return <RocketIcon className={className} />;
      case 'eye': return <EyeIcon className={className} />;
      case 'building': return <BuildingIcon className={className} />;
      case 'heart': return <HeartIcon className={className} />;
      case 'dumbbell': return <DumbbellIcon className={className} />;
      default: return <CameraIcon className={className} />;
    }
};