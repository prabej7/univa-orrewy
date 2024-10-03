import React, { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export interface Position {
  x: number;
  y: number;
  z: number;
}

interface Props {
  texture: string;
  position: [number, number, number];
  args: [number, number];
  name: string;
  onClick: (position: Position) => void;
  glowColor?: string; // Optional glow color prop
  
}

const Model: React.FC<Props> = ({ position, args, texture, onClick, glowColor = "#00ff00" }) => {
  const [text] = useTexture([texture]);
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <group
      onClick={(e) => {
        onClick(e.point);
      }}
      onPointerOver={() => setIsHovered(true)} // Handle hover start
      onPointerOut={() => setIsHovered(false)}  // Handle hover end
    >
      {/* Main Planet Model */}
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={args} />
        <meshStandardMaterial map={text} />
      </mesh>

      {/* Outer Glow (only visible when hovered) */}
      {isHovered && (
        <mesh position={position}>
          {/* Slightly larger geometry to create the glow effect */}
          <icosahedronGeometry args={[args[0] * 1.2, args[1]]} />
          <meshBasicMaterial
            color={glowColor}
            transparent={true}
            opacity={0.4}  // Adjust the opacity for glow visibility
            side={THREE.BackSide} // Make sure the glow is rendered inside out
          />
        </mesh>
      )}
    </group>
  );
};

export default Model;
