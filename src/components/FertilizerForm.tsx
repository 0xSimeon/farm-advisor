// Stateful form orchestrator — owns crop/land inputs and delegates to calculateFertilizer.

'use client';

import { type FormEvent, useState } from 'react';
import type { CropType, FertilizerResult } from '@/types';
import { CROP_OPTIONS } from '@/lib/fertilizerRates';
import { calculateFertilizer } from '@/lib/fertilizer';
import CropSelect from './CropSelect';
import LandSizeInput from './LandSizeInput';
import AdvisoryCard from './AdvisoryCard';

export default function FertilizerForm() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('maize');
  const [landSize, setLandSize] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FertilizerResult | null>(null);

  // Clear previous result on any input change so stale data never persists.
  function handleCropChange(value: CropType) {
    setSelectedCrop(value);
    setResult(null);
    setError(null);
  }

  function handleLandSizeChange(value: string) {
    setLandSize(value);
    setError(null);
    if (result) setResult(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = landSize.trim();
    if (trimmed === '') {
      setError('Please enter a land size.');
      setResult(null);
      return;
    }
    const hectares = parseFloat(trimmed);
    if (isNaN(hectares)) {
      setError('Invalid land size.');
      setResult(null);
      return;
    }
    try {
      const calculation = calculateFertilizer(selectedCrop, hectares);
      setResult(calculation);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error occurred. Please try again.');
      setResult(null);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="animate-fade-up bg-cream-card rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-l-4 border-earth-light/40 border-l-farm-green"
        style={{ animationDelay: '350ms' }}
      >
        <div className="mb-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-bark">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="text-farm-green shrink-0">
              <path d="M2 16 Q5 7 14 4 Q15 10 9 14 Q6 16 2 16Z" fill="currentColor" />
              <path d="M2 16 Q6 12 11 8" stroke="white" strokeWidth="1.1" strokeLinecap="round" fill="none" />
            </svg>
            Your Farm Details
          </h2>
          <p className="mt-0.5 text-sm text-mist">
            Fill in the fields below to calculate fertilizer needs.
          </p>
        </div>

        <div className="space-y-5">
          <CropSelect
            value={selectedCrop}
            onChange={handleCropChange}
            crops={CROP_OPTIONS}
          />
          <LandSizeInput
            value={landSize}
            onChange={handleLandSizeChange}
            error={error}
          />
        </div>

        <button
          type="submit"
          className="mt-7 w-full bg-farm-green hover:bg-farm-green-hover hover:scale-[1.02] active:scale-[0.98] active:brightness-[0.88] text-cream font-semibold text-sm tracking-wide py-3.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-farm-green/70 focus:ring-offset-2"
        >
          Calculate Requirements
        </button>
      </form>

      {/* Result card */}
      <AdvisoryCard result={result} />
    </div>
  );
}
