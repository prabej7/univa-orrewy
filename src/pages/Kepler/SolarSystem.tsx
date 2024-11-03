import { Position } from "@/components/Model";
import Sun from "./Sun";
import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { NEOs } from "@/components";
import { nearEarthObjects } from "@/constants/neos";

interface Props {
  onClick: (position: Position, name: string) => void;
  isKepler: boolean;
  speed: number;
  onLabelClick: (name: string) => void;
}

const SolarSystemWithKepler: React.FC<Props> = ({
  onClick,
  isKepler,
  onLabelClick,
  speed
}) => {
  const { camera } = useThree();
  const textRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (textRef.current) {
      // Calculate the distance between the camera and the text position
      const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

      // Adjust the scale inversely to the distance, keeping the size consistent
      const scale = distance * 0.01; // Adjust 0.01 as needed for fine-tuning
      textRef.current.scale.set(scale, scale, scale);

      // Ensure text always faces the camera (billboard effect)
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });
  // Define the planets' positions and radii again here
  const sunRef = useRef<THREE.Group>(null);



  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  




  return (
    <>
      {/* Sun - Central Light Source */}

      <Sun
        onPlanetClick={onClick}
        onLabelClick={onLabelClick}
        speed={speed}
        isKepler={isKepler}
        ref={sunRef}
        position={[0, 0, 0]}
      />

      {nearEarthObjects.map((neo, index) => {

        return (
          <NEOs
            key={index} // Use index or a unique property from the neo object
            orbitalElements={neo.orbitalElements}

            name={neo.name}
          />
        );
      })}


      <ambientLight intensity={0.5} />

      <directionalLight position={[10, 0, -10]} intensity={1.5} castShadow />
    </>
  );
};

export default SolarSystemWithKepler;
