// Per-hectare fertilizer application rates sourced from OCP agronomic guidelines.

import type { CropType } from '@/types';

interface CropRate {
  label: string;
  npkRate: number;  // bags per hectare
  ureaRate: number; // bags per hectare
}

export const FERTILIZER_RATES: Record<CropType, CropRate> = {
  maize: {
    label: 'Maize',
    npkRate: 4,
    ureaRate: 3,
  },
  rice: {
    label: 'Rice',
    npkRate: 5,
    ureaRate: 4,
  },
  cassava: {
    label: 'Cassava',
    npkRate: 3,
    ureaRate: 1,
  },
  potatoes: {
    label: 'Potatoes',
    npkRate: 6,
    ureaRate: 2,
  },
  vegetables: {
    label: 'Vegetables',
    npkRate: 4,
    ureaRate: 2,
  },
};

// Derived from FERTILIZER_RATES so the dropdown stays in sync with the rate table automatically.
export const CROP_OPTIONS: { value: CropType; label: string }[] = (
  Object.entries(FERTILIZER_RATES) as [CropType, CropRate][]
).map(([value, { label }]) => ({ value, label }));
