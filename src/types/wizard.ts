// Ring style options
export type RingStyle =
  | 'solitaire'
  | 'halo'
  | 'hidden-halo'
  | 'bezel'
  | 'cathedral'
  | 'full-pave'
  | 'toi-et-moi'
  | 'three-stone';

// Metal color options
export type MetalColor = 'gold' | 'silver' | 'rose-gold';

// Stone shape options
export type StoneShape =
  | 'round'
  | 'oval'
  | 'cushion'
  | 'emerald'
  | 'princess'
  | 'asscher'
  | 'marquise'
  | 'pear'
  | 'radiant';

// Stone type options
export type StoneType = 'natural' | 'lab-grown';

// Carat size options
export type CaratSize = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 'decide-later';

// Timeline options
export type Timeline = '1-4-weeks' | '1-3-months' | '3-6-months' | 'not-sure';

// Wizard step numbers
export type WizardStep = 1 | 2 | 3 | 4;

// Generic option type for selection data
export interface SelectionOption<T> {
  id: T;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

// Specific option types with additional properties
export type RingStyleOption = SelectionOption<RingStyle>;

export type StoneShapeOption = SelectionOption<StoneShape>;

export interface CaratSizeOption extends SelectionOption<CaratSize> {
  displayValue: string;
}

export interface TimelineOption extends SelectionOption<Timeline> {
  displayValue: string;
}

export interface MetalColorOption {
  id: MetalColor;
  label: string;
  hexColor: string;
}

// Wizard selections state
export interface WizardSelections {
  ringStyle: RingStyle | null;
  metalColor: MetalColor | null;
  stoneShape: StoneShape | null;
  stoneType: StoneType | null;
  caratSize: CaratSize | null;
  timeline: Timeline | null;
}

// Complete wizard state
export interface WizardState {
  currentStep: WizardStep;
  selections: WizardSelections;
  isComplete: boolean;
  isLoading: boolean;
}

// Wizard action types
export type WizardAction =
  | { type: 'SET_RING_STYLE'; payload: RingStyle }
  | { type: 'SET_METAL_COLOR'; payload: MetalColor }
  | { type: 'SET_STONE_SHAPE'; payload: StoneShape }
  | { type: 'SET_STONE_TYPE'; payload: StoneType }
  | { type: 'SET_CARAT_SIZE'; payload: CaratSize }
  | { type: 'SET_TIMELINE'; payload: Timeline }
  | { type: 'GO_TO_STEP'; payload: WizardStep }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'COMPLETE_WIZARD' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_WIZARD' }
  | { type: 'HYDRATE_STATE'; payload: Partial<WizardState> };

// Step configuration
export interface StepConfig {
  step: WizardStep;
  title: string;
  subtitle: string;
}

// Breadcrumb item for navigation
export interface BreadcrumbItem {
  step: WizardStep;
  label: string;
  value: string | null;
  icon?: React.ReactNode;
}
