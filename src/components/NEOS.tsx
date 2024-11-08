import PlanetLabel from '@/pages/Kepler/PlanetLabel';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

type OrbitalElements = {
    a: string;  // Semi-major axis
    e: number;  // Eccentricity
    i: number;  // Inclination
    Ω: number;  // Longitude of ascending node
    ω: number;  // Argument of periapsis
    T: number;  // Time of perihelion passage
};

interface NearEarthObjectProps {
    orbitalElements: OrbitalElements;
    name: string;
    position?: [number, number, number],
    speed: number
}



const NearEarthObject: React.FC<NearEarthObjectProps> = ({ orbitalElements, name, speed }) => {
    const GM = 1.32712440018e20;  // Gravitational parameter for the Sun in m^3/s^2
    const TIME_SCALE = speed * 10000 || 100;  // Adjusts time to speed up motion
    const SCALE_DOWN = 1e9;  // Scale down positions to fit into view
    const Y_OFFSET = -5;
    const meshRef = useRef<THREE.Group>(null);
    const orbitRef = useRef<THREE.Line>(null);
    const pointsRef = useRef<THREE.Vector3[]>([]);

    useFrame(({ clock }) => {
        if (!meshRef.current || !orbitRef.current) return;

        const timeElapsed = clock.getElapsedTime() * TIME_SCALE;  // Scale time to speed up animation

        // Calculate Mean Anomaly
        const n = Math.sqrt(GM / Math.pow(Number(orbitalElements.a), 3));
        const M = n * (timeElapsed + orbitalElements.T);

        // Solve Kepler's Equation for E
        let E = M;
        for (let i = 0; i < 10; i++) {
            E = M + orbitalElements.e * Math.sin(E);
        }

        // Calculate True Anomaly
        const ν = 2 * Math.atan2(
            Math.sqrt(1 + orbitalElements.e) * Math.sin(E / 2),
            Math.sqrt(1 - orbitalElements.e) * Math.cos(E / 2)
        );

        // Calculate Heliocentric Coordinates
        const r = Number(orbitalElements.a) * (1 - orbitalElements.e * Math.cos(E));
        const x = r * (Math.cos(orbitalElements.Ω) * Math.cos(orbitalElements.ω + ν) -
            Math.sin(orbitalElements.Ω) * Math.sin(orbitalElements.ω + ν) * Math.cos(orbitalElements.i)) / SCALE_DOWN;
        const y = (r * (Math.sin(orbitalElements.Ω) * Math.cos(orbitalElements.ω + ν) +
            Math.cos(orbitalElements.Ω) * Math.sin(orbitalElements.ω + ν) * Math.cos(orbitalElements.i)) / SCALE_DOWN) + Y_OFFSET;
        const z = r * (Math.sin(orbitalElements.i) * Math.sin(orbitalElements.ω + ν)) / SCALE_DOWN;

        // Update the mesh position
        meshRef.current.position.set(x, y, z);

        // Update orbit points
        updateOrbitPoints();
    });

    const updateOrbitPoints = () => {
        const orbitPoints = [];
        const numPoints = 100; // Number of points to represent the orbit
        const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(Number(orbitalElements.a), 3) / GM);

        for (let j = 0; j <= numPoints; j++) {
            const time = (j / numPoints) * orbitalPeriod; // Scale time for the orbit
            const n = Math.sqrt(GM / Math.pow(Number(orbitalElements.a), 3));
            const M = n * (time + orbitalElements.T);

            let E = M;
            for (let i = 0; i < 10; i++) {
                E = M + orbitalElements.e * Math.sin(E);
            }

            const ν = 2 * Math.atan2(
                Math.sqrt(1 + orbitalElements.e) * Math.sin(E / 2),
                Math.sqrt(1 - orbitalElements.e) * Math.cos(E / 2)
            );

            const r = Number(orbitalElements.a) * (1 - orbitalElements.e * Math.cos(E));
            const x = r * (Math.cos(orbitalElements.Ω) * Math.cos(orbitalElements.ω + ν) -
                Math.sin(orbitalElements.Ω) * Math.sin(orbitalElements.ω + ν) * Math.cos(orbitalElements.i)) / SCALE_DOWN;
            const y = (r * (Math.sin(orbitalElements.Ω) * Math.cos(orbitalElements.ω + ν) +
                Math.cos(orbitalElements.Ω) * Math.sin(orbitalElements.ω + ν) * Math.cos(orbitalElements.i)) / SCALE_DOWN) + Y_OFFSET;
            const z = r * (Math.sin(orbitalElements.i) * Math.sin(orbitalElements.ω + ν)) / SCALE_DOWN;

            orbitPoints.push(new THREE.Vector3(x, y, z));
        }

        pointsRef.current = orbitPoints;

        const geometry = new THREE.BufferGeometry().setFromPoints(pointsRef.current);
        if (orbitRef.current) {
            orbitRef.current.geometry.dispose();
            orbitRef.current.geometry = geometry;
        }
    };

    return (
        <>
            <group key={name} rotation={[Math.PI / 2, 0, 0]}>

                {/* Moving Near-Earth Object */}
                <group ref={meshRef} rotation={[Math.PI / -2, 0, 0]}  >
                    {/* <mesh position={[0, 0, 0]}>
                        <icosahedronGeometry args={[1, 12]} />
                        <meshStandardMaterial color="hotpink" emissive="pink" />
                    </mesh> */}
                    <PlanetLabel color='#0074ba' onClick={() => { }} text={name} position={[0, 0, 0]} />
                </group>


                {/* Orbit Line */}

                <line
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ref={orbitRef as any}
                >
                    <bufferGeometry />
                    <lineBasicMaterial color="#ffffff" transparent={true} opacity={0.3} />
                </line>
            </group>


        </>
    );
};

export default NearEarthObject;
