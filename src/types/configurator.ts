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
export type CenterStoneCount = 'one-stone' | 'two-stone' | 'three-stone';
export type DiamondType = 'natural' | 'lab-grown' | 'skip';

// Head options
export type BasketHaloType = 'none' | 'basket' | 'halo' | 'hidden-halo' | 'bezel';
export type ProngCountType = '4-classic' | '4-compass';
export type ProngTipsType = 'claw' | 'petite-claw' | 'rounded' | 'tab';
export type ProngPaveType = 'none' | 'pave';

// Band options
export type BandStyleType = 'round' | 'square';
export type CathedralType = 'none' | 'cathedral';
export type PaveStyleType = 'none' | 'petite-french';
export type FitType = 'comfort-fit' | 'standard-fit';

// More options
export type EngravingStyleType = 'block' | 'cursive';
export type SurpriseStonesType = 'none' | 'add-stones';

// Diamond config
export interface DiamondConfig {
  centerStones: CenterStoneCount;
  diamondType: DiamondType;
}

// Head config
export interface HeadConfig {
  basketHalo: BasketHaloType;
  prongCount: ProngCountType;
  prongTips: ProngTipsType;
  prongPave: ProngPaveType;
}

// Band config
export interface BandConfig {
  style: BandStyleType;
  cathedral: CathedralType;
  paveStyle: PaveStyleType;
  bandWidth: number;
  ringSize: number;
  fit: FitType;
}

// More config
export interface MoreConfig {
  engraving: string;
  engravingStyle: EngravingStyleType;
  surpriseStones: SurpriseStonesType;
}

// Configurator state
export interface ConfiguratorState {
  metal: {
    headAndBandColor: MetalType;
  };
  diamonds: DiamondConfig;
  head: HeadConfig;
  band: BandConfig;
  more: MoreConfig;
  settingPrice: number;
}

// Panel type
export type ConfiguratorPanel = 'metal' | 'diamonds' | 'head' | 'band' | 'more';

// Actions
export type ConfiguratorAction =
  | { type: 'SET_METAL'; payload: MetalType }
  | { type: 'SET_CENTER_STONES'; payload: CenterStoneCount }
  | { type: 'SET_DIAMOND_TYPE'; payload: DiamondType }
  | { type: 'SET_BASKET_HALO'; payload: BasketHaloType }
  | { type: 'SET_PRONG_COUNT'; payload: ProngCountType }
  | { type: 'SET_PRONG_TIPS'; payload: ProngTipsType }
  | { type: 'SET_PRONG_PAVE'; payload: ProngPaveType }
  | { type: 'SET_BAND_STYLE'; payload: BandStyleType }
  | { type: 'SET_CATHEDRAL'; payload: CathedralType }
  | { type: 'SET_PAVE_STYLE'; payload: PaveStyleType }
  | { type: 'SET_BAND_WIDTH'; payload: number }
  | { type: 'SET_RING_SIZE'; payload: number }
  | { type: 'SET_FIT'; payload: FitType }
  | { type: 'SET_ENGRAVING'; payload: string }
  | { type: 'SET_ENGRAVING_STYLE'; payload: EngravingStyleType }
  | { type: 'SET_SURPRISE_STONES'; payload: SurpriseStonesType }
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

// Generic option type for simple selectors
export interface ConfigOption<T extends string> {
  id: T;
  label: string;
  description?: string;
  priceModifier?: number;
}
