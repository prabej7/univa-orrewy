import { ModelProps } from "@/constants/types/modelProps";
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import SatelliteInOrbit from "./Satellite";

const satelliteOrbits = {
  iss: {
    semiMajorAxis: 6771,
    eccentricity: 0.0001,
    inclination: THREE.MathUtils.degToRad(51.64),
    lonAscendingNode: THREE.MathUtils.degToRad(0),
    argPeriapsis: THREE.MathUtils.degToRad(0),
    orbitalPeriod: 5554, // seconds
    initialAnomaly: 0,
  },
  hubble: {
    semiMajorAxis: 6930,
    eccentricity: 0.0001,
    inclination: THREE.MathUtils.degToRad(28.5),
    lonAscendingNode: THREE.MathUtils.degToRad(0),
    argPeriapsis: THREE.MathUtils.degToRad(0),
    orbitalPeriod: 5700, // seconds
    initialAnomaly: 0,
  },
  terra: {
    semiMajorAxis: 7070,
    eccentricity: 0.0003,
    inclination: THREE.MathUtils.degToRad(98.2),
    lonAscendingNode: THREE.MathUtils.degToRad(0),
    argPeriapsis: THREE.MathUtils.degToRad(0),
    orbitalPeriod: 6030, // seconds
    initialAnomaly: 0,
  },
  acrimsat: {
    semiMajorAxis: 7200,
    eccentricity: 0.001,
    inclination: THREE.MathUtils.degToRad(98.3),
    lonAscendingNode: THREE.MathUtils.degToRad(0),
    argPeriapsis: THREE.MathUtils.degToRad(0),
    orbitalPeriod: 6130, // seconds
    initialAnomaly: 0,
  },
  jason: {
    semiMajorAxis: 7850,
    eccentricity: 0.0012,
    inclination: THREE.MathUtils.degToRad(66),
    lonAscendingNode: THREE.MathUtils.degToRad(0),
    argPeriapsis: THREE.MathUtils.degToRad(0),
    orbitalPeriod: 7200, // seconds
    initialAnomaly: 0,
  },
  tdrss: {
    semiMajorAxis: 42164, // Approximate for geosynchronous orbit
    eccentricity: 0.0001,
    inclination: THREE.MathUtils.degToRad(0),
    lonAscendingNode: THREE.MathUtils.degToRad(0),
    argPeriapsis: THREE.MathUtils.degToRad(0),
    orbitalPeriod: 86164, // seconds (geosynchronous)
    initialAnomaly: 0,
  },
};

const EarthMesh: React.FC<ModelProps> = ({ position, onClick, isModels }) => {
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
        <icosahedronGeometry args={[0.5, 16]} />
        <meshStandardMaterial map={earthDay} flatShading />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.501, 16]} />
        <meshStandardMaterial
          map={earthNight}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.504, 16]} />
        <meshStandardMaterial
          map={earthCloud}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.506, 16]} />
        <meshStandardMaterial
          map={earthSpec}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.04}
        />
      </mesh>
      <SatelliteInOrbit
        semiMajorAxis={7.0} // example semi-major axis in units of Earth radii
        eccentricity={0.001} // example eccentricity (almost circular)
        inclination={0.1} // inclination in radians
        lonAscendingNode={1.0} // example value in radians
        argPeriapsis={0.5} // example value in radians
        orbitalPeriod={5400} // in seconds (1.5 hours for a low Earth orbit)
        initialAnomaly={0}
        factor={0.01}
      >
        <mesh position={[0.9, 0, 0]} scale={[0.272, 0.272, 0.272]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial map={moonTexture} />
        </mesh>
      </SatelliteInOrbit>

      {hovered && (
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1 * 1.2, 16]} />
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

          <group position={[0, 0, 0.8]} onClick={() => handleClick("ISS")}>
            <primitive object={issScene} scale={[0.001, 0.001, 0.001]} />
          </group>

          <group position={[1, 0, 0.155]} onClick={() => handleClick("Hubble")}>
            <primitive object={hubbleScene} scale={[0.005, 0.005, 0.005]} />
          </group>
          <group position={[-1, 1, 0.16]} onClick={() => handleClick("Terra")}>
            <primitive
              object={terraScene}
              scale={[0.000005, 0.000005, 0.000005]}
            />
          </group>
          <group
            position={[1, -1, 0.16]}
            onClick={() => handleClick("ACRIMSAT")}
          >
            <primitive
              object={acrimsatScene}
              scale={[0.00001, 0.00001, 0.00001]}
            />
          </group>
          <SatelliteInOrbit {...satelliteOrbits.jason} factor={0}>
            <group
              position={[-0.5, 0.5, 0.166]}
              onClick={() => handleClick("Jason Satellite")}
            >
              <primitive
                object={landsatScene}
                scale={[0.0002, 0.0002, 0.0002]}
              />
            </group>
          </SatelliteInOrbit>

          {/* Halley Comet */}

          <group rotation={[3, 0, 0]} position={[-1.5, 0, 0]}>
            <group
              position={[-3, 2, -2]}
              onClick={() => handleClick("Halley's Comet")}
            >
              <mesh scale={[0.05, 0.05, 0.05]}>
                <primitive object={halley} />
                <meshStandardMaterial color="grey" />
              </mesh>
            </group>

            <group
              position={[-0.8, 0.5, 0.8]}
              onClick={() => handleClick("Toutatis")}
            >
              <mesh scale={[0.03, 0.03, 0.03]}>
                <primitive object={toutatis} />
                <meshStandardMaterial color="grey" />
              </mesh>
            </group>

            <group
              position={[1.2, -0.3, 1.2]}
              onClick={() => handleClick("Mithra")}
            >
              <mesh scale={[0.03, 0.03, 0.03]}>
                <primitive object={mithra} />
                <meshStandardMaterial color="grey" />
              </mesh>
            </group>

            <group
              position={[0.9, 0.7, 0.9]}
              onClick={() => handleClick("Golevka")}
            >
              <mesh scale={[0.03, 0.03, 0.03]}>
                <primitive object={golevka} />
                <meshStandardMaterial color="grey" />
              </mesh>
            </group>

            <group
              position={[-0.7, -0.6, 1]}
              onClick={() => handleClick("Geographos")}
            >
              <mesh scale={[0.03, 0.03, 0.03]}>
                <primitive object={geographos} />
                <meshStandardMaterial color="grey" />
              </mesh>
            </group>

            <group
              position={[0.6, 0.8, 0.7]}
              onClick={() => handleClick("Bennu")}
            >
              <mesh scale={[0.1, 0.1, 0.1]}>
                <primitive object={bogusBennu} />
                <meshStandardMaterial color="grey" />
              </mesh>
            </group>
          </group>

          <mesh
            position={[0, 0, 1.1]}
            scale={[0.007, 0.007, 0.007]}
            onClick={() => handleClick("TDRS")}
          >
            <primitive object={tdrssScene} />
            <meshStandardMaterial color="grey" />
          </mesh>
        </>
      )}
    </group>
  );
};

export default EarthMesh;
