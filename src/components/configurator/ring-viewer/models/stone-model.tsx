'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Ring3DConfig } from '../hooks/use-ring-config';

interface StoneModelProps {
  type: Ring3DConfig['stones']['type'];
  position?: [number, number, number];
  scale?: number;
}

// Create a brilliant-cut diamond geometry
function createDiamondGeometry(size: number = 1): THREE.BufferGeometry {
  // Diamond proportions for a brilliant cut
  const crownHeight = size * 0.35; // Top part above girdle
  const pavilionDepth = size * 0.55; // Bottom point below girdle
  const tableRadius = size * 0.4; // Top flat surface
  const girdleRadius = size * 0.5; // Widest point

  const vertices: number[] = [];
  const indices: number[] = [];

  // Vertex positions
  // 0: Table center (top)
  vertices.push(0, crownHeight, 0);

  // 1-8: Table edge vertices (octagon)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    vertices.push(
      Math.cos(angle) * tableRadius,
      crownHeight * 0.9,
      Math.sin(angle) * tableRadius
    );
  }

  // 9-24: Girdle vertices (16-sided)
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    vertices.push(
      Math.cos(angle) * girdleRadius,
      0,
      Math.sin(angle) * girdleRadius
    );
  }

  // 25: Culet (bottom point)
  vertices.push(0, -pavilionDepth, 0);

  // Faces

  // Table (top octagon)
  for (let i = 0; i < 8; i++) {
    const next = ((i + 1) % 8) + 1;
    indices.push(0, i + 1, next);
  }

  // Crown facets (table to girdle)
  for (let i = 0; i < 8; i++) {
    const tableIdx = i + 1;
    const nextTableIdx = ((i + 1) % 8) + 1;
    const girdleIdx = 9 + i * 2;
    const girdleIdxNext = 9 + i * 2 + 1;
    const girdleIdxNext2 = 9 + ((i * 2 + 2) % 16);

    // Crown main facet
    indices.push(tableIdx, girdleIdx, girdleIdxNext);
    // Crown star facet
    indices.push(tableIdx, girdleIdxNext, nextTableIdx);
    indices.push(nextTableIdx, girdleIdxNext, girdleIdxNext2);
  }

  // Pavilion facets (girdle to culet)
  for (let i = 0; i < 16; i++) {
    const girdleIdx = 9 + i;
    const nextGirdleIdx = 9 + ((i + 1) % 16);
    indices.push(girdleIdx, 25, nextGirdleIdx);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

export function StoneModel({
  type,
  position = [0, 0.5, 0],
  scale = 0.4,
}: StoneModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => createDiamondGeometry(scale), [scale]);

  // Subtle sparkle rotation
  useFrame((state) => {
    if (meshRef.current && type !== 'skip') {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  if (type === 'skip') {
    return (
      <mesh position={position}>
        <octahedronGeometry args={[scale * 0.3, 0]} />
        <meshBasicMaterial color="#cccccc" wireframe transparent opacity={0.3} />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} castShadow>
      <meshPhysicalMaterial
        color={type === 'natural' ? '#ffffff' : '#f0f8ff'}
        metalness={0.1}
        roughness={0.0}
        transmission={0.95}
        thickness={scale}
        ior={2.42}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={2}
        transparent
      />
    </mesh>
  );
}
