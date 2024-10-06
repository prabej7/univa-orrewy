import Model, { Position } from "@/components/Model";
import Sun from "./Sun";
import * as THREE from "three";
import React, { useRef } from "react";
import Earth from "../../components/models/Earth";
import Saturn from "@/components/Saturn";
import { useFrame, useThree } from "@react-three/fiber";
import PlanetLabel from "./PlanetLabel";
import TestSun from "./Test";

interface Props {
  onClick: (position: Position, name: string) => void;
  isKepler: boolean;
  onLabelClick: (name: string) => void;
}

const SolarSystemWithKepler: React.FC<Props> = ({
  onClick,
  isKepler,
  onLabelClick,
}) => {
  const { camera } = useThree();
  const textRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (textRef.current) {
      // Calculate the distance between the camera and the text position
      const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

      // Adjust the scale inversely to the distance, keeping the size consistent
      const scale = distance * 0.01; // Adjust 0.01 as needed for fine-tuning
      textRef.current.scale.set(scale, scale, scale);

      // Ensure text always faces the camera (billboard effect)
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });
  // Define the planets' positions and radii again here
  const sunRef = useRef<THREE.Group>(null);
  const sizeFactor = 1;

  const planets = [
    {
      name: "Mercury",
      radius: 1.2 * 5,
      texture: "/textures/mercury/mercury.jpg",
      yPush: -0.17,
      position: [1.5, 0, -3.6],
      size: 0.2 * sizeFactor - 1,
    },
    {
      name: "Venus",
      radius: 1.8 * 5.5,
      texture: "/textures/venus/venus.jpg",
      yPush: 0,
      position: [3.5, 0, -4],
      size: 0.48 * sizeFactor,
    },
    {
      name: "Mars",
      radius: 3.2 * 6,
      texture: "/textures/mars/mars.jpg",
      yPush: 0,
      position: [-7.6, 0, -6],
      size: 0.27 * sizeFactor,
    },
    {
      name: "Jupiter",
      radius: 4.2 * 6,
      texture: "/textures/jupiter/jupiter.jpg",
      yPush: 0,
      position: [26, 0, -5],
      size: 5 * sizeFactor,
    },
    {
      name: "Saturn",
      radius: 5.4 * 6,
      texture: "/textures/saturn/saturn.jpg",
      yPush: -1.2,
      position: [40.7, 0, 30],
      size: 4.5 * sizeFactor + 4,
    },
    {
      name: "Uranus",
      radius: 7.0 * 6,
      texture: "/textures/uranus/uranus.jpg",
      yPush: -1.3,
      position: [0, 0, 92],
      size: 2 * sizeFactor + 4,
    },
    {
      name: "Neptune",
      radius: 8.0 * 6,
      texture: "/textures/neptune/neptune.jpg",
      yPush: 1 - 1.36,
      position: [-152 - 0.1, 0, 0],
      size: 1.9 * sizeFactor,
    },
  ];
  //Push in Z direction
  const push = [5.5, 3, 5, 5.5, 0, 8.7, 9.7, 9];
  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });
  return (
    <>
      {/* Sun - Central Light Source */}
      {!isKepler ? (
        <Sun
          isKepler={isKepler}
          ref={sunRef}
          onClick={(position) => {
            onClick(position, "Sun");
          }}
          position={[0, 0, 0]}
        />
      ) : (
        <TestSun
          isKepler={isKepler}
          ref={sunRef}
          onClick={(position) => {
            onClick(position, "Sun");
          }}
          position={[0, 0, 0]}
        />
      )}

      <PlanetLabel text="Sun" onClick={onLabelClick} position={[0, 0, 0]} />
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
            // const angle = (index / planets.length) * 2 * Math.PI; // Spread planets evenly around the Sun
            // const x = planet.radius * Math.cos(angle);
            // const z = planet.radius * Math.sin(angle);

            return (
              <>
                {planet.name == "Saturn" ? (
                  <>
                    <Saturn
                      ringSize={15}
                      onClick={(position) => {
                        onClick(position, "Saturn");
                      }}
                      key={planet.name}
                      name={planet.name}
                      texture={planet.texture}
                      args={[planet.size, 12]}
                      position={[
                        planet.position[0],
                        planet.yPush,
                        planet.position[2] + -1,
                      ]}
                    />
                    <PlanetLabel
                      text={planet.name}
                      position={[
                        planet.position[0],
                        planet.yPush,
                        planet.position[2],
                      ]}
                      onClick={onLabelClick}
                    />
                  </>
                ) : (
                  <>
                    <Model
                      onClick={(position) => {
                        onClick(position, planet.name);
                      }}
                      key={planet.name}
                      name={planet.name}
                      texture={planet.texture}
                      args={[planet.size, 12]}
                      position={[
                        planet.position[0],
                        planet.yPush,
                        planet.position[2] + push[index],
                      ]}
                    />
                    <PlanetLabel
                      position={[
                        planet.position[0],
                        2,
                        planet.position[2] + push[index],
                      ]}
                      text={planet.name}
                      onClick={onLabelClick}
                    />
                  </>
                )}
              </>
            );
          })}
        </>
      )}

      {/* Earth specific instance */}
      {!isKepler && (
        <>
          <PlanetLabel
            position={[
              2.5 * 5.5 * Math.cos((2 / planets.length) * 2 * Math.PI),
              0,
              -0.7 * 5.5 * Math.sin((2 / planets.length) * 2 * Math.PI),
            ]}
            text="Earth"
            onClick={onLabelClick}
          />
          <Earth
            isModels={true}
            onClick={(position) => onClick(position, "Earth")}
            position={[
              2.5 * 5.5 * Math.cos((2 / planets.length) * 2 * Math.PI),
              0,
              -0.7 * 5.5 * Math.sin((2 / planets.length) * 2 * Math.PI),
            ]}
          />
        </>
      )}

      <ambientLight intensity={0.5} />

      <directionalLight position={[10, 0, -10]} intensity={1.5} castShadow />
    </>
  );
};

export default SolarSystemWithKepler;
