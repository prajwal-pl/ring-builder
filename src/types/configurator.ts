// Metal options (8 total)
export type MetalType =
  | '14k-white'
  | '18k-white'
  | '14k-yellow'
  | '18k-yellow'
  | '14k-rose'
  | '18k-rose'
  | 'platinum'
  | 'mixed';

// Diamond options
export type DiamondQuality = 'good' | 'very-good' | 'excellent';
export type DiamondClarity = 'VS2' | 'VS1' | 'VVS2' | 'VVS1' | 'IF';
export type DiamondColor = 'J' | 'I' | 'H' | 'G' | 'F' | 'E' | 'D';

export interface DiamondConfig {
  quality: DiamondQuality | null;
  clarity: DiamondClarity | null;
  color: DiamondColor | null;
}

// Configurator state
export interface ConfiguratorState {
  metal: {
    headAndBandColor: MetalType;
  };
  diamonds: DiamondConfig;
  settingPrice: number;
}

// Panel type
export type ConfiguratorPanel = 'metal' | 'diamonds' | 'head' | 'band' | 'more';

// Actions
export type ConfiguratorAction =
  | { type: 'SET_METAL'; payload: MetalType }
  | { type: 'SET_DIAMOND_QUALITY'; payload: DiamondQuality }
  | { type: 'SET_DIAMOND_CLARITY'; payload: DiamondClarity }
  | { type: 'SET_DIAMOND_COLOR'; payload: DiamondColor }
  | { type: 'UPDATE_PRICE'; payload: number }
  | { type: 'INIT_FROM_WIZARD'; payload: Partial<ConfiguratorState> }
  | { type: 'RESET' };

// Metal option for data file
export interface MetalOption {
  id: MetalType;
  label: string;
  hexColor: string;
  priceModifier: number;
}

// Diamond option types for data files
export interface DiamondQualityOption {
  id: DiamondQuality;
  label: string;
  description: string;
  priceModifier: number;
}

export interface DiamondClarityOption {
  id: DiamondClarity;
  label: string;
  description: string;
  priceModifier: number;
}

export interface DiamondColorOption {
  id: DiamondColor;
  label: string;
  description: string;
  priceModifier: number;
}
