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
    // Camera positioned to view ring at nice angle (like reference images)
    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0.3, 0);
  }, [camera]);

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={enableZoom}
      minDistance={2}
      maxDistance={12}
      minPolarAngle={0.1}
      maxPolarAngle={Math.PI - 0.1}
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
