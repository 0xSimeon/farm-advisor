// Custom dropdown selector for crop types, replacing the native <select> for visual consistency.

'use client';

import { useState, useRef, useEffect } from 'react';
import type { CropType } from '@/types';

interface CropSelectProps {
  value: CropType;
  onChange: (value: CropType) => void;
  crops: { value: CropType; label: string }[];
}

function CropIcon({ crop }: { crop: CropType }) {
  if (crop === 'maize') return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <line x1="7.5" y1="2" x2="7.5" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <ellipse cx="10.5" cy="5.5" rx="2" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.1" transform="rotate(-15 10.5 5.5)" />
      <ellipse cx="4.5" cy="8.5" rx="2" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.1" transform="rotate(15 4.5 8.5)" />
    </svg>
  );

  if (crop === 'rice') return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 13 Q5.5 8 7 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <ellipse cx="7" cy="3.5" rx="1.4" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="10.5" cy="5.5" rx="1.4" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.1" transform="rotate(-25 10.5 5.5)" />
      <ellipse cx="4.5" cy="6.5" rx="1.4" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.1" transform="rotate(25 4.5 6.5)" />
    </svg>
  );

  if (crop === 'cassava') return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 2 L7.5 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7.5 8.5 Q5 10.5 4 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M7.5 8.5 Q10 10.5 11 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M7.5 6.5 Q5.5 5.5 4.5 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M7.5 4.5 Q9.5 3.5 10.5 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );

  if (crop === 'potatoes') return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <ellipse cx="7.5" cy="8" rx="5" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="5.5" cy="7" r="0.9" fill="currentColor" />
      <circle cx="9.5" cy="9" r="0.9" fill="currentColor" />
      <circle cx="7.5" cy="6" r="0.7" fill="currentColor" />
    </svg>
  );

  // vegetables
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M3 12 Q5 6 13 4 Q13 10 7 12 Q5 13 3 12Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M3 12 Q8 9 12 5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function CropSelect({ value, onChange, crops }: CropSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = crops.find((c) => c.value === value)!;

  // Close dropdown when the user clicks anywhere outside the component.
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div ref={containerRef}>
      <label className="block mb-1 text-xs font-semibold tracking-[0.12em] uppercase text-earth">
        Crop Type
      </label>
      <div className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={[
            'w-full flex items-center justify-between',
            'bg-cream-card border rounded-[10px] px-4 py-3.5',
            'text-bark text-sm font-medium cursor-pointer',
            'transition-all duration-150',
            'focus:outline-none focus:ring-2 focus:ring-farm-green focus:border-farm-green',
            open
              ? 'border-farm-green ring-2 ring-farm-green'
              : 'border-earth-light hover:border-earth',
          ].join(' ')}
        >
          <span className="flex items-center gap-2.5">
            <span className="text-farm-green-light">
              <CropIcon crop={value} />
            </span>
            {selected.label}
          </span>
          <span className={`text-farm-green transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {/* Dropdown panel */}
        {open && (
          <div
            role="listbox"
            className="absolute top-full mt-1.5 w-full bg-cream-card border border-earth-light/60 rounded-[10px] shadow-[0_10px_32px_rgba(0,0,0,0.12)] z-20 overflow-hidden animate-slide-down"
          >
            {crops.map((crop) => {
              const isSelected = crop.value === value;
              return (
                <button
                  key={crop.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => { onChange(crop.value); setOpen(false); }}
                  className={[
                    'w-full flex items-center justify-between px-4 py-2.5 text-sm',
                    'transition-colors duration-100',
                    isSelected
                      ? 'bg-farm-green/6 text-farm-green font-semibold'
                      : 'text-bark font-medium hover:bg-farm-green/[0.03]',
                  ].join(' ')}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={isSelected ? 'text-farm-green' : 'text-farm-green-light'}>
                      <CropIcon crop={crop.value} />
                    </span>
                    {crop.label}
                  </span>
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
