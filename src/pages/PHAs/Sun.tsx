import React, { useRef } from "react";
import { ModelProps } from "@/constants/types/modelProps";
import { useTexture } from "@react-three/drei";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Earth } from "@/components/models";

interface SunProps extends ModelProps {
  position: [number, number, number];
  isKepler: boolean;
}

const Sun: React.FC<SunProps> = ({ position, onClick, isKepler }) => {
  const [sunTexture] = useTexture(["/textures/sun/8k_sun.jpg"]);

  // Planets' positions, radii, and elliptical parameters
  const planets = [
    {
      name: "Mercury",
      semiMajorAxis: 10,
      semiMinorAxis: 7,
      color: "#714E81",
      speed: 0.05,
      texture: "/textures/mercury/mercury.jpg",
    },
    {
      name: "Venus",
      semiMajorAxis: 15,
      semiMinorAxis: 12,
      color: "#815913",
      speed: 0.03,
      texture: "/textures/venus/venus.jpg",
    },
    {
      name: "Earth",
      semiMajorAxis: 20,
      semiMinorAxis: 17,
      color: "#005673",
      speed: 0.02,
      texture: "/textures/earth/earth8k.jpg",
    },
    {
      name: "Mars",
      semiMajorAxis: 25,
      semiMinorAxis: 21,
      color: "#492C18",
      speed: 0.015,
      texture: "/textures/mars/mars.jpg",
    },
    {
      name: "Jupiter",
      semiMajorAxis: 30,
      semiMinorAxis: 25,
      color: "#442C24",
      speed: 0.01,
      texture: "/textures/jupiter/jupiter.jpg",
    },
    {
      name: "Saturn",
      semiMajorAxis: 35,
      semiMinorAxis: 28,
      color: "#786D4C",
      speed: 0.008,
      texture: "/textures/saturn/saturn.jpg",
    },
    {
      name: "Uranus",
      semiMajorAxis: 40,
      semiMinorAxis: 33,
      color: "#4E99A3",
      speed: 0.007,
      texture: "/textures/uranus/uranus.jpg",
    },
    {
      name: "Neptune",
      semiMajorAxis: 45,
      semiMinorAxis: 37,
      color: "#5469AA",
      speed: 0.006,
      texture: "/textures/neptune/neptune.jpg",
    },
  ];

  return (
    <group position={position} onClick={(e) => onClick(e.point)}>
      {/* Sun */}
      <mesh>
        <icosahedronGeometry args={[3, 12]} />
        <meshStandardMaterial map={sunTexture} />
      </mesh>

      {/* Orbits and Planets */}
      {planets.map((planet) => (
        <PlanetOrbit isKepler={isKepler} key={planet.name} planet={planet} />
      ))}
    </group>
  );
};

const PlanetOrbit = ({
  planet,
  isKepler,
}: {
  planet: {
    name: string;
    semiMajorAxis: number;
    semiMinorAxis: number;
    color: string;
    speed: number;
    texture: string;
  };
  isKepler: boolean;
}) => {
  const planetRef = useRef<THREE.Group>(null);

  // Create elliptical orbit points
  const segments = 150; // Number of segments for the ellipse
  const orbitPoints: [number, number, number][] = Array.from({
    length: segments + 1,
  }).map((_, i) => {
    const angle = (i / segments) * 2 * Math.PI;
    return [
      planet.semiMajorAxis * Math.cos(angle), // X-coord
      0, // Flat on the Y=0 plane
      planet.semiMinorAxis * Math.sin(angle), // Z-coord
    ] as [number, number, number];
  });

  // Kepler's second law to dynamically adjust the planet's speed
  useFrame(({ clock }) => {
    if (planetRef.current) {
      const time = clock.getElapsedTime();
      const angle = time * planet.speed;

      // Calculate position using parametric equations of an ellipse
      const x = planet.semiMajorAxis * Math.cos(angle);
      const z = planet.semiMinorAxis * Math.sin(angle);

      // Update planet position
      planetRef.current.position.set(x, 0, z);
    }
  });

  const [planetTexture] = useTexture([planet.texture]);
  return (
    <>
      {/* Orbit Line */}
      <Line points={orbitPoints} color={planet.color} lineWidth={1} />
      {isKepler && (
        <>
          {/* Planet Sphere */}
          {planet.name == "Earth" || planet.name == "Saturn" ? (
            <>
              {planet.name == "Earth" && (
                <group ref={planetRef} position={[0, 0, 0]}>
                  <Earth isModels={false} onClick={() => {}} />
                </group>
              )}
              {planet.name == "Saturn" && (
                <group ref={planetRef} position={[0, 0, 0]}>
                  <mesh>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial map={planetTexture} />
                  </mesh>
                </group>
              )}
            </>
          ) : (
            <group ref={planetRef} position={[0, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial map={planetTexture} />
              </mesh>
            </group>
          )}
        </>
      )}
    </>
  );
};

export default Sun;
