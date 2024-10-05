import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const PlanetLabel = ({
  position,
  text,
  fontSize = 1.5,
}: {
  position: [number, number, number];
  text: string;
  fontSize?: number;
}) => {
  const textRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false); // State to track hover

  useFrame(() => {
    if (textRef.current) {
      const distance = camera.position.distanceTo(
        new THREE.Vector3(...position)
      );

      // Adjust scale inversely to distance
      const scale = distance * 0.01; // Fine-tuning factor
      textRef.current.scale.set(scale, scale, scale);

      // Ensure text always faces the camera (billboard effect)
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      fontWeight={hovered ? 900 : 600}
      color={hovered ? "yellow" : "white"} // Change color on hover
      anchorX="center" // Center horizontally
      anchorY="middle" // Center vertically
      fontStyle="italic"
      onPointerOver={() => setHovered(true)} // Set hovered state
      onPointerOut={() => setHovered(false)} // Reset hovered state
    >
      {text}
    </Text>
  );
};

export default PlanetLabel;
