'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { BandModel } from './band-model';
import { StoneModel } from './stone-model';
import { HeadModel } from './head-model';
import type { Ring3DConfig } from '../hooks/use-ring-config';

interface RingModelProps {
  config: Ring3DConfig;
}

export function RingModel({ config }: RingModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Calculate stone positions based on count
  const stonePositions: [number, number, number][] = [];
  const stoneScale = config.stones.count === 1 ? 0.4 : config.stones.count === 2 ? 0.32 : 0.28;

  if (config.stones.count === 1) {
    stonePositions.push([0, 0.5, 0]);
  } else if (config.stones.count === 2) {
    // Toi et moi style - two stones side by side
    stonePositions.push([-0.2, 0.45, 0]);
    stonePositions.push([0.2, 0.45, 0]);
  } else {
    // Three stone - center larger, two smaller on sides
    stonePositions.push([0, 0.5, 0]); // Center
    stonePositions.push([-0.3, 0.4, 0]); // Left
    stonePositions.push([0.3, 0.4, 0]); // Right
  }

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>
      {/* Band */}
      <BandModel config={config.band} material={config.material} />

      {/* Head/Setting with prongs */}
      <HeadModel
        config={config.head}
        material={config.material}
        bandInnerRadius={config.band.innerRadius}
      />

      {/* Center Stone(s) */}
      {stonePositions.map((position, index) => (
        <StoneModel
          key={index}
          type={config.stones.type}
          position={position}
          scale={index === 0 && config.stones.count === 3 ? stoneScale * 1.2 : stoneScale}
        />
      ))}
    </group>
  );
}
