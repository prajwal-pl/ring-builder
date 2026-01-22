'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Ring3DConfig } from '../hooks/use-ring-config';

interface BandModelProps {
  config: Ring3DConfig['band'];
  material: Ring3DConfig['material'];
}

// Create a rounded rectangle profile for the band cross-section
function createRoundProfile(width: number, height: number, segments: number = 16): THREE.Vector2[] {
  const points: THREE.Vector2[] = [];
  const radius = Math.min(width, height) * 0.4;

  // Create a rounded rectangle path
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle) * width * 0.5;
    const y = Math.sin(angle) * height * 0.5;
    points.push(new THREE.Vector2(x, y));
  }

  return points;
}

// Create a square profile for the band cross-section
function createSquareProfile(width: number, height: number): THREE.Vector2[] {
  const hw = width * 0.5;
  const hh = height * 0.5;
  const cornerRadius = Math.min(hw, hh) * 0.1; // Slight rounding on corners

  return [
    new THREE.Vector2(-hw + cornerRadius, -hh),
    new THREE.Vector2(hw - cornerRadius, -hh),
    new THREE.Vector2(hw, -hh + cornerRadius),
    new THREE.Vector2(hw, hh - cornerRadius),
    new THREE.Vector2(hw - cornerRadius, hh),
    new THREE.Vector2(-hw + cornerRadius, hh),
    new THREE.Vector2(-hw, hh - cornerRadius),
    new THREE.Vector2(-hw, -hh + cornerRadius),
    new THREE.Vector2(-hw + cornerRadius, -hh),
  ];
}

export function BandModel({ config, material }: BandModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const { innerRadius, thickness, profile, isComfortFit } = config;

    // Band radial depth (how thick the band is radially)
    const bandDepth = 0.18;

    // Create the band using TorusGeometry for round profile
    // or ExtrudeGeometry for square profile
    if (profile === 'round') {
      // Simple torus for round band
      const tubeRadius = bandDepth / 2;
      const torusRadius = innerRadius + tubeRadius;

      return new THREE.TorusGeometry(torusRadius, tubeRadius, 32, 100);
    } else {
      // For square profile, use a ring geometry and extrude
      const shape = new THREE.Shape();
      const outerR = innerRadius + bandDepth;
      const innerR = innerRadius;

      // Outer circle
      shape.absarc(0, 0, outerR, 0, Math.PI * 2, false);

      // Inner circle (hole)
      const hole = new THREE.Path();
      hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
      shape.holes.push(hole);

      // Extrude to create height
      const extrudeSettings = {
        depth: thickness,
        bevelEnabled: !isComfortFit,
        bevelThickness: isComfortFit ? 0 : 0.02,
        bevelSize: isComfortFit ? 0 : 0.02,
        bevelSegments: 3,
      };

      const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      // Center the band vertically
      geo.translate(0, 0, -thickness / 2);
      // Rotate to lie flat (band should be horizontal)
      geo.rotateX(Math.PI / 2);

      return geo;
    }
  }, [config]);

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial
        color={material.color}
        metalness={material.metalness}
        roughness={material.roughness}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}
