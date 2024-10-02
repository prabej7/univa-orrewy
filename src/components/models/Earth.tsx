import { ModelProps } from "@/constants/types/modelProps";
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";

const EarthMesh: React.FC<ModelProps> = ({ position, onClick }) => {
  const earthRef = useRef<THREE.Group>(null);
  const textRefs = useRef<(THREE.Mesh | null)[]>([]);
  const [hovered, setHovered] = useState(false); // State to track hover status

  const [earthDay, earthNight, earthCloud, earthSpec, moonTexture] = useTexture(
    [
      "/textures/earth/earth8k.jpg",
      "/textures/earth/03_earthlights1k.jpg",
      "/textures/earth/01_earthbump1k.jpg",
      "/textures/earth/02_earthspec1k.jpg",
      "/textures/moon/moon.jpg",
    ]
  );

  const [] = useGLTF([],true);
  // Load satellite models
  const { scene: issScene } = useGLTF("/models/ISS_stationary.glb");
  const { scene: hubbleScene } = useGLTF("/models/Hubble.glb", true);
  const { scene: terraScene } = useGLTF("/models/Terra.glb", true);
  const { scene: acrimsatScene } = useGLTF(
    "/models/Active Cavity Irradiance Monitor Satellite.glb",
    true
  );
  const { scene: tdrssScene } = useGLTF(
    "/models/Tracking and Data Relay Satellites (TDRS).glb",
    true
  );
  const { scene: landsatScene } = useGLTF("/models/Jason.glb", true);
  
  const halley = useLoader(STLLoader, "/models/hw1.stl");
  const toutatis = useLoader(STLLoader, "/models/toutatis.stl");
  const mithra = useLoader(STLLoader, "/models/mithra.stl");
  const golevka = useLoader(STLLoader, "/models/golevka.stl");
  const geographos = useLoader(STLLoader, "/models/geographos.stl");
  const bogusBennu = useLoader(STLLoader, "/models/Bogus Bennu Shape.STL");

  // Update text orientation to face the camera
  useFrame(({ camera }) => {
    textRefs.current.forEach((textMesh) => {
      if (textMesh) {
        textMesh.lookAt(camera.position);
      }
    });
  });

  // Click handler to log the object name
  const handleClick = (name: string) => {
    console.log(`${name} clicked!`);
  };

  return (
    <group
      ref={earthRef}
      rotation={[0.41, 0, 0]}
      position={position}
      onClick={(e) => onClick(e.point)} 
      
    >
      {/* Earth and Moon */}
      <mesh
        onPointerOver={() => setHovered(true)} // Set hovered state
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 16]} />
        <meshStandardMaterial map={earthDay} flatShading />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.01, 16]} />
        <meshStandardMaterial
          map={earthNight}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.02, 16]} />
        <meshStandardMaterial
          map={earthCloud}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.02, 16]} />
        <meshStandardMaterial
          map={earthSpec}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.04}
        />
      </mesh>

      <mesh position={[3, 0, 0]} scale={[0.272, 0.272, 0.272]}>
        <sphereGeometry args={[0.272, 16, 16]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>


      {hovered && (
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.02 * 1.2, 16]} />
          <meshBasicMaterial
            color={"#005673"}
            transparent={true}
            opacity={0.4} 
            side={THREE.BackSide} 
          />
        </mesh>
      )}

      {/* Satellites Positioned Relative to Earth */}
      <group position={[0, 0, 1.5]} onClick={() => handleClick("ISS")}>
        <primitive object={issScene} scale={[0.002, 0.002, 0.002]} />
      </group>
      <group position={[1, 0, 1.55]} onClick={() => handleClick("Hubble")}>
        <primitive object={hubbleScene} scale={[0.005, 0.005, 0.005]} />
      </group>
      <group position={[-1, 1, 1.6]} onClick={() => handleClick("Terra")}>
        <primitive object={terraScene} scale={[0.000005, 0.000005, 0.000005]} />
      </group>
      <group position={[1, -1, 1.6]} onClick={() => handleClick("ACRIMSAT")}>
        <primitive object={acrimsatScene} scale={[0.00001, 0.00001, 0.00001]} />
      </group>
      <group
        position={[-1.5, 0.5, 1.66]}
        onClick={() => handleClick("Jason Satellite")}
      >
        <primitive object={landsatScene} scale={[0.0002, 0.0002, 0.0002]} />
      </group>

      {/* Halley Comet */}
      <mesh
        position={[0, 0, 2]}
        scale={[0.05, 0.05, 0.05]}
        onClick={() => handleClick("Halley Comet")}
      >
        <primitive object={halley} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        position={[2, 0, 2]}
        scale={[0.05, 0.05, 0.05]}
        onClick={() => handleClick("Toutatis")}
      >
        <primitive object={toutatis} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        position={[4, 0, 2]}
        scale={[0.05, 0.05, 0.05]}
        onClick={() => handleClick("Mithra")}
      >
        <primitive object={mithra} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        position={[6, 0, 2]}
        scale={[0.05, 0.05, 0.05]}
        onClick={() => handleClick("Golevka")}
      >
        <primitive object={golevka} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        position={[8, 0, 2]}
        scale={[0.05, 0.05, 0.05]}
        onClick={() => handleClick("Geographos")}
      >
        <primitive object={geographos} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        position={[10, 0, 2]}
        scale={[0.05, 0.05, 0.05]}
        onClick={() => handleClick("Bogus Bennu")}
      >
        <primitive object={bogusBennu} />
        <meshStandardMaterial color="white" />
      </mesh>

      <mesh
        position={[0, 0, 3]} // Adjusted for geosynchronous orbit (~35,800 km)
        scale={[0.007, 0.007, 0.007]} // Same scale for consistency
        onClick={() => handleClick("TDRS")}
      >
        <primitive object={tdrssScene} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

export default EarthMesh;
