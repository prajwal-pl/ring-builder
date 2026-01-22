import type {
  BandStyleType,
  CathedralType,
  PaveStyleType,
  FitType,
  ConfigOption,
} from '@/types/configurator';

export const bandStyleOptions: ConfigOption<BandStyleType>[] = [
  { id: 'round', label: 'Round' },
  { id: 'square', label: 'Square' },
];

export const cathedralOptions: ConfigOption<CathedralType>[] = [
  { id: 'none', label: 'None' },
  { id: 'cathedral', label: 'Cathedral' },
];

export const paveStyleOptions: ConfigOption<PaveStyleType>[] = [
  { id: 'none', label: 'None' },
  { id: 'petite-french', label: 'Petite French' },
];

export const fitOptions: ConfigOption<FitType>[] = [
  { id: 'comfort-fit', label: 'Comfort Fit' },
  { id: 'standard-fit', label: 'Standard Fit' },
];

// Band width configuration
export const bandWidthConfig = {
  min: 1.5,
  max: 4,
  step: 0.1,
  default: 1.7,
};

// Ring size configuration
export const ringSizeConfig = {
  min: 3,
  max: 13,
  step: 0.5,
  default: 6,
};

// Helper functions for descriptions
export function getBandStyleDescription(type: BandStyleType): string {
  return type === 'round' ? 'Round' : 'Square';
}

export function getCathedralDescription(type: CathedralType): string {
  return type === 'none' ? 'No Cathedral' : 'Cathedral';
}

export function getPaveStyleDescription(type: PaveStyleType): string {
  return type === 'none' ? 'None' : 'Petite French';
}

export function getFitDescription(type: FitType): string {
  return type === 'comfort-fit' ? 'Comfort Fit' : 'Standard Fit';
}
