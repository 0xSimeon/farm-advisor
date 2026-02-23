import type { CropType, FertilizerResult } from '@/types';
import { FERTILIZER_RATES } from './fertilizerRates';

export function calculateFertilizer(
  crop: CropType,
  hectares: number,
): FertilizerResult {
  if (hectares <= 0) {
    throw new Error('Land size must be greater than zero.');
  }

  const rate = FERTILIZER_RATES[crop];

  return {
    npkBags: Math.round(rate.npkRate * hectares * 10) / 10,
    ureaBags: Math.round(rate.ureaRate * hectares * 10) / 10,
    cropLabel: rate.label,
    landSize: hectares,
  };
}
