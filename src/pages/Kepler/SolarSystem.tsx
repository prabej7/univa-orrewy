import { Position } from "@/components/Model";
import Sun from "./Sun";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { NEOs } from "@/components";
import axios from 'axios'
import { convertApiDataToOrbitalElements } from "@/lib/calculations";

interface Props {
  onClick: (position: Position, name: string) => void;
  isKepler: boolean;
  speed: number;
  onLabelClick: (name: string) => void;
  isNeos: boolean
}

export interface NearEarthObjectApiResponse {
  object: string;
  epoch_tdb: string;
  tp_tdb: string;
  e: string;
  i_deg: string;
  w_deg: string;
  node_deg: string;
  q_au_1: string;
  q_au_2: string;
  p_yr: string;
  moid_au: string;
  ref: string;
  object_name: string;
}

export interface OrbitalElements {
  a: string;
  e: number;
  i: number;
  Ω: number;
  ω: number;
  T: number;
}

interface NeOs {
  name: string;
  orbitalElements: OrbitalElements;
}


const SolarSystemWithKepler: React.FC<Props> = ({
  onClick,
  isKepler,
  onLabelClick,
  speed,
  isNeos
}) => {
  const { camera } = useThree();
  const textRef = useRef<THREE.Mesh>(null);
  const [nearEarthObjects, setNearEarthObjects] = useState<NeOs[]>([]);
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


  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://data.nasa.gov/resource/b67r-rgxc.json");
      const temp: {
        orbitalElements: OrbitalElements;
        name: string;
      }[] = data.map((d: NearEarthObjectApiResponse) => ({
        orbitalElements: convertApiDataToOrbitalElements(d),
        name: d.object_name  // Assuming `object_name` is part of the API response
      }));
      console.log(temp)
      setNearEarthObjects(temp);
      // Now `temp` holds data in your required format, ready to use
    })();
  }, []);




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
      {isNeos && <>
        {nearEarthObjects.map((neo, index) => {

          return (
            <>{<NEOs
              speed={speed}
              key={index} // Use index or a unique property from the neo object
              orbitalElements={neo.orbitalElements}
              name={neo.name}
            // name={neo.name}
            />}</>

          );
        })}

      </>}

      <ambientLight intensity={0.5} />

      <directionalLight position={[10, 0, -10]} intensity={1.5} castShadow />
    </>
  );
};

export default SolarSystemWithKepler;
