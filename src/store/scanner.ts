import { create } from "zustand";

interface IScannerData {
  canUpdate: boolean;
  canDetailFinish: boolean;
  setCanUpdate: (value: boolean) => void;
  setCanDetailFinish: (value: boolean) => void;
}

const useScannerData = create<IScannerData>((set) => ({
  canUpdate: false,
  canDetailFinish: false,
  setCanUpdate: (value: boolean) => set({ canUpdate: value }),
  setCanDetailFinish: (value: boolean) => set({ canDetailFinish: value }),
}));

export default useScannerData;
