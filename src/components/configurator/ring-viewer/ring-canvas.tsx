'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { RingScene } from './ring-scene';
import { RingControls } from './ring-controls';
import { RingModel } from './models/ring-model';
import type { Ring3DConfig } from './hooks/use-ring-config';

interface RingCanvasProps {
  config: Ring3DConfig;
}

export function RingCanvas({ config }: RingCanvasProps) {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 4.5],
        fov: 40,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <RingScene>
          <RingModel config={config} />
        </RingScene>
        <RingControls enableZoom autoRotate={false} />
      </Suspense>
    </Canvas>
  );
}

// Default export for dynamic import
export default RingCanvas;
