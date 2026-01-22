'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import type { Ring3DConfig } from '../hooks/use-ring-config';

interface HeadModelProps {
  config: Ring3DConfig['head'];
  material: Ring3DConfig['material'];
  bandInnerRadius: number;
}

interface ProngProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  tipStyle: Ring3DConfig['head']['prongTipStyle'];
  material: Ring3DConfig['material'];
  height?: number;
}

function Prong({ position, rotation = [0, 0, 0], tipStyle, material, height = 0.35 }: ProngProps) {
  const geometry = useMemo(() => {
    const baseRadius = 0.025;
    let tipRadius = 0.015;

    // Adjust tip based on style
    switch (tipStyle) {
      case 'claw':
        tipRadius = 0.008; // Pointed
        break;
      case 'petite-claw':
        tipRadius = 0.012; // Slightly pointed
        break;
      case 'rounded':
        tipRadius = 0.02; // Rounded top
        break;
      case 'tab':
        tipRadius = 0.025; // Flat top (same as base)
        break;
    }

    // Create a tapered cylinder for the prong
    const geo = new THREE.CylinderGeometry(tipRadius, baseRadius, height, 8);
    return geo;
  }, [tipStyle, height]);

  return (
    <mesh
      geometry={geometry}
      position={position}
      rotation={rotation}
      castShadow
    >
      <meshStandardMaterial
        color={material.color}
        metalness={material.metalness}
        roughness={material.roughness}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

export function HeadModel({ config, material, bandInnerRadius }: HeadModelProps) {
  const { type, prongLayout, prongTipStyle } = config;

  // Position where prongs emerge from the band
  const baseHeight = 0.1;
  const prongHeight = 0.35;

  // Calculate prong positions based on layout
  const prongPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 0.15; // Distance from center for prongs

    if (prongLayout === '4-classic') {
      // North, South, East, West
      positions.push([0, baseHeight + prongHeight / 2, radius]); // Front
      positions.push([0, baseHeight + prongHeight / 2, -radius]); // Back
      positions.push([radius, baseHeight + prongHeight / 2, 0]); // Right
      positions.push([-radius, baseHeight + prongHeight / 2, 0]); // Left
    } else {
      // 4-compass: Diagonal positions
      const diag = radius * 0.707; // cos(45deg)
      positions.push([diag, baseHeight + prongHeight / 2, diag]);
      positions.push([diag, baseHeight + prongHeight / 2, -diag]);
      positions.push([-diag, baseHeight + prongHeight / 2, diag]);
      positions.push([-diag, baseHeight + prongHeight / 2, -diag]);
    }

    return positions;
  }, [prongLayout]);

  if (type === 'none') {
    return null;
  }

  if (type === 'bezel') {
    // Bezel setting - a collar around the stone instead of prongs
    return (
      <group>
        {/* Bezel collar */}
        <mesh position={[0, baseHeight + 0.15, 0]} castShadow>
          <torusGeometry args={[0.22, 0.03, 16, 32]} />
          <meshStandardMaterial
            color={material.color}
            metalness={material.metalness}
            roughness={material.roughness}
            envMapIntensity={1.2}
          />
        </mesh>
        {/* Base platform */}
        <mesh position={[0, baseHeight, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.25, 0.08, 32]} />
          <meshStandardMaterial
            color={material.color}
            metalness={material.metalness}
            roughness={material.roughness}
            envMapIntensity={1.2}
          />
        </mesh>
      </group>
    );
  }

  return (
    <group>
      {/* Base platform that connects prongs to band */}
      <mesh position={[0, baseHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.22, baseHeight, 32]} />
        <meshStandardMaterial
          color={material.color}
          metalness={material.metalness}
          roughness={material.roughness}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Prongs */}
      {prongPositions.map((pos, index) => (
        <Prong
          key={index}
          position={pos}
          tipStyle={prongTipStyle}
          material={material}
          height={prongHeight}
        />
      ))}

      {/* Halo ring (if applicable) */}
      {(type === 'halo' || type === 'hidden-halo') && (
        <mesh
          position={[0, type === 'hidden-halo' ? baseHeight * 0.5 : baseHeight + 0.08, 0]}
          castShadow
        >
          <torusGeometry args={[0.28, 0.025, 16, 48]} />
          <meshStandardMaterial
            color={material.color}
            metalness={material.metalness}
            roughness={material.roughness}
            envMapIntensity={1.2}
          />
        </mesh>
      )}

      {/* Basket (decorative under-gallery) */}
      {type === 'basket' && (
        <group>
          {/* Basket bars connecting prongs */}
          {[0, 1, 2, 3].map((i) => {
            const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
            const x = Math.cos(angle) * 0.12;
            const z = Math.sin(angle) * 0.12;
            return (
              <mesh
                key={`basket-${i}`}
                position={[x, baseHeight + 0.1, z]}
                rotation={[0, -angle, Math.PI / 6]}
                castShadow
              >
                <cylinderGeometry args={[0.012, 0.012, 0.15, 8]} />
                <meshStandardMaterial
                  color={material.color}
                  metalness={material.metalness}
                  roughness={material.roughness}
                  envMapIntensity={1.2}
                />
              </mesh>
            );
          })}
        </group>
      )}
    </group>
  );
}
