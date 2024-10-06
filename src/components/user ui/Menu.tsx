import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { Comets, Planets, Satellites } from "@/constants/data";
import { Suspense, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ShowDemoModel from "./ShowDemoModel";
const Menu: React.FC<{
  on3DView: (
    position: { x: number; y: number; z: number },
    name: string
  ) => void;
  onReadMore?: number;
  onClose: () => void;
}> = ({ on3DView, onReadMore, onClose }) => {
  const [open, setOpen] = useState(false);

  const [selectedModel, setSelectedModel] = useState<{
    type:
      | "earth"
      | "saturn"
      | "comet"
      | "sattelite"
      | "sun"
      | "planet"
      | "moon";
    id: number;
    name: string;
    description: string;
    texture: string;
    size?: string;
    distance?: string;
    x: number;
    y: number;
    z: number;
  }>({
    type: "planet",
    id: Planets[0].id,
    name: Planets[0].name,
    description: Planets[0].description,
    texture: Planets[0].texture,
    size: Planets[0].size,
    distance: Planets[0].distance,
    x: Planets[0].x,
    y: Planets[0].y,
    z: Planets[0].z,
  });

  const onPlanetClick = (id: number) => {
    Planets.forEach((planet) => {
      if (planet.id === id && planet.name === "Earth") {
        setSelectedModel({
          type: "earth",
          id: planet.id,
          name: planet.name,
          description: planet.description,
          texture: planet.texture,
          size: planet.size,
          distance: planet.distance,
          x: planet.x,
          y: planet.y,
          z: planet.z,
        });

        return;
      }

      if (planet.id === id && planet.name === "Saturn") {
        setSelectedModel({
          type: "saturn",
          id: planet.id,
          name: planet.name,
          description: planet.description,
          texture: planet.texture,
          size: planet.size,
          distance: planet.distance,
          x: planet.x,
          y: planet.y,
          z: planet.z,
        });

        return;
      } else if (id == planet.id && planet.name == "Sun") {
        setSelectedModel({
          type: "sun",
          id: planet.id,
          name: planet.name,
          description: planet.description,
          texture: planet.texture,
          size: planet.size,
          distance: planet.distance,
          x: planet.x,
          y: planet.y,
          z: planet.z,
        });

        return;
      }
      if (planet.id === id) {
        setSelectedModel({
          type: "planet",
          id: planet.id,
          name: planet.name,
          description: planet.description,
          texture: planet.texture,
          size: planet.size,
          distance: planet.distance,
          x: planet.x,
          y: planet.y,
          z: planet.z,
        });
        return;
      }
    });
  };

  const onCometClick = (id: number) => {
    Comets.forEach((comet) => {
      if (comet.id === id) {
        setSelectedModel({
          type: "comet",
          id: comet.id,
          name: comet.name,
          description: comet.description,
          texture: comet.texture,

          x: comet.x,
          y: comet.y,
          z: comet.z,
        });
      }
    });
  };

  const onSatelliteClick = (id: number) => {
    // Force re-render of ShowDemoModel component
    setSelectedModel((prevState) => ({
      ...prevState,
      key: Math.random(),
    }));
    Satellites.forEach((satellite) => {
      if (satellite.id === id) {
        // @ts-ignore
        let type = "sattelite";
        if (satellite.name === "Moon") {
          type = "moon";
          setSelectedModel({
            ...satellite,
            type: "moon",
            texture: "/textures/moon/moon.jpg",
          });
        } else {
          setSelectedModel({
            ...satellite,
            type: "sattelite",
            texture: satellite.texture || "",
          });
        }
      }
    });
  };

  const onView3D = (position: { x: number; y: number; z: number }) => {
    setOpen(false);

    on3DView(
      {
        x: position.x,
        y: position.y,
        z: position.z,
      },
      selectedModel.name
    );

    onClose();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
    if (e.key === "m" && e.ctrlKey) {
      e.preventDefault();
      setOpen(true);
    }
  });

  useEffect(() => {
    if (onReadMore) {
      setOpen(true);
      onPlanetClick(onReadMore);
    }
  }, [onReadMore]);

  return (
    <Sheet
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        onClose();
      }}
    >
      <SheetTrigger>
        <div className="text-white flex items-center gap-2">
          <p>Menu</p>
          <MenuIcon className="w-4 h-4 text-white" />
        </div>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-800 h-screen w-screen"
      >
        <SheetHeader>
          <SheetTitle className="text-white">Univa Orrery Menu</SheetTitle>
          <SheetDescription>
            Here are some options to explore the universe.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-3 gap-2">
          <div className="mt-6 border-r flex flex-col gap-24">
            <div className="flex gap-24">
              <div>
                <h2 className="text-white font-bold text-2xl">Planets</h2>
                {Planets.map((planet) => (
                  <div>
                    {planet.name !== "Sun" && (
                      <p
                        key={planet.id}
                        className="text-white font-light cursor-pointer hover:pl-6 transition-all duration-300"
                        onClick={() => onPlanetClick(planet.id)}
                      >
                        {planet.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-white font-bold text-2xl">
                  Comets/Asteroids
                </h2>
                {Comets.map((comet) => (
                  <p
                    key={comet.id}
                    className="text-white font-light cursor-pointer hover:pl-6 transition-all duration-300"
                    onClick={() => onCometClick(comet.id)}
                  >
                    {comet.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-24">
              <div>
                <h2 className="text-white font-bold text-2xl">Satellites</h2>
                {Satellites.map((satellite) => (
                  <p
                    key={satellite.id}
                    className="text-white font-light cursor-pointer hover:pl-6 transition-all duration-300"
                    onClick={() => onSatelliteClick(satellite.id)}
                  >
                    {satellite.name}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl">Stars</h2>
                <p
                  className="text-white font-light cursor-pointer hover:pl-6 transition-all duration-300"
                  onClick={() => {
                    setSelectedModel({
                      type: "sun",
                      id: 0,
                      name: "Sun",
                      description:
                        "The Sun is a huge ball of hydrogen and helium held together by its own gravity. It has several regions, including the core, radiative zone, convection zone, photosphere, chromosphere, transition zone, and corona. The Sun's heat and light are powered by nuclear reactions in the core. Energy from the core is carried outward by radiation and convection. The Sun's magnetic fields extend out into space to form the interplanetary magnetic field, which is carried through the solar system by the solar wind.",
                      texture: "/textures/sun/8k_sun.jpg",
                      x: 0.2995466668868829,
                      y: 0.16395455902711653,
                      z: 0.9387653702059069,
                    });
                  }}
                >
                  Sun
                </p>
              </div>
            </div>
          </div>
          <div>
            {selectedModel.type === "planet" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p
                  className="text-white font-thin text-sm leading-6 tracking-wide"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {selectedModel.description}
                </p>

                <div className="text-white font-light">
                  <p className="font-bold">Size:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.size}
                  </p>
                </div>
                <div className="text-white font-light">
                  <p className="font-bold">Distance:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.distance}
                  </p>
                </div>

                <Button
                  variant="secondary"
                  onClick={() =>
                    onView3D({
                      x: selectedModel.x,
                      y: selectedModel.y,
                      z: selectedModel.z,
                    })
                  }
                >
                  3D View
                </Button>
              </div>
            )}
            {selectedModel.type === "comet" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p className="text-white font-light">
                  {selectedModel.description}
                </p>
                <Button
                  variant="secondary"
                  onClick={() =>
                    onView3D({
                      x: selectedModel.x,
                      y: selectedModel.y,
                      z: selectedModel.z,
                    })
                  }
                >
                  3D View
                </Button>
              </div>
            )}
            {selectedModel.type === "saturn" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p
                  className="text-white font-thin text-sm leading-6 tracking-wide"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {selectedModel.description}
                </p>
                <div className="text-white font-light">
                  <p className="font-bold">Size:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.size}
                  </p>
                </div>
                <div className="text-white font-light">
                  <p className="font-bold">Distance:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.distance}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  onClick={() =>
                    onView3D({
                      x: selectedModel.x,
                      y: selectedModel.y,
                      z: selectedModel.z,
                    })
                  }
                >
                  3D View
                </Button>
              </div>
            )}
            {selectedModel.type === "earth" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p className="text-white font-thin text-sm leading-6 tracking-wide">
                  {selectedModel.description}
                </p>
                <div className="text-white font-light">
                  <p className="font-bold">Size:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.size}
                  </p>
                </div>
                <div className="text-white font-light">
                  <p className="font-bold">Distance:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.distance}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  onClick={() =>
                    onView3D({
                      x: selectedModel.x,
                      y: selectedModel.y,
                      z: selectedModel.z,
                    })
                  }
                >
                  3D View
                </Button>
              </div>
            )}
            {selectedModel.type === "sattelite" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p className="text-white font-light">
                  {selectedModel.description}
                </p>
                <div className="text-white font-light">
                  <p className="font-bold">Distance:</p>
                  <p
                    className="font-thin text-sm leading-6 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {selectedModel.distance}
                  </p>
                </div>
                <Button
                  variant="secondary"
                  onClick={() =>
                    onView3D({
                      x: selectedModel.x,
                      y: selectedModel.y,
                      z: selectedModel.z,
                    })
                  }
                >
                  3D View
                </Button>
              </div>
            )}
            {selectedModel.type === "moon" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p className="text-white font-light">
                  {selectedModel.description}
                </p>
                <Button
                  variant="secondary"
                  onClick={() =>
                    onView3D({
                      x: selectedModel.x,
                      y: selectedModel.y,
                      z: selectedModel.z,
                    })
                  }
                >
                  3D View
                </Button>
              </div>
            )}
            {selectedModel.type === "sun" && (
              <div className="flex flex-col gap-2 p-6">
                <h2 className="text-white font-bold text-2xl">
                  {selectedModel.name}
                </h2>
                <p className="text-white font-light">
                  {selectedModel.description}
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    console.log("clicked");
                    onView3D({
                      x: 0.2995466668868829,
                      y: 0.16395455902711653,
                      z: 0.9387653702059069,
                    });
                  }}
                >
                  3D View
                </Button>
              </div>
            )}
          </div>
          <div className="">
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group key={selectedModel.id}>
                  <ShowDemoModel
                    type={selectedModel.type}
                    texture={selectedModel.texture}
                  />
                </group>
                <OrbitControls />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
