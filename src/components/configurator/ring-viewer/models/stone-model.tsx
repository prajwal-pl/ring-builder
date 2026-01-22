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
  const vertices: number[] = [];
  const indices: number[] = [];

  // Diamond parameters
  const crownHeight = size * 0.35;
  const pavilionDepth = size * 0.45;
  const tableRadius = size * 0.35;
  const girdleRadius = size * 0.5;
  const crownFacets = 8;
  const pavilionFacets = 8;

  // Top point (table center - flat top for brilliant cut)
  const topY = crownHeight;
  const bottomY = -pavilionDepth;
  const girdleY = 0;

  // Table vertices (top flat surface)
  const tableVertices: number[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    tableVertices.push(Math.cos(angle) * tableRadius, topY, Math.sin(angle) * tableRadius);
  }

  // Girdle vertices (widest point)
  const girdleVertices: number[] = [];
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    girdleVertices.push(Math.cos(angle) * girdleRadius, girdleY, Math.sin(angle) * girdleRadius);
  }

  // Culet (bottom point)
  const culetVertex = [0, bottomY, 0];

  // Combine all vertices
  // Table center
  vertices.push(0, topY, 0);
  // Table edge vertices (indices 1-8)
  vertices.push(...tableVertices);
  // Girdle vertices (indices 9-24)
  vertices.push(...girdleVertices);
  // Culet (index 25)
  vertices.push(...culetVertex);

  // Create faces

  // Table (top flat face) - fan from center
  for (let i = 0; i < 8; i++) {
    const next = ((i + 1) % 8) + 1;
    indices.push(0, i + 1, next);
  }

  // Crown facets (table edge to girdle)
  for (let i = 0; i < 8; i++) {
    const tableIdx = i + 1;
    const nextTableIdx = ((i + 1) % 8) + 1;
    const girdleIdx1 = 9 + i * 2;
    const girdleIdx2 = 9 + i * 2 + 1;
    const nextGirdleIdx = 9 + ((i * 2 + 2) % 16);

    // Two triangles per crown facet
    indices.push(tableIdx, girdleIdx1, girdleIdx2);
    indices.push(tableIdx, girdleIdx2, nextTableIdx);
  }

  // Pavilion facets (girdle to culet)
  const culetIdx = 25;
  for (let i = 0; i < 16; i++) {
    const girdleIdx = 9 + i;
    const nextGirdleIdx = 9 + ((i + 1) % 16);
    indices.push(girdleIdx, culetIdx, nextGirdleIdx);
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

  // Subtle sparkle animation
  useFrame((state) => {
    if (meshRef.current && type !== 'skip') {
      // Very subtle rotation for sparkle effect
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  if (type === 'skip') {
    // Show a placeholder outline when stone is skipped
    return (
      <mesh position={position}>
        <octahedronGeometry args={[scale * 0.4, 0]} />
        <meshBasicMaterial color="#cccccc" wireframe transparent opacity={0.3} />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} castShadow>
      <meshPhysicalMaterial
        color={type === 'natural' ? '#ffffff' : '#f8f8ff'}
        metalness={0}
        roughness={0}
        transmission={0.95}
        thickness={0.5}
        ior={2.42}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={3}
      />
    </mesh>
  );
}
