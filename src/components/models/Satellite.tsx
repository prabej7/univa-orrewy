import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { calculateKeplerPosition } from "@/lib/calculations"; // Utility from above

interface Props {
  semiMajorAxis: number; // The semi-major axis of the orbit (in km or meters)
  eccentricity: number; // The orbital eccentricity (unitless)
  inclination: number; // Orbital inclination (in radians)
  lonAscendingNode: number; // Longitude of ascending node (in radians)
  argPeriapsis: number; // Argument of periapsis (in radians)
  orbitalPeriod: number; // Orbital period (in seconds)
  initialAnomaly: number;
  children: React.ReactNode;
  factor: number;
}

const SatelliteInOrbit = ({
  children,
  argPeriapsis,
  eccentricity,
  inclination,
  initialAnomaly,
  lonAscendingNode,
  orbitalPeriod,
  semiMajorAxis,
  factor,
}: Props) => {
  const satelliteRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const trueAnomaly =
      (initialAnomaly + (2 * Math.PI * time) / orbitalPeriod) % (2 * Math.PI);

    // Calculate satellite position using Keplerian orbit
    let position = calculateKeplerPosition(
      semiMajorAxis,
      eccentricity,
      inclination,
      lonAscendingNode,
      argPeriapsis,
      trueAnomaly,
      factor
    );

    if (satelliteRef.current) {
      satelliteRef.current.position.copy(position);
    }
  });
  return <group ref={satelliteRef}>{children}</group>;
};

export default SatelliteInOrbit;
