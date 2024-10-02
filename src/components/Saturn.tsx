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
}

const Saturn: React.FC<Props> = ({ position, args, texture, onClick }) => {
  const [hovered, setHover] = useState<boolean>(false);
  const [text] = useTexture([texture]);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group
      onClick={(e) => {
        onClick(e.point);
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Saturn's ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={position}>
        <ringGeometry args={[1.2, 2, 64]} />
        <meshBasicMaterial
          color="#A49B72"
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.7}
          map={useTexture("/textures/saturn/ring.png")}
        />
      </mesh>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={args} />
        <meshStandardMaterial map={text} />
      </mesh>
      {hovered && (
        <mesh position={position}>
          <icosahedronGeometry args={[args[0] * 1.2, 16]} />
          <meshBasicMaterial
            color={"#005673"}
            transparent={true}
            opacity={0.4}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
  );
};

export default Saturn;
