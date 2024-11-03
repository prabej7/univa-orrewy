import Model, { Position } from "@/components/Model";
import { Line, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import PlanetLabel from "./PlanetLabel";
import Saturn from "@/components/Saturn";
import { Earth } from "@/components/models";

const PlanetOrbit = ({
  planet,
  isKepler,
  onPlanetClick,
  onLabelClick
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
    size: number; // Added size property
    staticPosition: [number, number, number]; // Fixed typo: 'staticPostion' to 'staticPosition'

  };
  isKepler: boolean;
  onPlanetClick: (position: Position, name: string) => void; onLabelClick: (name: string) => void;
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
  

  // Initial planet placement on the orbit (only for non-Kepler mode)
  useEffect(() => {
    if (!isKepler && planetRef.current) {
      planetRef.current.position.set(
        planet.staticPosition[0],
        planet.staticPosition[1],
        planet.staticPosition[2]
      );
    }
  }, [isKepler, planet]);

  // Kepler's Second Law: Adjust speed based on position (only when isKepler is true)
  useFrame(({ clock }) => {
    if (isKepler && planetRef.current) {
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

      // Update the planet's position when in Kepler mode
      planetRef.current.position.set(x, planet.yPush, z);
    }
  });
  const [sunTexture] = useTexture(["/textures/sun/8k_sun.jpg"]);
  return (
    <>
      <PlanetLabel onClick={() => { }}
        fontSize={2}
        position={[0, 3, 0]} // Label positioned above the planet
        text="Sun" color="yellow" />
      <mesh onClick={(e) => {
        onPlanetClick(e.point, "Sun")
      }} >
        <icosahedronGeometry args={[2, 12]} />
        <meshStandardMaterial map={sunTexture} />
      </mesh>

      <group position={planet.position} 
                 rotation={[(Math.PI / 180) * planet.orbitalInclination, 0, 0]}
      >

        <Line
          points={orbitPoints}
          position={[0, 0, 0]}
          color={planet.color}
          lineWidth={1}

        />

        {isKepler ? (
          <group ref={planetRef} >
            {planet.name == "Saturn" || planet.name == "Earth" ? <>
              {planet.name == "Saturn" && <Saturn name={planet.name} ringSize={2.5} onClick={(position) => { onPlanetClick(position, "Saturn") }} args={[planet.size, 12]} position={planet.planetPosition} texture={planet.texture} />}
              {planet.name == "Earth" && <Earth position={planet.planetPosition}  onClick={(position) => {
                onPlanetClick(position, "Earth")
              }} />}
            </> : <Model
              texture={planet.texture}
              position={planet.planetPosition}
              name={planet.name}
              onClick={onPlanetClick}
              args={[planet.size, 12]}
            />}

            <PlanetLabel
              onClick={() => { }}
              fontSize={2}
              position={[0, 2, 0]} // Label positioned above the planet
              text={planet.name}
              color={planet.color}
            />
          </group>
        ) : (
          <group ref={planetRef}>
            {planet.name == "Saturn" || planet.name == "Earth" ? <>
              {planet.name == "Saturn" && <Saturn name={planet.name} ringSize={2.5} onClick={(position) => { onPlanetClick(position, "Saturn") }} args={[planet.size, 12]} position={planet.staticPosition} texture={planet.texture} />}
              {planet.name == "Earth" && <Earth position={planet.staticPosition} isModels onClick={(position) => {
                onPlanetClick(position, "Earth")
              }} />}
            </> : <Model
              texture={planet.texture}
              position={planet.staticPosition}
              name={planet.name}
              onClick={onPlanetClick}
              args={[planet.size, 12]}
            />}

            <PlanetLabel
              onClick={onLabelClick}
              fontSize={2}
              position={[planet.staticPosition[0], 2, planet.staticPosition[2]]}
              text={planet.name}
              color={planet.color}
            />
          </group>
        )}
        <pointLight position={[0, 0, 0]} intensity={2} />

      </group>
    </>
  );
};

export default PlanetOrbit;
