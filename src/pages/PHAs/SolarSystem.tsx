import Model, { Position } from "@/components/Model";
import Sun from "./Sun";

import * as THREE from "three";
import React, { useRef } from "react";
import Earth from "./Earth";
import Saturn from "@/components/Saturn";

interface Props {
  onClick: (position: Position, name: string) => void;
  isKepler: boolean;
}

const SolarSystemWithKepler: React.FC<Props> = ({ onClick, isKepler }) => {
  // Define the planets' positions and radii again here
  const sunRef = useRef<THREE.Group>(null);
  const planets = [
    {
      name: "Mercury",
      radius: 1.2 * 5,
      texture: "/textures/mercury/mercury.jpg",
      yPush: 0,
    },
    {
      name: "Venus",
      radius: 1.8 * 5.5,
      texture: "/textures/venus/venus.jpg",
      yPush: 0,
    },
    {
      name: "Mars",
      radius: 3.2 * 6,
      texture: "/textures/mars/mars.jpg",
      yPush: 0,
    },
    {
      name: "Jupiter",
      radius: 4.2 * 6,
      texture: "/textures/jupiter/jupiter.jpg",
      yPush: 0,
    },
    {
      name: "Saturn",
      radius: 5.4 * 6,
      texture: "/textures/saturn/saturn.jpg",
      yPush: 0,
    },
    {
      name: "Uranus",
      radius: 7.0 * 6,
      texture: "/textures/uranus/uranus.jpg",
      yPush: 0,
    },
    {
      name: "Neptune",
      radius: 8.0 * 6,
      texture: "/textures/neptune/neptune.jpg",
      yPush: 0,
    },
  ];
  //Push in Z direction
  const push = [5.5, 3, 2, 5.5, 0, 8.7, 9.7, 9];

  return (
    <>
      {/* Sun - Central Light Source */}
      <Sun
        isKepler={isKepler}
        ref={sunRef}
        onClick={(position) => {
          onClick(position, "Sun");
        }}
        position={[0, 0, 0]}
      />

      {/* Add a bright point light at the Sun's position */}
      <pointLight
        position={[0, 0, 0]}
        intensity={1000} // Increased intensity to simulate the brightness of the Sun
        distance={500} // Control how far the light spreads
        decay={2} // Natural decay of light intensity
      />

      {/* Planets */}
      {!isKepler && (
        <>
          {planets.map((planet, index) => {
            const angle = (index / planets.length) * 2 * Math.PI; // Spread planets evenly around the Sun
            const x = planet.radius * Math.cos(angle);
            const z = planet.radius * Math.sin(angle);

            return (
              <>
                {planet.name == "Saturn" ? (
                  <Saturn
                    onClick={(position) => {
                      onClick(position, "Saturn");
                    }}
                    key={planet.name}
                    name={planet.name}
                    texture={planet.texture}
                    args={[1, 12]}
                    position={[x, planet.yPush, z + -1]}
                  />
                ) : (
                  <Model
                    onClick={(position) => {
                      onClick(position, planet.name);
                    }}
                    key={planet.name}
                    name={planet.name}
                    texture={planet.texture}
                    args={[1, 12]}
                    position={[x, planet.yPush, z + push[index]]}
                  />
                )}
              </>
            );
          })}
        </>
      )}

      {/* Earth specific instance */}
      {!isKepler && (
        <Earth
          isModels={false}
          onClick={(position) => onClick(position, "Earth")}
          position={[
            2.5 * 5.5 * Math.cos((2 / planets.length) * 2 * Math.PI),
            0,
            3.1 * 5.5 * Math.sin((2 / planets.length) * 2 * Math.PI),
          ]}
        />
      )}

      <ambientLight intensity={0.5} />

      {/* <directionalLight position={[10, 0, -10]} intensity={1.5} castShadow />  */}
    </>
  );
};

export default SolarSystemWithKepler;
