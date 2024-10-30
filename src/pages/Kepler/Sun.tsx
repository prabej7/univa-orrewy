import React from "react";
import * as THREE from 'three';
import PlanetOrbit from "./PlanetsOrbit";
import { Position } from "@/components/Model";

interface SunProps {
  ref?: React.RefObject<THREE.Group>;
  isModels?: boolean;
  position: [number, number, number];
  isKepler: boolean;
  speed: number;

  onLabelClick: (name: string) => void;
  onPlanetClick: (position: Position, name: string) => void;
}

const Sun: React.FC<SunProps> = ({ position, isKepler, speed, onPlanetClick, onLabelClick }) => {


  const scaleFactor = 1;
  const sizeFactor = 3;
  const speedFactor = speed;
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
    staticPosition: [number, number, number];
  }[] = [
      {
        name: "Mercury",
        semiMajorAxis: 3.87 * scaleFactor,
        semiMinorAxis: 3.787 * scaleFactor,
        color: "#714E81",
        speed: 0.4787 * speedFactor,
        texture: "/textures/mercury/mercury.jpg",
        orbitalInclination: 7,
        yPush: 0,
        position: [0.3, 0, 0.4],
        planetPosition: [0.5, 0, 0],
        size: 0.2 * sizeFactor,
        staticPosition: [1.9, 0, 0]
      },
      {
        name: "Venus",
        semiMajorAxis: 7.23 * scaleFactor,
        semiMinorAxis: 7.22 * scaleFactor,
        color: "#815913",
        speed: 0.3502 * speedFactor,
        texture: "/textures/venus/venus.jpg",
        orbitalInclination: 3.39,
        yPush: 0,
        position: [0, 0, 0],
        planetPosition: [0, 0, 0],
        size: 0.48 * sizeFactor,
        staticPosition: [2, 0, 3]
      },
      {
        name: "Earth",
        semiMajorAxis: 10 * scaleFactor,
        semiMinorAxis: 9.99 * scaleFactor,
        color: "#005673",
        speed: 0.2978 * speedFactor,
        texture: "/textures/earth/earth8k.jpg",
        orbitalInclination: 0,
        yPush: 0,
        position: [0.2, 0, 0],
        planetPosition: [0.5, 0, 0],
        size: 0.5 * scaleFactor,
        staticPosition: [0, 0, 5]
      },
      {
        name: "Mars",
        semiMajorAxis: 15.24 * scaleFactor,
        semiMinorAxis: 15.17 * scaleFactor,
        color: "#492C18",
        speed: 0.24077 * speedFactor,
        texture: "/textures/mars/mars.jpg",
        orbitalInclination: 1.85,
        yPush: 0,
        position: [0, 0, -0.5],
        planetPosition: [1.5, 0, 0],
        size: 0.27 * scaleFactor,
        staticPosition: [-3, 0, 6.9]
      },
      {
        name: "Jupiter",
        semiMajorAxis: 52.04 * scaleFactor,
        semiMinorAxis: 51.98 * scaleFactor,
        color: "#442C24",
        speed: 0.1307 * speedFactor,
        texture: "/textures/jupiter/jupiter.jpg",
        orbitalInclination: 1.31,
        yPush: 0,
        position: [0, 0, 1],
        planetPosition: [2, 0, 0],
        size: 0.5 * sizeFactor,
        staticPosition: [-5, 0, 25.3]
      },
      {
        name: "Saturn",
        semiMajorAxis: 95.82 * scaleFactor,
        semiMinorAxis: 95.67 * scaleFactor,
        color: "#786D4C",
        speed: 0.0969 * speedFactor,
        texture: "/textures/saturn/saturn.jpg",
        orbitalInclination: 2.49,
        yPush: 0,
        position: [1, 0, 3],
        planetPosition: [5, 0, -1.5],
        size: 0.45 * sizeFactor,
        staticPosition: [0 - 40, 0, 26]
      },
      {
        name: "Uranus",
        semiMajorAxis: 192.18 * scaleFactor,
        semiMinorAxis: 191.97 * scaleFactor,
        color: "#4E99A3",
        speed: 0.068 * speedFactor,
        texture: "/textures/uranus/uranus.jpg",
        orbitalInclination: 0.77,
        yPush: 0,
        position: [7, 0, 5],
        planetPosition: [9, 0, 0],
        size: .2 * sizeFactor,
        staticPosition: [-10, 0, 95.5]
      },
      {
        name: "Neptune",
        semiMajorAxis: 301.1 * scaleFactor,
        semiMinorAxis: 301.08 * scaleFactor,
        color: "#5469AA",
        speed: 0.0543 * speedFactor,
        texture: "/textures/neptune/neptune.jpg",
        orbitalInclination: 1.77,
        yPush: 0,
        position: [-2, 0, -2],
        planetPosition: [2, 0, -2],
        size: 0.19 * sizeFactor,
        staticPosition: [-30, 0, 147.45]
      },
    ];

  return (
    <group position={position} >

      {planets.map((planet) => (
        <>        <PlanetOrbit
          onPlanetClick={onPlanetClick}
          onLabelClick={onLabelClick}
          isKepler={isKepler}
          key={planet.name}
          planet={{ ...planet, position: [...planet.position] }}

        />

        </>

      ))}
    </group>
  );
};



export default Sun;
