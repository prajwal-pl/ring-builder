'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

interface DiamondMaterialProps {
  type: 'natural' | 'lab-grown' | 'skip';
}

export function useDiamondMaterial({ type }: DiamondMaterialProps) {
  return useMemo(() => {
    if (type === 'skip') {
      // Placeholder/empty material for when stone is skipped
      return new THREE.MeshBasicMaterial({
        color: 0xcccccc,
        transparent: true,
        opacity: 0.3,
      });
    }

    // Diamond material with refraction simulation
    // Using MeshPhysicalMaterial for more realistic glass/diamond look
    return new THREE.MeshPhysicalMaterial({
      color: type === 'natural' ? 0xffffff : 0xf8f8ff, // Lab-grown slightly bluer
      metalness: 0,
      roughness: 0,
      transmission: 0.9, // Glass-like transparency
      thickness: 0.5, // Thickness for refraction
      ior: 2.42, // Diamond's index of refraction
      reflectivity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0,
      envMapIntensity: 2,
    });
  }, [type]);
}

// Smaller accent stone material (for pave, surprise stones)
export function useAccentStoneMaterial() {
  return useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.05,
      transmission: 0.85,
      thickness: 0.2,
      ior: 2.42,
      reflectivity: 0.8,
    });
  }, []);
}
