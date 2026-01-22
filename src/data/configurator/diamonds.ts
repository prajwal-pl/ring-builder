import type {
  CenterStoneCount,
  DiamondType,
  ConfigOption,
} from '@/types/configurator';

export const centerStoneOptions: ConfigOption<CenterStoneCount>[] = [
  { id: 'one-stone', label: 'One Stone' },
  { id: 'two-stone', label: 'Two Stone' },
  { id: 'three-stone', label: 'Three Stone' },
];

export const diamondTypeOptions: ConfigOption<DiamondType>[] = [
  { id: 'natural', label: 'Natural' },
  { id: 'lab-grown', label: 'Lab Grown' },
  { id: 'skip', label: 'Skip' },
];

// Helper function to get center stone label
export function getCenterStoneLabel(count: CenterStoneCount): string {
  switch (count) {
    case 'one-stone':
      return 'One Stone Ring (Solitaire)';
    case 'two-stone':
      return 'Two Stone Ring';
    case 'three-stone':
      return 'Three Stone Ring';
    default:
      return '';
  }
}

// Helper function to get diamond type description
export function getDiamondTypeDescription(type: DiamondType): string {
  switch (type) {
    case 'natural':
      return 'Natural diamond center stones & pave (if applicable)';
    case 'lab-grown':
      return 'Lab grown diamond center stones & pave (if applicable)';
    case 'skip':
      return 'Skip diamond selection for now';
    default:
      return '';
  }
}
