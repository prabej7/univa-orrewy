import { Position } from "@/components/Model";
import * as THREE from "three";
export interface ModelProps {
  position?: [number, number, number];
  onClick: (position: Position) => void;
  ref?: React.RefObject<THREE.Group>;
  isModels?: boolean;
}
