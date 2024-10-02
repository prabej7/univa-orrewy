import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export interface Position {
  x: number;
  y: number;
  z: number;
}

const DemoModel: React.FC<{
  texture: string;
}> = ({ texture }) => {
  const [text] = useTexture([texture]);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.5, 12]} />
        <meshStandardMaterial map={text} />
      </mesh>
    </group>
  );
};

export default DemoModel;

export const EarthDemoModel = () => {
  const [earthDay, earthNight, earthCloud] = useTexture([
    "/textures/earth/earth8k.jpg",
    "/textures/earth/03_earthlights1k.jpg",
    "/textures/earth/01_earthbump1k.jpg",
  ]);

  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[2.5, 12]} />
        <meshStandardMaterial map={earthDay} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.01, 12]} />
        <meshStandardMaterial
          map={earthNight}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.02, 12]} />
        <meshStandardMaterial
          map={earthCloud}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

export const SaturnDemoModel = () => {
  const [saturnTexture] = useTexture(["/textures/saturn/saturn.jpg"]);
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[3, 5, 64]} />
        <meshBasicMaterial
          color="#A49B72"
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.7}
          map={useTexture("/textures/saturn/ring.png")}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[2, 12]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>
    </group>
  );
};

export const CometDemoModel: React.FC<{
  texture: string;
}> = ({ texture }) => {
  const [cometTexture] = useTexture([texture]);
  return (
    <>
      <mesh position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
        <primitive object={cometTexture} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

import { useGLTF } from "@react-three/drei";

export const SatteliteDemoModel: React.FC<{
  texture: string;
}> = ({ texture }) => {
  const { scene } = useGLTF(texture, true);
  let scale = [0.01, 0.01, 0.01];

  if (texture.includes("ISS")) {
    scale = [0.035, 0.035, 0.035];
  } else if (texture.includes("Hubble")) {
    scale = [0.2, 0.2, 0.2];
  } else if (texture.includes("Terra")) {
    scale = [0.0002, 0.0002, 0.0002];
  } else if (texture.includes("Active Cavity Irradiance Monitor Satellite")) {
    scale = [0.0005, 0.0005, 0.0005];
  } else if (texture.includes("Jason")) {
    scale = [0.01, 0.01, 0.01];
  } else if (texture.includes("TDRS")) {
    scale = [0.2, 0.2, 0.2];
  }

  return (
    <>
      <group position={[0, 0, 0]}>
        <primitive object={scene} scale={scale} />
      </group>
    </>
  );
};

export const MoonDemoModel: React.FC = () => {
  const [moonTexture] = useTexture(["/textures/moon/moon.jpg"]);
  return (
    <>
      <mesh position={[0, 0, 0]} scale={[2, 2, 2]}>
        <icosahedronGeometry args={[1, 16]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </>
  );
};
