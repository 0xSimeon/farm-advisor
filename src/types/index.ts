export type CropType = 'maize' | 'rice' | 'cassava' | 'potatoes' | 'vegetables';

export interface FertilizerResult {
  npkBags: number;
  ureaBags: number;
  cropLabel: string;
  landSize: number;
}
