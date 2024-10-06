import React, { useRef } from "react";
import { ModelProps } from "@/constants/types/modelProps";
import { useTexture } from "@react-three/drei";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Saturn from "@/components/Saturn";

interface SunProps extends ModelProps {
  position: [number, number, number];
  isKepler: boolean;
  speed: number;
}

const TestSun: React.FC<SunProps> = ({
  position,
  onClick,
  isKepler,
  speed,
}) => {
  const [sunTexture] = useTexture(["/textures/sun/8k_sun.jpg"]);

  const scaleFactor = 1;
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
      speed: 0.05 * speed,
      texture: "/textures/mercury/mercury.jpg",
      orbitalInclination: 7,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 0.2 * sizeFactor - 1, // Mercury's relative radius
    },
    {
      name: "Venus",
      semiMajorAxis: 7.23 * scaleFactor,
      semiMinorAxis: 7.22 * scaleFactor,
      color: "#815913",
      speed: 0.03 * speed,
      texture: "/textures/venus/venus.jpg",
      orbitalInclination: 3.39,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 0.48 * sizeFactor, // Venus' relative radius
    },
    {
      name: "Earth",
      semiMajorAxis: 10 * scaleFactor,
      semiMinorAxis: 9.99 * scaleFactor,
      color: "#005673",
      speed: 0.02 * speed,
      texture: "/textures/earth/earth8k.jpg",
      orbitalInclination: 0,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 0.5 * sizeFactor, // Earth's relative radius
    },
    {
      name: "Mars",
      semiMajorAxis: 15.25 * scaleFactor,
      semiMinorAxis: 15.17 * scaleFactor,
      color: "#492C18",
      speed: 0.015 * speed,
      texture: "/textures/mars/mars.jpg",
      orbitalInclination: 1.85,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 0.27 * sizeFactor + 1, // Mars' relative radius
    },
    {
      name: "Jupiter",
      semiMajorAxis: 52.04 * scaleFactor,
      semiMinorAxis: 51.98 * scaleFactor,
      color: "#442C24",
      speed: 0.01 * speed,
      texture: "/textures/jupiter/jupiter.jpg",
      orbitalInclination: 1.31,
      yPush: 0,
      position: [0, 0, 1],
      planetPosition: [0, 0, 0],
      size: 5 * sizeFactor, // Jupiter's relative radius
    },
    {
      name: "Saturn",
      semiMajorAxis: 95.82 * scaleFactor,
      semiMinorAxis: 95.67 * scaleFactor,
      color: "#786D4C",
      speed: 0.008 * speed,
      texture: "/textures/saturn/saturn.jpg",
      orbitalInclination: 2.49,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 4.5 * sizeFactor + 4, // Saturn's relative radius
    },
    {
      name: "Uranus",
      semiMajorAxis: 192.18 * scaleFactor,
      semiMinorAxis: 191.97 * scaleFactor,
      color: "#4E99A3",
      speed: 0.007 * speed,
      texture: "/textures/uranus/uranus.jpg",
      orbitalInclination: 0.77,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 2 * sizeFactor + 4, // Uranus' relative radius
    },
    {
      name: "Neptune",
      semiMajorAxis: 301.1 * scaleFactor,
      semiMinorAxis: 301.08 * scaleFactor,
      color: "#5469AA",
      speed: 0.006 * speed,
      texture: "/textures/neptune/neptune.jpg",
      orbitalInclination: 1.77,
      yPush: 0,
      position: [0, 0, 0],
      planetPosition: [0, 0, 0],
      size: 1.9 * sizeFactor, // Neptune's relative radius
    },
  ];

  return (
    <>
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
    </>
  );
};

const PlanetOrbit = ({
  planet,
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

      // Calculate the planet's distance from the focus (r)
      const distance =
        planet.semiMajorAxis * (1 - eccentricity * Math.cos(eccentricAnomaly));

      // Set planet's 3D position along the orbit
      planetRef.current.position.set(
        distance * Math.cos(trueAnomaly) + 0.5, // X position in orbit
        planet.yPush, // Y position based on inclination
        distance * Math.sin(trueAnomaly) // Z position in orbit
      );
    }
  });

  return (
    <>
      {/* Orbit Path */}
      <group>
        <Line
          points={orbitPoints}
          color={planet.color}
          lineWidth={0.5}
          rotation={[(Math.PI / 180) * planet.orbitalInclination, 0, 0]}
        />

        {/* Planet Mesh */}
        <group ref={planetRef}>
          {planet.name == "Saturn" ? (
            <>
              <Saturn
                onClick={() => {}}
                ringSize={15}
                name="Saturn"
                args={[10, 16]}
                position={planet.position}
                texture={planet.texture}
              />
              <mesh rotation={[Math.PI / 2, 0, 0]} position={planet.position}>
                <meshBasicMaterial
                  color="#A49B72"
                  side={THREE.DoubleSide}
                  transparent={true}
                  opacity={0.7}
                  map={useTexture("/textures/saturn/ring.png")}
                />
              </mesh>
            </>
          ) : (
            <>
              <mesh rotation={[Math.PI / 4, 0, 0]}>
                <sphereGeometry args={[planet.size, 32, 32]} />
                <meshStandardMaterial
                  color={planet.color}
                  map={useTexture(planet.texture)}
                />
              </mesh>
            </>
          )}
        </group>
      </group>
    </>
  );
};

export default TestSun;
