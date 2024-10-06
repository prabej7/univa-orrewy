import { ModelProps } from "@/constants/types/modelProps";
import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import PlanetLabel from "../Kepler/PlanetLabel";

const Earth: React.FC<ModelProps> = ({ position, onClick, isModels }) => {
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

  const [] = useGLTF([], true);
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

  // Add these to the scene and position it scientifically
  // const { scene: pallas } = useGLTF("/models/pallas.glb", true);
  // const { scene: ceres } = useGLTF("/models/ceres.glb", true);
  // const { scene: apophis } = useGLTF("/models/apophis.glb", true);
  // const { scene: vesta } = useGLTF("/models/vesta.glb", true);

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
      <PlanetLabel onClick={() => {}} text="Earth" position={[0, 0, 0]} />
      <mesh
        onPointerOver={() => setHovered(true)}
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

      <>
        {phas.map((pha) => {
          return <PHAs phas={pha} />;
        })}
      </>

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

      {isModels && (
        <>
          {/* Satellites Positioned Relative to Earth */}
          <group position={[0, 0, 1.5]} onClick={() => handleClick("ISS")}>
            <primitive object={issScene} scale={[0.002, 0.002, 0.002]} />
          </group>
          <group position={[1, 0, 1.55]} onClick={() => handleClick("Hubble")}>
            <primitive object={hubbleScene} scale={[0.005, 0.005, 0.005]} />
          </group>
          <group position={[-1, 1, 1.6]} onClick={() => handleClick("Terra")}>
            <primitive
              object={terraScene}
              scale={[0.000005, 0.000005, 0.000005]}
            />
          </group>
          <group
            position={[1, -1, 1.6]}
            onClick={() => handleClick("ACRIMSAT")}
          >
            <primitive
              object={acrimsatScene}
              scale={[0.00001, 0.00001, 0.00001]}
            />
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
            position={[0, 0, 3]}
            scale={[0.007, 0.007, 0.007]}
            onClick={() => handleClick("TDRS")}
          >
            <primitive object={tdrssScene} />
            <meshStandardMaterial color="white" />
          </mesh>
        </>
      )}
    </group>
  );
};

export default Earth;

interface PHASProps {
  id: number;
  name: string;
  semiMajorAxis: number;
  eccentricity: number;
  inclination: number;
  longitudeOfAscendingNode: number;
  argumentOfPeriapsis: number;
  meanAnomaly: number;
  model: string;
  speed: number;
  scale: number;
}

const phas = [
  {
    id: 1,
    name: "Pallas",
    semiMajorAxis: 2.77,
    eccentricity: 0.15,
    inclination: 34.84,
    longitudeOfAscendingNode: 131.55,
    argumentOfPeriapsis: 46.35,
    meanAnomaly: 0,
    model: "/models/pallas.glb",
    speed: 0.24,
    scale: 0.1,
  },
  {
    id: 2,
    name: "Apophis",
    semiMajorAxis: 0.922, // in AU
    eccentricity: 0.191, // typical eccentricity for Apophis
    inclination: 3.33, // inclination in degrees
    longitudeOfAscendingNode: 132.55, // degrees
    argumentOfPeriapsis: 101.29, // degrees
    meanAnomaly: 0, // initial mean anomaly
    model: "/models/apophis.glb", // placeholder for model
    speed: 0.43, // typical speed in AU/day
    scale: 0, // scale factor
  },
  {
    id: 3,
    name: "Ceres",
    semiMajorAxis: 2.77, // in AU
    eccentricity: 0.079, // typical eccentricity for Ceres
    inclination: 10.59, // inclination in degrees
    longitudeOfAscendingNode: 80.33, // degrees
    argumentOfPeriapsis: 73.64, // degrees
    meanAnomaly: 0.1, // initial mean anomaly
    model: "/models/ceres.glb", // placeholder for model
    speed: 0.16, // typical speed in AU/day
    scale: 0.01,
  },
  {
    id: 4,
    name: "Vesta",
    semiMajorAxis: 2.36, // in AU
    eccentricity: 0.089, // typical eccentricity for Vesta
    inclination: 7.14, // inclination in degrees
    longitudeOfAscendingNode: 80.18, // degrees
    argumentOfPeriapsis: 154.84, // degrees
    meanAnomaly: 0, // initial mean anomaly
    model: "/models/vesta.glb", // placeholder for model
    speed: 0.23, // typical speed in AU/day
    scale: 0.00003,
  },
];

const PHAs: React.FC<{
  phas: PHASProps;
}> = ({ phas }) => {
  let scene: any;
  if (phas.id > 3) {
    scene = useGLTF(phas.model);
  } else {
  }

  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    const calculatePosition = () => {
      const now = new Date();
      const epoch = new Date(2023, 0, 1); // Starting point for the calculations (replace with actual epoch)
      const daysSinceEpoch =
        (now.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24);

      // Mean motion (n) in radians/day
      const n = Math.sqrt(1 / phas.semiMajorAxis ** 3); // Adjust this based on the central body (e.g., Sun)

      // Mean anomaly (M)
      const M = phas.meanAnomaly + n * daysSinceEpoch;

      // Eccentric anomaly (E) using Newton's method
      let E = M;
      for (let i = 0; i < 10; i++) {
        E = M + phas.eccentricity * Math.sin(E);
      }

      // True anomaly (ν)
      const ν =
        2 *
        Math.atan2(
          Math.sqrt(1 + phas.eccentricity) * Math.sin(E / 2),
          Math.sqrt(1 - phas.eccentricity) * Math.cos(E / 2)
        );

      // Radius (r)
      const r = phas.semiMajorAxis * (1 - phas.eccentricity * Math.cos(E));

      // Position in the orbital plane (x', y')
      const xOrbital = r * Math.cos(ν);
      const yOrbital = r * Math.sin(ν);

      // Convert to 3D coordinates (taking into account inclination, node, and periapsis)
      const iRad = THREE.MathUtils.degToRad(phas.inclination);
      const ΩRad = THREE.MathUtils.degToRad(phas.longitudeOfAscendingNode);
      const ωRad = THREE.MathUtils.degToRad(phas.argumentOfPeriapsis);

      const X =
        xOrbital *
          (Math.cos(ΩRad) * Math.cos(ωRad) -
            Math.sin(ΩRad) * Math.sin(ωRad) * Math.cos(iRad)) -
        yOrbital *
          (Math.cos(ΩRad) * Math.sin(ωRad) +
            Math.sin(ΩRad) * Math.cos(ωRad) * Math.cos(iRad));
      const Y =
        xOrbital *
          (Math.sin(ΩRad) * Math.cos(ωRad) +
            Math.cos(ΩRad) * Math.sin(ωRad) * Math.cos(iRad)) +
        yOrbital *
          (Math.sin(ΩRad) * Math.sin(ωRad) -
            Math.cos(ΩRad) * Math.cos(ωRad) * Math.cos(iRad));
      const Z =
        xOrbital * (Math.sin(ωRad) * Math.sin(iRad)) +
        yOrbital * (Math.cos(ωRad) * Math.sin(iRad));

      setPosition([X, Y, Z]);
    };

    const intervalId = setInterval(calculatePosition, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up
  }, []);

  return (
    <>
      <group position={position} ref={ref}>
        <primitive
          object={scene}
          scale={[phas.scale, phas.scale, phas.scale]}
        />
      </group>
    </>
  );
};

export { PHAs };
