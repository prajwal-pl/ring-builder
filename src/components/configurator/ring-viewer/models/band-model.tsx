'use client';

import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { Ring3DConfig } from '../hooks/use-ring-config';

interface BandModelProps {
  config: Ring3DConfig['band'];
  material: Ring3DConfig['material'];
  ringRadius: number;
  tubeRadius: number;
}

export function BandModel({ config, material, ringRadius, tubeRadius }: BandModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    // Create a torus - this is the ring band
    // TorusGeometry(radius, tube, radialSegments, tubularSegments)
    // By default, torus lies in XY plane (stands upright like a ring on display)
    const geo = new THREE.TorusGeometry(
      ringRadius,   // Distance from center of torus to center of tube
      tubeRadius,   // Radius of the tube (band thickness)
      24,           // Radial segments (smoothness of tube cross-section)
      100           // Tubular segments (smoothness around the ring)
    );

    return geo;
  }, [ringRadius, tubeRadius]);

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshPhysicalMaterial
        color={material.color}
        metalness={1}
        roughness={0.15}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        reflectivity={1}
        envMapIntensity={2}
      />
    </mesh>
  );
}
