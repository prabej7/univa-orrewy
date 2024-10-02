import { create } from "zustand";

interface PositionStore {
  position: {
    x: number;
    y: number;
    z: number;
  };
  setPosition: (position: { x: number; y: number; z: number }) => void;
}

const usePositionStore = create<PositionStore>((set) => ({
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  setPosition: (position: { x: number; y: number; z: number }) =>
    set({ position }),
}));

export default usePositionStore;
