'use client';

import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

interface RingControlsProps {
  enableZoom?: boolean;
  autoRotate?: boolean;
}

export function RingControls({ enableZoom = true, autoRotate = false }: RingControlsProps) {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial camera position for a good ring view
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={enableZoom}
      minDistance={3}
      maxDistance={10}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 1.5}
      autoRotate={autoRotate}
      autoRotateSpeed={1}
      touches={{
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_ROTATE,
      }}
      rotateSpeed={0.8}
      dampingFactor={0.1}
      enableDamping
    />
  );
}
