import type { CropType } from '@/types';

interface CropSelectProps {
  value: CropType;
  onChange: (value: CropType) => void;
  crops: { value: CropType; label: string }[];
}

export default function CropSelect({ value, onChange, crops }: CropSelectProps) {
  return (
    <div>
      <label className="block mb-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-earth">
        Crop Type
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as CropType)}
          className="w-full appearance-none bg-cream-card border border-earth-light rounded-[10px] px-4 py-3.5 pr-11 text-bark text-sm font-medium cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-farm-green focus:border-farm-green"
        >
          {crops.map((crop) => (
            <option key={crop.value} value={crop.value}>
              {crop.label}
            </option>
          ))}
        </select>

        {/* Custom chevron */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-farm-green">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
