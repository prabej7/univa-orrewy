import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import SolarSystem from "./SolarSystem";
import { Nav } from "../../components/user ui";
import { Comets, Planet, Planets, Satellites } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const Home: React.FC = () => {
  const controlsRef = useRef<any>(null);
  const [_, setOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>();
  const [readMore, setReadMore] = useState<number>();
  const [isKepler, setIsKepler] = useState(false);
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

  return (
    <div className="bg-black h-screen w-screen overflow-clip overflow-x-clip overflow-y-clip">
      <Nav
        onKepler={() => setIsKepler(!isKepler)}
        onClose={() => {
          setOpen(false);
          setReadMore(undefined);
        }}
        onReadMore={readMore}
        on3DView={(
          position: { x: number; y: number; z: number },
          name: string
        ) => {
          let planet = Planets.find((planet) => planet.name === name);
          if (!planet) {
            let comet = Comets.find((comet) => comet.name === name);
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
        }}
      />
      {selectedPlanet && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-20 bottom-0 left-0 w-full"
        >
          <div className="p-6 flex flex-col items-center justify-center gap-4">
            <Button
              className="text-white"
              variant="link"
              onClick={() => setReadMore(selectedPlanet.id)}
            >
              Read more about {selectedPlanet.name}{" "}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      )}
      <Suspense
        fallback={
          <div className="absolute z-10 h-screen w-screen flex justify-center items-center ">
            <p className="text-white text-2xl flex items-center gap-2">
              <span className="loading loading-infinity loading-lg text-white"></span>
              Loading...
            </p>
          </div>
        }
      >
        <Canvas
          style={{ backgroundColor: "black", height: "100vh" }}
          camera={{ position: [20, 15, 50], fov: 45 }}
        >
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
          />
          <SolarSystem
            isKepler={isKepler}
            onClick={(position, name) => {
              handleSolarSystemClick(position);
              const planet = Planets.find((planet) => planet.name === name);
              setSelectedPlanet(planet);
            }}
          />

          <OrbitControls
            ref={controlsRef}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
            enableZoom={true}
            enablePan={false}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;
