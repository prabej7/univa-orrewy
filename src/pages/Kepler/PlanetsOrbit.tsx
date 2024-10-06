import { Line, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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

  // Kepler's Second Law: Adjust speed based on position
  useFrame(({ clock }) => {
    if (planetRef.current) {
      const time = clock.getElapsedTime();
      const meanAnomaly = (time * planet.speed) % (2 * Math.PI); // Regular orbital progress (angular speed)

      // Calculate eccentric anomaly using Newton's method
      const eccentricity = Math.sqrt(
        1 - Math.pow(planet.semiMinorAxis / planet.semiMajorAxis, 2)
      );
      let eccentricAnomaly = meanAnomaly; // Start with mean anomaly as approximation
      for (let i = 0; i < 5; i++) {
        eccentricAnomaly -=
          (eccentricAnomaly -
            eccentricity * Math.sin(eccentricAnomaly) -
            meanAnomaly) /
          (1 - eccentricity * Math.cos(eccentricAnomaly));
      }

      // Calculate position using parametric equations with the eccentric anomaly
      const x =
        planet.semiMajorAxis * (Math.cos(eccentricAnomaly) - eccentricity);
      const z =
        planet.semiMinorAxis *
        Math.sqrt(1 - eccentricity * eccentricity) *
        Math.sin(eccentricAnomaly);

      // Update planet position
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
            <mesh>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial map={planetTexture} />
            </mesh>
          </group>
        </>
      )}
    </>
  );
};

export default PlanetOrbit;
