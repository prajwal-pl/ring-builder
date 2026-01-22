'use client';

import { useMemo } from 'react';
import type { ConfiguratorState, MetalType } from '@/types/configurator';
import { metalOptions } from '@/data/configurator/metals';

// US ring sizes to inner diameter in mm
const RING_SIZE_TO_DIAMETER: Record<number, number> = {
  3: 14.1,
  3.5: 14.5,
  4: 14.9,
  4.5: 15.3,
  5: 15.7,
  5.5: 16.1,
  6: 16.5,
  6.5: 16.9,
  7: 17.3,
  7.5: 17.7,
  8: 18.1,
  8.5: 18.5,
  9: 19.0,
  9.5: 19.4,
  10: 19.8,
  10.5: 20.2,
  11: 20.6,
  11.5: 21.0,
  12: 21.4,
  12.5: 21.8,
  13: 22.2,
};

// Scale factor to convert mm to Three.js units (1 unit = ~10mm for good visibility)
const SCALE_FACTOR = 0.1;

export interface Ring3DConfig {
  material: {
    color: string;
    metalness: number;
    roughness: number;
    isMixed: boolean;
    mixedColors?: string[];
  };
  band: {
    innerRadius: number;
    outerRadius: number;
    thickness: number; // Height of band (bandWidth in real terms)
    profile: 'round' | 'square';
    hasCathedral: boolean;
    hasPave: boolean;
    isComfortFit: boolean;
  };
  head: {
    type: 'none' | 'basket' | 'halo' | 'hidden-halo' | 'bezel';
    prongLayout: '4-classic' | '4-compass';
    prongTipStyle: 'claw' | 'petite-claw' | 'rounded' | 'tab';
    hasProngPave: boolean;
  };
  stones: {
    count: 1 | 2 | 3;
    type: 'natural' | 'lab-grown' | 'skip';
  };
  extras: {
    engravingText: string;
    engravingFont: 'block' | 'cursive';
    hasSurpriseStones: boolean;
  };
}

function getMetalColor(metalType: MetalType): string {
  const metal = metalOptions.find((m) => m.id === metalType);
  // Handle mixed (gradient) color - return primary gold for 3D
  if (metalType === 'mixed') {
    return '#FFD700';
  }
  return metal?.hexColor ?? '#E8E8E8';
}

function getMetalProperties(metalType: MetalType): { metalness: number; roughness: number } {
  // Platinum is more reflective, rose gold slightly warmer/softer
  switch (metalType) {
    case 'platinum':
      return { metalness: 0.95, roughness: 0.1 };
    case '18k-white':
    case '14k-white':
      return { metalness: 0.9, roughness: 0.15 };
    case '18k-yellow':
    case '14k-yellow':
      return { metalness: 0.85, roughness: 0.2 };
    case '18k-rose':
    case '14k-rose':
      return { metalness: 0.85, roughness: 0.22 };
    case 'mixed':
      return { metalness: 0.88, roughness: 0.18 };
    default:
      return { metalness: 0.85, roughness: 0.2 };
  }
}

function ringSizeToRadius(size: number): number {
  // Interpolate for half sizes
  const floorSize = Math.floor(size);
  const ceilSize = Math.ceil(size);

  if (floorSize === ceilSize) {
    const diameter = RING_SIZE_TO_DIAMETER[size] ?? 16.5;
    return (diameter / 2) * SCALE_FACTOR;
  }

  const lowerDiameter = RING_SIZE_TO_DIAMETER[floorSize] ?? 16.5;
  const upperDiameter = RING_SIZE_TO_DIAMETER[ceilSize] ?? 16.5;
  const fraction = size - floorSize;
  const diameter = lowerDiameter + (upperDiameter - lowerDiameter) * fraction;

  return (diameter / 2) * SCALE_FACTOR;
}

export function useRingConfig(state: ConfiguratorState): Ring3DConfig {
  return useMemo(() => {
    const metalType = state.metal.headAndBandColor;
    const metalProps = getMetalProperties(metalType);

    const innerRadius = ringSizeToRadius(state.band.ringSize);
    // Band width in mm converted to 3D units, used as band height
    const bandThickness = state.band.bandWidth * SCALE_FACTOR;
    // Band depth (radial thickness) - typically 1.5-2mm
    const bandDepth = 0.18; // ~1.8mm in 3D units

    return {
      material: {
        color: getMetalColor(metalType),
        metalness: metalProps.metalness,
        roughness: metalProps.roughness,
        isMixed: metalType === 'mixed',
        mixedColors: metalType === 'mixed' ? ['#FFD700', '#E8E8E8', '#B76E79'] : undefined,
      },
      band: {
        innerRadius,
        outerRadius: innerRadius + bandDepth,
        thickness: bandThickness,
        profile: state.band.style,
        hasCathedral: state.band.cathedral === 'cathedral',
        hasPave: state.band.paveStyle !== 'none',
        isComfortFit: state.band.fit === 'comfort-fit',
      },
      head: {
        type: state.head.basketHalo,
        prongLayout: state.head.prongCount,
        prongTipStyle: state.head.prongTips,
        hasProngPave: state.head.prongPave === 'pave',
      },
      stones: {
        count:
          state.diamonds.centerStones === 'one-stone'
            ? 1
            : state.diamonds.centerStones === 'two-stone'
              ? 2
              : 3,
        type: state.diamonds.diamondType,
      },
      extras: {
        engravingText: state.more.engraving,
        engravingFont: state.more.engravingStyle,
        hasSurpriseStones: state.more.surpriseStones === 'add-stones',
      },
    };
  }, [state]);
}
