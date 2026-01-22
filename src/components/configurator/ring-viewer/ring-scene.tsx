'use client';

import { Environment } from '@react-three/drei';
import type { ReactNode } from 'react';

interface RingSceneProps {
  children: ReactNode;
}

export function RingScene({ children }: RingSceneProps) {
  return (
    <>
      {/* Soft ambient light */}
      <ambientLight intensity={0.5} />

      {/* Main key light - from upper right front */}
      <directionalLight
        position={[3, 4, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Fill light - softer, from left */}
      <directionalLight position={[-4, 2, 2]} intensity={0.6} />

      {/* Back light - for rim lighting and sparkle */}
      <directionalLight position={[0, 3, -4]} intensity={0.4} />

      {/* Top light - for diamond sparkle */}
      <pointLight position={[0, 5, 0]} intensity={0.5} />

      {/* Environment map for realistic reflections */}
      <Environment preset="studio" />

      {children}
    </>
  );
}
