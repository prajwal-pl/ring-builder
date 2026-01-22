'use client';

import { Environment } from '@react-three/drei';
import type { ReactNode } from 'react';

interface RingSceneProps {
  children: ReactNode;
}

export function RingScene({ children }: RingSceneProps) {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.4} />

      {/* Key light - main directional light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Fill light - softer, from opposite side */}
      <directionalLight position={[-5, 3, -5]} intensity={0.5} />

      {/* Rim light - from behind for edge definition */}
      <directionalLight position={[0, 5, -8]} intensity={0.3} />

      {/* Bottom fill - subtle uplight for metal reflections */}
      <pointLight position={[0, -3, 0]} intensity={0.2} />

      {/* Environment map for realistic metal reflections */}
      <Environment preset="studio" />

      {/* Ring model and other 3D content */}
      {children}
    </>
  );
}
