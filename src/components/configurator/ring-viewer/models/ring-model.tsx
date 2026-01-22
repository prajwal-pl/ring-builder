'use client';

import { useRef } from 'react';
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

  // Ring dimensions from config
  // Scale up for better visibility (the calculated values are quite small)
  const scaleFactor = 1.2;
  const ringRadius = config.band.innerRadius * scaleFactor; // From ring size
  const bandTubeRadius = Math.max(0.04, config.band.thickness * 0.3 * scaleFactor); // From band width

  // Diamond sits at the TOP of the ring (12 o'clock position)
  // The top of the ring band is at Y = ringRadius
  const settingBaseY = ringRadius; // Where the setting attaches to band

  // Stone configuration
  const stoneScale = config.stones.count === 1 ? 0.45 : config.stones.count === 2 ? 0.35 : 0.3;

  // Stone positions - relative to setting position
  const stonePositions: [number, number, number][] = [];
  const stoneHeight = settingBaseY + 0.35; // Height above ring center

  if (config.stones.count === 1) {
    stonePositions.push([0, stoneHeight, 0]);
  } else if (config.stones.count === 2) {
    stonePositions.push([-0.18, stoneHeight - 0.05, 0]);
    stonePositions.push([0.18, stoneHeight - 0.05, 0]);
  } else {
    stonePositions.push([0, stoneHeight, 0]);
    stonePositions.push([-0.28, stoneHeight - 0.1, 0]);
    stonePositions.push([0.28, stoneHeight - 0.1, 0]);
  }

  return (
    <group ref={groupRef}>
      {/* Band - the circular ring part */}
      <BandModel
        config={config.band}
        material={config.material}
        ringRadius={ringRadius}
        tubeRadius={bandTubeRadius}
      />

      {/* Head/Setting with prongs - sits at top of ring */}
      <HeadModel
        config={config.head}
        material={config.material}
        baseY={settingBaseY}
        stoneScale={stoneScale}
      />

      {/* Diamond(s) */}
      {stonePositions.map((position, index) => (
        <StoneModel
          key={index}
          type={config.stones.type}
          position={position}
          scale={index === 0 && config.stones.count === 3 ? stoneScale * 1.15 : stoneScale}
        />
      ))}
    </group>
  );
}
