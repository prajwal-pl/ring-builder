import type { ConfiguratorState } from '@/types/configurator';
import { metalOptions } from '@/data/configurator/metals';

const BASE_PRICE = 2143;

// Price modifiers for various options
const PRICE_MODIFIERS = {
  // Center stones
  centerStones: {
    'one-stone': 0,
    'two-stone': 500,
    'three-stone': 800,
  },
  // Diamond type
  diamondType: {
    natural: 0,
    'lab-grown': -200,
    skip: 0,
  },
  // Basket & Halo
  basketHalo: {
    none: 0,
    basket: 100,
    halo: 300,
    'hidden-halo': 250,
    bezel: 200,
  },
  // Prong count
  prongCount: {
    '4-classic': 0,
    '4-compass': 50,
  },
  // Prong tips
  prongTips: {
    claw: 0,
    'petite-claw': 25,
    rounded: 25,
    tab: 25,
  },
  // Prong pave
  prongPave: {
    none: 0,
    pave: 150,
  },
  // Band style
  bandStyle: {
    round: 0,
    square: 50,
  },
  // Cathedral
  cathedral: {
    none: 0,
    cathedral: 100,
  },
  // Pave style
  paveStyle: {
    none: 0,
    'petite-french': 200,
  },
  // Fit
  fit: {
    'comfort-fit': 50,
    'standard-fit': 0,
  },
  // Engraving style
  engravingStyle: {
    block: 0,
    cursive: 0,
  },
  // Surprise stones
  surpriseStones: {
    none: 0,
    'add-stones': 100,
  },
};

export function calculateSettingPrice(state: ConfiguratorState): number {
  let price = BASE_PRICE;

  // Metal modifier
  const metal = metalOptions.find((m) => m.id === state.metal.headAndBandColor);
  if (metal) {
    price += metal.priceModifier;
  }

  // Diamond modifiers
  price += PRICE_MODIFIERS.centerStones[state.diamonds.centerStones] || 0;
  price += PRICE_MODIFIERS.diamondType[state.diamonds.diamondType] || 0;

  // Head modifiers
  price += PRICE_MODIFIERS.basketHalo[state.head.basketHalo] || 0;
  price += PRICE_MODIFIERS.prongCount[state.head.prongCount] || 0;
  price += PRICE_MODIFIERS.prongTips[state.head.prongTips] || 0;
  price += PRICE_MODIFIERS.prongPave[state.head.prongPave] || 0;

  // Band modifiers
  price += PRICE_MODIFIERS.bandStyle[state.band.style] || 0;
  price += PRICE_MODIFIERS.cathedral[state.band.cathedral] || 0;
  price += PRICE_MODIFIERS.paveStyle[state.band.paveStyle] || 0;
  price += PRICE_MODIFIERS.fit[state.band.fit] || 0;

  // More modifiers
  price += PRICE_MODIFIERS.surpriseStones[state.more.surpriseStones] || 0;

  // Engraving fee (only if text is provided)
  if (state.more.engraving.length > 0) {
    price += 50;
  }

  return price;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
