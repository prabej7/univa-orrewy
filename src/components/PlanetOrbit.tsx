import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { Line } from "@react-three/drei";
import { useRef } from "react";

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

export default PlanetOrbit