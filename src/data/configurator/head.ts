import type {
  BasketHaloType,
  ProngCountType,
  ProngTipsType,
  ProngPaveType,
  ConfigOption,
} from '@/types/configurator';

export const basketHaloOptions: ConfigOption<BasketHaloType>[] = [
  { id: 'none', label: 'None' },
  { id: 'basket', label: 'Basket' },
  { id: 'halo', label: 'Halo' },
  { id: 'hidden-halo', label: 'Hidden Halo' },
  { id: 'bezel', label: 'Bezel' },
];

export const prongCountOptions: ConfigOption<ProngCountType>[] = [
  { id: '4-classic', label: '4 Classic' },
  { id: '4-compass', label: '4 Compass' },
];

export const prongTipsOptions: ConfigOption<ProngTipsType>[] = [
  { id: 'claw', label: 'Claw' },
  { id: 'petite-claw', label: 'Petite Claw' },
  { id: 'rounded', label: 'Rounded' },
  { id: 'tab', label: 'Tab' },
];

export const prongPaveOptions: ConfigOption<ProngPaveType>[] = [
  { id: 'none', label: 'None' },
  { id: 'pave', label: 'Pave' },
];

// Helper functions for descriptions
export function getBasketHaloDescription(type: BasketHaloType): string {
  switch (type) {
    case 'none':
      return 'No basket or halo';
    case 'basket':
      return 'Classic basket setting';
    case 'halo':
      return 'Pave Size 1.0mm; CTW 0.10';
    case 'hidden-halo':
      return 'Hidden halo beneath stone';
    case 'bezel':
      return 'Bezel setting';
    default:
      return '';
  }
}

export function getProngCountDescription(type: ProngCountType): string {
  switch (type) {
    case '4-classic':
      return '4 Prong Classic Setting';
    case '4-compass':
      return '4 Prong Compass Setting';
    default:
      return '';
  }
}

export function getProngTipsDescription(type: ProngTipsType): string {
  switch (type) {
    case 'claw':
      return 'Claw Prong Tips';
    case 'petite-claw':
      return 'Petite Claw Prong Tips';
    case 'rounded':
      return 'Rounded Prong Tips';
    case 'tab':
      return 'Tab Prong Tips';
    default:
      return '';
  }
}

export function getProngPaveDescription(type: ProngPaveType): string {
  switch (type) {
    case 'none':
      return 'Plain prong arms';
    case 'pave':
      return 'Pave prong arms';
    default:
      return '';
  }
}
