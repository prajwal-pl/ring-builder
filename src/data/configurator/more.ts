import type {
  EngravingStyleType,
  SurpriseStonesType,
  ConfigOption,
} from '@/types/configurator';

export const engravingStyleOptions: ConfigOption<EngravingStyleType>[] = [
  { id: 'block', label: 'Block' },
  { id: 'cursive', label: 'Cursive' },
];

export const surpriseStonesOptions: ConfigOption<SurpriseStonesType>[] = [
  { id: 'none', label: 'None' },
  { id: 'add-stones', label: 'Add Stones' },
];

// Engraving configuration
export const engravingConfig = {
  maxLength: 14,
  placeholder: 'Your engraving',
};

// Helper functions for descriptions
export function getEngravingStyleDescription(type: EngravingStyleType): string {
  return type === 'block' ? 'Block font style' : 'Cursive font style';
}

export function getSurpriseStonesDescription(type: SurpriseStonesType): string {
  return type === 'none' ? 'No Surprise Stones' : 'Add Surprise Stones';
}
