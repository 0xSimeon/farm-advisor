// Core calculation logic — converts crop + land size into bag quantities.

import type { CropType, FertilizerResult } from '@/types';
import { FERTILIZER_RATES } from './fertilizerRates';

export const MAX_HECTARES = 500;

export type RoundingMode = 'decimal' | 'whole';

/**
 * Rounds bag quantities. "whole" mode rounds UP so farmers never under-purchase;
 * "decimal" mode rounds to one decimal place for display precision.
 */
function roundBags(value: number, mode: RoundingMode): number {
  if (mode === 'whole') return Math.ceil(value);
  // Multiply-then-divide avoids floating-point drift (e.g. 2.1 * 3 = 6.300000…01).
  return Math.round(value * 10) / 10;
}

export function calculateFertilizer(
  crop: CropType,
  hectares: number,
  roundingMode: RoundingMode = 'decimal',
): FertilizerResult {
  // Guard against NaN, Infinity, and other non-numeric inputs that parseFloat may produce.
  if (!Number.isFinite(hectares)) {
    throw new Error('Invalid land size.');
  }

  if (hectares <= 0) {
    throw new Error('Land size must be greater than zero.');
  }

  if (hectares > MAX_HECTARES) {
    throw new Error(`Maximum supported land size is ${MAX_HECTARES} hectares.`);
  }

  const rate = FERTILIZER_RATES[crop];
  if (!rate) {
    throw new Error(`Unsupported crop type: ${crop}`);
  }

  return {
    npkBags: roundBags(rate.npkRate * hectares, roundingMode),
    ureaBags: roundBags(rate.ureaRate * hectares, roundingMode),
    cropLabel: rate.label,
    landSize: hectares,
  };
}

// Singleton formatter — avoids re-creating on every render cycle.
const numberFormatter = new Intl.NumberFormat();

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}
