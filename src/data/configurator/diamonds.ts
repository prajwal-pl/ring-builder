import type {
  DiamondQualityOption,
  DiamondClarityOption,
  DiamondColorOption,
} from '@/types/configurator';

export const diamondQualities: DiamondQualityOption[] = [
  {
    id: 'good',
    label: 'Good',
    description: 'Reflects most light that enters',
    priceModifier: 0,
  },
  {
    id: 'very-good',
    label: 'Very Good',
    description: 'Reflects nearly as much light as ideal',
    priceModifier: 150,
  },
  {
    id: 'excellent',
    label: 'Excellent',
    description: 'Maximum brilliance and fire',
    priceModifier: 350,
  },
];

export const diamondClarities: DiamondClarityOption[] = [
  {
    id: 'VS2',
    label: 'VS2',
    description: 'Very Slightly Included 2',
    priceModifier: 0,
  },
  {
    id: 'VS1',
    label: 'VS1',
    description: 'Very Slightly Included 1',
    priceModifier: 100,
  },
  {
    id: 'VVS2',
    label: 'VVS2',
    description: 'Very Very Slightly Included 2',
    priceModifier: 250,
  },
  {
    id: 'VVS1',
    label: 'VVS1',
    description: 'Very Very Slightly Included 1',
    priceModifier: 400,
  },
  {
    id: 'IF',
    label: 'IF',
    description: 'Internally Flawless',
    priceModifier: 600,
  },
];

export const diamondColors: DiamondColorOption[] = [
  {
    id: 'J',
    label: 'J',
    description: 'Near colorless',
    priceModifier: 0,
  },
  {
    id: 'I',
    label: 'I',
    description: 'Near colorless',
    priceModifier: 75,
  },
  {
    id: 'H',
    label: 'H',
    description: 'Near colorless',
    priceModifier: 150,
  },
  {
    id: 'G',
    label: 'G',
    description: 'Near colorless',
    priceModifier: 250,
  },
  {
    id: 'F',
    label: 'F',
    description: 'Colorless',
    priceModifier: 400,
  },
  {
    id: 'E',
    label: 'E',
    description: 'Colorless',
    priceModifier: 550,
  },
  {
    id: 'D',
    label: 'D',
    description: 'Colorless (highest grade)',
    priceModifier: 750,
  },
];
