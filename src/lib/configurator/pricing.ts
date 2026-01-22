import type { ConfiguratorState } from '@/types/configurator';
import { metalOptions } from '@/data/configurator/metals';
import { diamondQualities, diamondClarities, diamondColors } from '@/data/configurator/diamonds';

const BASE_PRICE = 2143;

export function calculateSettingPrice(state: ConfiguratorState): number {
  let price = BASE_PRICE;

  // Metal modifier
  const metal = metalOptions.find((m) => m.id === state.metal.headAndBandColor);
  if (metal) {
    price += metal.priceModifier;
  }

  // Diamond quality modifier
  if (state.diamonds.quality) {
    const quality = diamondQualities.find((q) => q.id === state.diamonds.quality);
    if (quality) {
      price += quality.priceModifier;
    }
  }

  // Diamond clarity modifier
  if (state.diamonds.clarity) {
    const clarity = diamondClarities.find((c) => c.id === state.diamonds.clarity);
    if (clarity) {
      price += clarity.priceModifier;
    }
  }

  // Diamond color modifier
  if (state.diamonds.color) {
    const color = diamondColors.find((c) => c.id === state.diamonds.color);
    if (color) {
      price += color.priceModifier;
    }
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
