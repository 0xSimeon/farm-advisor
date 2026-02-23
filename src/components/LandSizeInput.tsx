// Numeric input for farm land size in hectares, with inline validation feedback.

interface LandSizeInputProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

export default function LandSizeInput({ value, onChange, error }: LandSizeInputProps) {
  return (
    <div>
      <label
        htmlFor="land-size"
        className="block mb-1 text-xs font-semibold tracking-[0.12em] uppercase text-earth"
      >
        Land Size (hectares)
      </label>
      <div className="relative">
        <input
          id="land-size"
          type="number"
          inputMode="decimal"
          min="0.1"
          step="0.1"
          placeholder="e.g. 2.5"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={[
            'w-full bg-cream-card border rounded-[10px] px-4 py-3.5 pr-16 text-bark text-sm font-medium',
            'placeholder:text-mist/50 transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-farm-green focus:border-farm-green',
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            error ? 'border-red-400 ring-1 ring-red-300' : 'border-earth-light hover:border-earth',
          ].join(' ')}
        />

        {/* Hectare badge */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md bg-earth-light/25">
          <span className="text-earth text-xs font-semibold">ha</span>
        </div>
      </div>

      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.25" />
            <path
              d="M6 4V6.5M6 8.25H6.01"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
