import React, {  useState } from "react";
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
  onClick: (position: Position, name: string) => void;
  glowColor?: string; // Optional glow color prop
}

// Forward ref to the group
const Model = React.forwardRef<THREE.Group, Props>(
  ({ position, args, texture, onClick, glowColor = "#00ff00", name }, ref) => {
    const [text] = useTexture([texture]);
    const [isHovered, setIsHovered] = useState(false); // State to track hover
   
    return (
      <group
        ref={ref} // Now ref is applied to the group
        onClick={(e) => {
          onClick(e.point, name);
        }}
        onPointerOver={() => setIsHovered(true)} // Handle hover start
        onPointerOut={() => setIsHovered(false)}  // Handle hover end
      >
        {/* Main Planet Model */}
        <mesh position={position}>
          <icosahedronGeometry args={args} />
          <meshStandardMaterial map={text} />
        </mesh>

        {/* Outer Glow (only visible when hovered) */}
        {isHovered && (
          <mesh position={position}>
            <icosahedronGeometry args={[args[0] * 1.2, args[1]]} />
            <meshBasicMaterial
              color={glowColor}
              transparent={true}
              opacity={0.4}
              side={THREE.BackSide}
            />

          </mesh>
        )}
      </group>
    );
  }
);

// Set the display name for better debugging in React DevTools
Model.displayName = "Model";

export default Model;
