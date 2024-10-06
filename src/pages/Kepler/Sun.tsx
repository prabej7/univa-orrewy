import React, { useRef } from "react";
import { ModelProps } from "@/constants/types/modelProps";
import { useTexture } from "@react-three/drei";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SunProps extends ModelProps {
  position: [number, number, number];
  isKepler: boolean;
}

const Sun: React.FC<SunProps> = ({ position, onClick, isKepler }) => {
  const [sunTexture] = useTexture(["/textures/sun/8k_sun.jpg"]);

  const scaleFactor = 0.5;
  const sizeFactor = 3;
  // Planets' positions, radii, and elliptical parameters
  const planets: {
    name: string;
    semiMajorAxis: number;
    semiMinorAxis: number;
    color: string;
    speed: number;
    texture: string;
    orbitalInclination: number;
    yPush: number;
    position: [number, number, number];
    planetPosition: [number, number, number];
    size: number;
  }[] = [
    {
      name: "Mercury",
      semiMajorAxis: 3.87 * scaleFactor,
      semiMinorAxis: 3.787 * scaleFactor,
      color: "#714E81",
      speed: 0.05,
      texture: "/textures/mercury/mercury.jpg",
      orbitalInclination: 7,
      yPush: 0,
      position: [0.3, 0, 0.4],
      planetPosition: [0, 0, 0],
      size: 0.2 * sizeFactor - 1,
    },
    {
      name: "Venus",
      semiMajorAxis: 7.23 * scaleFactor,
      semiMinorAxis: 7.22 * scaleFactor,
      color: "#815913",
      speed: 0.03,
      texture: "/textures/venus/venus.jpg",
      orbitalInclination: 3.39,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 0.48 * sizeFactor,
    },
    {
      name: "Earth",
      semiMajorAxis: 10 * scaleFactor,
      semiMinorAxis: 9.99 * scaleFactor,
      color: "#005673",
      speed: 0.02,
      texture: "/textures/earth/earth8k.jpg",
      orbitalInclination: 0,
      yPush: 0,
      position: [0.2, 0, 0],
      planetPosition: [0, 0, 0],
      size: 0.5 * scaleFactor,
    },
    {
      name: "Mars",
      semiMajorAxis: 15.24 * scaleFactor,
      semiMinorAxis: 15.17 * scaleFactor,
      color: "#492C18",
      speed: 0.015,
      texture: "/textures/mars/mars.jpg",
      orbitalInclination: 1.85,
      yPush: 0,
      position: [0, 0, -0.5],
      planetPosition: [0, 0, 0],
      size: 0.27 * scaleFactor,
    },
    {
      name: "Jupiter",
      semiMajorAxis: 52.04 * scaleFactor,
      semiMinorAxis: 51.98 * scaleFactor,
      color: "#442C24",
      speed: 0.01,
      texture: "/textures/jupiter/jupiter.jpg",
      orbitalInclination: 1.31,
      yPush: 0,
      position: [0, 0, 1],
      planetPosition: [0, 0, 0],
      size: 5 * sizeFactor,
    },
    {
      name: "Saturn",
      semiMajorAxis: 95.82 * scaleFactor,
      semiMinorAxis: 95.67 * scaleFactor,
      color: "#786D4C",
      speed: 0.008,
      texture: "/textures/saturn/saturn.jpg",
      orbitalInclination: 2.49,
      yPush: 0,
      position: [1, 0, 3],
      planetPosition: [0, 0, 0],
      size: 4.5 * sizeFactor + 4,
    },
    {
      name: "Uranus",
      semiMajorAxis: 192.18 * scaleFactor,
      semiMinorAxis: 191.97 * scaleFactor,
      color: "#4E99A3",
      speed: 0.007,
      texture: "/textures/uranus/uranus.jpg",
      orbitalInclination: 0.77,
      yPush: 0,
      position: [7, 0, 5],
      planetPosition: [0, 0, 0],
      size: 2 * sizeFactor + 4,
    },
    {
      name: "Neptune",
      semiMajorAxis: 301.1 * scaleFactor,
      semiMinorAxis: 301.08 * scaleFactor,
      color: "#5469AA",
      speed: 0.006,
      texture: "/textures/neptune/neptune.jpg",
      orbitalInclination: 1.77,
      yPush: 0,
      position: [-2, 0, -2],
      planetPosition: [0, 0, 0],
      size: 1.9 * sizeFactor,
    },
  ];

  return (
    <group position={position} onClick={(e) => onClick(e.point)}>
      {/* Sun */}
      <mesh>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial map={sunTexture} />
      </mesh>

      {/* Orbits and Planets */}
      {planets.map((planet) => (
        <PlanetOrbit
          isKepler={isKepler}
          key={planet.name}
          planet={{ ...planet, position: [...planet.position] }}
        />
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
    orbitalInclination: number;
    yPush: number;
    position: [number, number, number];
    planetPosition: [number, number, number];
    size: number;
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

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const time = clock.getElapsedTime();
      const meanAnomaly = (time * planet.speed) % (2 * Math.PI); // Regular orbital progress (angular speed)

      // Eccentricity of the ellipse
      const eccentricity = Math.sqrt(
        1 - Math.pow(planet.semiMinorAxis / planet.semiMajorAxis, 2)
      );

      // Calculate eccentric anomaly (Kepler's Equation)
      let eccentricAnomaly = meanAnomaly; // Initial approximation of E
      for (let i = 0; i < 5; i++) {
        eccentricAnomaly -=
          (eccentricAnomaly -
            eccentricity * Math.sin(eccentricAnomaly) -
            meanAnomaly) /
          (1 - eccentricity * Math.cos(eccentricAnomaly));
      }

      // Calculate true anomaly (v) from eccentric anomaly (E)
      const trueAnomaly =
        2 *
        Math.atan2(
          Math.sqrt(1 + eccentricity) * Math.sin(eccentricAnomaly / 2),
          Math.sqrt(1 - eccentricity) * Math.cos(eccentricAnomaly / 2)
        );

      // Calculate distance (r) from Sun based on true anomaly
      const distance =
        planet.semiMajorAxis * (1 - eccentricity * Math.cos(eccentricAnomaly));

      // Parametric position on the orbit
      const x = distance * Math.cos(trueAnomaly); // X position
      const z = distance * Math.sin(trueAnomaly); // Z position

      // Update planet position based on the calculated true anomaly and distance
      planetRef.current.position.set(x, planet.yPush, z);
    }
  });

  const [planetTexture] = useTexture([planet.texture]);

  return (
    <>
      {/* Orbit Line */}
      <Line
        points={orbitPoints}
        position={planet.position}
        rotation={[(Math.PI / 180) * planet.orbitalInclination, 0, 0]}
        color={planet.color}
        lineWidth={1}
      />
      {isKepler && (
        <>
          {/* Planet Sphere */}
          <group
            ref={planetRef}
            position={[
              planet.planetPosition[0],
              planet.yPush,
              planet.planetPosition[2],
            ]}
          >
            <mesh position={[planet.planetPosition[0], 0, 0]}>
              <sphereGeometry args={[planet.size, 32, 32]} />
              <meshStandardMaterial map={planetTexture} />
            </mesh>
          </group>
        </>
      )}
    </>
  );
};

export default Sun;
