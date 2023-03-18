import { create } from "zustand";

const types = ["item", "stamp"] as const;

type TTypeOfScanning = typeof types[number];

interface IScannerData {
  typeOfScanning: TTypeOfScanning | undefined;
  scannedToken: string;
  parseInput: (value: string) => void;
  parseError: Error | undefined;
  canUpdate: boolean;
  canDetailFinish: boolean;
  setCanUpdate: (value: boolean) => void;
  setCanDetailFinish: (value: boolean) => void;
}

const useScannerData = create<IScannerData>((set) => ({
  typeOfScanning: undefined,
  scannedToken: "",
  parseError: undefined,
  parseInput: (value: string) => {
    const [type, token] = value.split("\n");

    set({
      typeOfScanning: undefined,
    });

    if (!types.includes(type as TTypeOfScanning)) {
      set({
        typeOfScanning: undefined,
        scannedToken: "",
        parseError: new Error("Некорректный тип."),
      });
    } else {
      set({
        typeOfScanning: type as TTypeOfScanning,
        scannedToken: token,
        parseError: undefined,
      });
    }
  },
  canUpdate: false,
  canDetailFinish: false,
  setCanUpdate: (value: boolean) => set({ canUpdate: value }),
  setCanDetailFinish: (value: boolean) => set({ canDetailFinish: value }),
}));

export default useScannerData;
