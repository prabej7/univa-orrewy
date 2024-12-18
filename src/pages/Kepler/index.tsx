import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import SolarSystem from "./SolarSystem";
import { Nav, OptionsToShow } from "../../components/user ui";
import { Comets, Planet, Planets, Satellites } from "@/constants/data";
import SpeedControl from "@/components/user ui/SpeedControl";
import { ReadMore, Loading } from "@/components";


const Home: React.FC = () => {
  // eslint-disable-next-line
  const controlsRef = useRef<any>();
  // eslint-disable-next-line
  const [_, setOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>();
  const [readMore, setReadMore] = useState<number>();
  const [isKepler, setIsKepler] = useState(false);
  const [speed, setSpeed] = useState<number>(0.01);
  const [neos, setNeos] = useState<boolean>(false);

  const handleSolarSystemClick = (position: {
    x: number;
    y: number;
    z: number;
  }) => {
    setOpen(true);
    console.log(position);
    const targetPosition = new THREE.Vector3(
      position.x,
      position.y,
      position.z
    );

    gsap.to(controlsRef.current.object.position, {
      x: targetPosition.x + 5,
      y: targetPosition.y + 2,
      z: targetPosition.z + 0,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => controlsRef.current.update(),
    });

    gsap.to(controlsRef.current.target, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => controlsRef.current.update(),
    });
  };

  const handleLabelClick = (name: string) => {
    const query = name.toLocaleLowerCase();
    let results = [
      ...Planets.filter((planet) => planet.name.toLowerCase() === query),
      ...Comets.filter((comet) => comet.name.toLowerCase() === query),
      ...Satellites.filter(
        (satellite) => satellite.name.toLowerCase() === query
      ),
    ];

    if (results.length === 0) {
      results = [
        ...Planets.filter((planet) =>
          planet.name.toLowerCase().includes(query)
        ),
        ...Comets.filter((comet) => comet.name.toLowerCase().includes(query)),
        ...Satellites.filter((satellite) =>
          satellite.name.toLowerCase().includes(query)
        ),
      ];
    }

    const selectedPlanet = results[0];

    handleSolarSystemClick({
      x: selectedPlanet.x,
      y: selectedPlanet.y,
      z: selectedPlanet.z,
    });
  };

  const on3DView = (position: { x: number; y: number; z: number },
    name: string) => {
    const planet = Planets.find((planet) => planet.name === name);
    if (!planet) {
      const comet = Comets.find((comet) => comet.name === name);
      if (!comet) {
        const sattelite = Satellites.find(
          (satellite) => satellite.name === name
        );
        if (!sattelite) {
          return;
        }
        setSelectedPlanet({
          ...sattelite,
          texture: sattelite.texture || "",
        });
      }
      setSelectedPlanet(comet);
      setSelectedPlanet(comet);

      gsap.to(controlsRef.current.object.position, {
        x: position.x + 0.5,
        y: position.y,
        z: position.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => controlsRef.current.update(),
      });

      gsap.to(controlsRef.current.target, {
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => controlsRef.current.update(),
      });
      return;
    } else {
      setSelectedPlanet(planet);
    }

    return handleSolarSystemClick(position);
  }




  return (
    <div className="bg-black h-screen w-screen overflow-clip overflow-x-clip overflow-y-clip">
      {isKepler && (
        <div className="absolute bottom-44 left-[45%] z-20">
          <SpeedControl
            value={speed}
            onChange={(e) => {
              setSpeed(Number(e.target.value));
            }}
          />
        </div>
      )}
      <OptionsToShow onToggle={(value) => setNeos(value)} />
      <Nav
        onKepler={() => setIsKepler(!isKepler)}
        onClose={() => {
          setOpen(false);
          setReadMore(undefined);
        }}
        onReadMore={readMore}
        on3DView={on3DView}
      />
      {selectedPlanet && (
        <ReadMore selectedPlanet={selectedPlanet} onClick={(id) => setReadMore(id)} />
      )}
      <Suspense
        fallback={
          <Loading />
        }
      >
        <Canvas
          style={{ backgroundColor: "black", height: "100vh" }}
          camera={{ position: [20, 15, 50], fov: 45 }}
        >
          <Stars
            radius={100}
            depth={200}
            count={5000}
            factor={4}
            saturation={1}
            fade
          />
          <SolarSystem
            speed={speed}
            onLabelClick={handleLabelClick}
            isKepler={isKepler}
            onClick={(position, name) => {
              handleSolarSystemClick(position);
              const planet = Planets.find((planet) => planet.name === name);
              setSelectedPlanet(planet);
            }}
            isNeos={neos}
          />

          <OrbitControls
            ref={controlsRef}
            // maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
            enableZoom={true}
            enablePan={true}

            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}  // Controls how fast the camera rotates around the target

          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;
