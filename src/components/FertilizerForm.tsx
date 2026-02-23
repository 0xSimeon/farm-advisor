'use client';

import { useState } from 'react';
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hectares = parseFloat(landSize);
    if (isNaN(hectares) || hectares <= 0) {
      setError('Please enter a valid land size greater than zero.');
      setResult(null);
      return;
    }
    try {
      const calculation = calculateFertilizer(selectedCrop, hectares);
      setResult(calculation);
      setError(null);
    } catch {
      setError('Unable to calculate. Please check your inputs.');
      setResult(null);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="animate-fade-up bg-cream-card rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-l-4 border-earth-light/40 border-l-farm-green"
        style={{ animationDelay: '350ms' }}
      >
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-bark">Your Farm Details</h2>
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
          className="mt-7 w-full bg-farm-green hover:bg-farm-green-hover text-cream font-semibold text-sm tracking-wide py-3.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-farm-green focus:ring-offset-2"
        >
          Calculate Requirements
        </button>
      </form>

      {/* Result card */}
      <AdvisoryCard result={result} />
    </div>
  );
}
