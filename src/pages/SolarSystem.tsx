import Model, { Position } from "@/components/Model";
import { Earth, Sun } from "@/components/models";
import Saturn from "@/components/Saturn";

import React from "react";

interface Props {
  onClick: (position: Position, name: string) => void;
}

const SolarSystem: React.FC<Props> = ({ onClick }) => {
  // Define the planets' positions and radii again here
  
  const planets = [
    {
      name: "Mercury",
      radius: 1.2 * 5,
      texture: "/textures/mercury/mercury.jpg",
    },
    { name: "Venus", radius: 1.8 * 5.5, texture: "/textures/venus/venus.jpg" },
    { name: "Mars", radius: 3.2 * 6, texture: "/textures/mars/mars.jpg" },
    {
      name: "Jupiter",
      radius: 4.2 * 6,
      texture: "/textures/jupiter/jupiter.jpg",
    },
    { name: "Saturn", radius: 5.4 * 6, texture: "/textures/saturn/saturn.jpg" },
    { name: "Uranus", radius: 7.0 * 6, texture: "/textures/uranus/uranus.jpg" },
    {
      name: "Neptune",
      radius: 8.0 * 6,
      texture: "/textures/neptune/neptune.jpg",
    },
  ];

  return (
    <>
      {/* Sun - Central Light Source */}
      <Sun
        onClick={(position) => {
          onClick(position, "Sun");
        }}
        position={[0, 0, 0]}
      />
      
      {/* Add a bright point light at the Sun's position */}
      <pointLight
        position={[0, 0, 0]}
        intensity={10} // Increased intensity to simulate the brightness of the Sun
        distance={500} // Control how far the light spreads
        decay={2} // Natural decay of light intensity
      />

      {/* Planets */}
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
                position={[x, 0, z]}
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
                position={[x, 0, z]}
              />
            )}
          </>
        );
      })}

      {/* Earth specific instance */}
      <Earth
        onClick={(position) => onClick(position, "Earth")}
        position={[
          2.5 * 5.5 * Math.cos((2 / planets.length) * 2 * Math.PI),
          0,
          2.5 * 5.5 * Math.sin((2 / planets.length) * 2 * Math.PI),
        ]}
      />

      {/* Ambient light to give soft lighting across the scene */}
      <ambientLight intensity={0.2} />

      {/* Optional directional light for additional sunlight effect */}
      <directionalLight position={[10, 0, -10]} intensity={1.5} castShadow />
    </>
  );
};

export default SolarSystem;
