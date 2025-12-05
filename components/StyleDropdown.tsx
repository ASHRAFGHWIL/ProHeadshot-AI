import React, { useState, useRef, useEffect } from 'react';
import { HeadshotStyle } from '../types';
import { StyleIcon } from './StyleIcon';
import { ChevronDownIcon } from './Icons';

interface StyleDropdownProps {
  styles: HeadshotStyle[];
  selectedStyle: HeadshotStyle | null;
  onSelect: (style: HeadshotStyle) => void;
  translations: any; // pass the translation object for names
  label?: string;
}

const StyleDropdown: React.FC<StyleDropdownProps> = ({ styles, selectedStyle, onSelect, translations, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedName = selectedStyle ? translations[selectedStyle.id]?.name : '';

  // Get color for trigger button or default
  const triggerColorClass = selectedStyle?.previewColor || 'bg-slate-700';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && <label className="block text-slate-400 text-sm font-semibold mb-2 font-arabic uppercase tracking-wider">{label}</label>}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 bg-slate-800 hover:bg-slate-750 text-white shadow-sm ${isOpen ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-700 hover:border-slate-600'}`}
      >
        <div className="flex items-center gap-3 overflow-hidden">
            {selectedStyle ? (
                <>
                    <div className={`p-1.5 rounded-md ${triggerColorClass} text-white shadow-sm`}>
                        <StyleIcon icon={selectedStyle.icon} className="w-5 h-5" />
                    </div>
                    <span className="font-bold truncate font-arabic text-lg tracking-wide">{selectedName}</span>
                </>
            ) : (
                <span className="text-slate-400 font-arabic">Choose a style...</span>
            )}
        </div>
        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-h-80 overflow-y-auto animate-fade-in custom-scrollbar ring-1 ring-black/5">
            <div className="p-1 space-y-0.5">
            {styles.map((style) => {
                 const t = translations[style.id];
                 const isSelected = selectedStyle?.id === style.id;
                 return (
                    <button
                        key={style.id}
                        onClick={() => {
                            onSelect(style);
                            setIsOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-start group
                            ${isSelected ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}
                        `}
                    >
                        <div className={`p-2 rounded-lg ${style.previewColor} text-white scale-90 group-hover:scale-100 transition-transform`}>
                            <StyleIcon icon={style.icon} className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                             <div className="font-medium truncate font-arabic">{t.name}</div>
                        </div>
                         {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-brand-500 ltr:ml-2 rtl:mr-2"></div>}
                    </button>
                 );
            })}
            </div>
        </div>
      )}
    </div>
  );
};

export default StyleDropdown;