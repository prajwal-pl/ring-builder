'use client';

import { Environment, Lightformer } from '@react-three/drei';
import type { ReactNode } from 'react';

interface RingSceneProps {
  children: ReactNode;
}

export function RingScene({ children }: RingSceneProps) {
  return (
    <>
      {/* Soft ambient light */}
      <ambientLight intensity={0.3} />

      {/* Main key light - bright for metal reflections */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Fill light - softer, from left */}
      <directionalLight position={[-5, 3, 2]} intensity={0.8} />

      {/* Back/rim light - for edge definition */}
      <directionalLight position={[0, 4, -5]} intensity={0.6} />

      {/* Spot lights for diamond sparkle */}
      <spotLight
        position={[2, 4, 2]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <spotLight
        position={[-2, 4, -2]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
      />

      {/* Environment with custom lighting for jewelry */}
      <Environment resolution={512}>
        {/* Bright area lights for reflections */}
        <Lightformer
          form="rect"
          intensity={2}
          position={[0, 5, -5]}
          scale={[10, 5, 1]}
          color="#ffffff"
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[5, 2, 0]}
          scale={[5, 5, 1]}
          rotation-y={Math.PI / 2}
          color="#ffffff"
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[-5, 2, 0]}
          scale={[5, 5, 1]}
          rotation-y={-Math.PI / 2}
          color="#ffffff"
        />
        {/* Soft fill from below */}
        <Lightformer
          form="ring"
          intensity={0.5}
          position={[0, -3, 0]}
          scale={[10, 10, 1]}
          rotation-x={Math.PI / 2}
          color="#f0f0ff"
        />
      </Environment>

      {children}
    </>
  );
}
