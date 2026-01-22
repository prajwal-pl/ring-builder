'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

interface MetalMaterialProps {
  color: string;
  metalness?: number;
  roughness?: number;
}

export function useMetalMaterial({ color, metalness = 0.9, roughness = 0.15 }: MetalMaterialProps) {
  return useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness,
      roughness,
      envMapIntensity: 1.2,
    });
  }, [color, metalness, roughness]);
}

// Pre-defined material configurations for each metal type
export const METAL_CONFIGS = {
  '14k-white': { color: '#E8E8E8', metalness: 0.9, roughness: 0.15 },
  '18k-white': { color: '#F5F5F5', metalness: 0.9, roughness: 0.15 },
  '14k-yellow': { color: '#F4C430', metalness: 0.85, roughness: 0.2 },
  '18k-yellow': { color: '#FFD700', metalness: 0.85, roughness: 0.2 },
  '14k-rose': { color: '#B76E79', metalness: 0.85, roughness: 0.22 },
  '18k-rose': { color: '#C9A9A6', metalness: 0.85, roughness: 0.22 },
  platinum: { color: '#E5E4E2', metalness: 0.95, roughness: 0.1 },
  mixed: { color: '#FFD700', metalness: 0.88, roughness: 0.18 },
} as const;
