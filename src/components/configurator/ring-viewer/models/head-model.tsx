'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import type { Ring3DConfig } from '../hooks/use-ring-config';

interface HeadModelProps {
  config: Ring3DConfig['head'];
  material: Ring3DConfig['material'];
  baseY: number;
  stoneScale: number;
}

export function HeadModel({ config, material, baseY, stoneScale }: HeadModelProps) {
  const { type, prongLayout, prongTipStyle } = config;

  // Prong dimensions based on stone scale
  const prongRadius = stoneScale * 0.35; // How far prongs are from center
  const prongBaseWidth = 0.02;
  const prongTipWidth = prongTipStyle === 'claw' ? 0.008 : prongTipStyle === 'rounded' ? 0.015 : 0.012;
  const prongHeight = 0.28;

  // Calculate prong positions
  const prongPositions = useMemo(() => {
    const positions: { pos: [number, number, number]; angle: number }[] = [];

    if (prongLayout === '4-classic') {
      // 4 prongs at cardinal positions
      [0, 90, 180, 270].forEach((deg) => {
        const angle = (deg * Math.PI) / 180;
        positions.push({
          pos: [
            Math.sin(angle) * prongRadius,
            baseY + prongHeight / 2 + 0.05,
            Math.cos(angle) * prongRadius,
          ],
          angle: angle,
        });
      });
    } else {
      // 4-compass: 45 degree offset
      [45, 135, 225, 315].forEach((deg) => {
        const angle = (deg * Math.PI) / 180;
        positions.push({
          pos: [
            Math.sin(angle) * prongRadius,
            baseY + prongHeight / 2 + 0.05,
            Math.cos(angle) * prongRadius,
          ],
          angle: angle,
        });
      });
    }

    return positions;
  }, [prongLayout, prongRadius, baseY, prongHeight]);

  if (type === 'none') {
    return null;
  }

  // Bezel setting - a smooth collar around the stone
  if (type === 'bezel') {
    return (
      <group>
        {/* Bezel collar */}
        <mesh position={[0, baseY + 0.18, 0]} castShadow>
          <cylinderGeometry args={[stoneScale * 0.55, stoneScale * 0.6, 0.22, 32, 1, true]} />
          <meshPhysicalMaterial
            color={material.color}
            metalness={1}
            roughness={0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            reflectivity={1}
            envMapIntensity={2}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Small base connecting to band */}
        <mesh position={[0, baseY + 0.03, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.08, 0.06, 16]} />
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
      </group>
    );
  }

  return (
    <group>
      {/* Small base/gallery connecting prongs to band */}
      <mesh position={[0, baseY + 0.025, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 0.05, 16]} />
        <meshStandardMaterial
          color={material.color}
          metalness={material.metalness}
          roughness={material.roughness}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Prongs - thin tapered cylinders */}
      {prongPositions.map(({ pos, angle }, index) => (
        <mesh
          key={index}
          position={pos}
          castShadow
        >
          <cylinderGeometry args={[prongTipWidth, prongBaseWidth, prongHeight, 8]} />
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
      ))}

      {/* Halo - small ring of stones around main stone */}
      {type === 'halo' && (
        <mesh position={[0, baseY + 0.12, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[stoneScale * 0.6, 0.025, 12, 32]} />
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
      )}

      {/* Hidden halo - sits lower, partially hidden */}
      {type === 'hidden-halo' && (
        <mesh position={[0, baseY + 0.06, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[stoneScale * 0.5, 0.02, 12, 32]} />
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
      )}

      {/* Basket - decorative gallery under the stone */}
      {type === 'basket' && (
        <group>
          {[0, 1, 2, 3].map((i) => {
            const angle = ((i * 90 + 45) * Math.PI) / 180;
            const x = Math.sin(angle) * prongRadius * 0.6;
            const z = Math.cos(angle) * prongRadius * 0.6;
            return (
              <mesh
                key={`basket-${i}`}
                position={[x, baseY + 0.1, z]}
                rotation={[0.3, angle, 0]}
                castShadow
              >
                <cylinderGeometry args={[0.008, 0.01, 0.1, 6]} />
                <meshStandardMaterial
                  color={material.color}
                  metalness={material.metalness}
                  roughness={material.roughness}
                  envMapIntensity={1.5}
                />
              </mesh>
            );
          })}
        </group>
      )}
    </group>
  );
}
