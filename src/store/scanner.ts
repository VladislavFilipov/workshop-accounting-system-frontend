import { create } from "zustand";

const types = ["item", "stamp"] as const;

type TTypeOfScanning = typeof types[number];

interface IScannerData {
  typeOfScanning: TTypeOfScanning | undefined;
  scannedId: string;
  parseInput: (value: string) => void;
  parseError: Error | undefined;
  canUpdate: boolean;
  canDetailFinish: boolean;
  setCanUpdate: (value: boolean) => void;
  setCanDetailFinish: (value: boolean) => void;
}

const useScannerData = create<IScannerData>((set) => ({
  typeOfScanning: undefined,
  scannedId: "",
  parseError: undefined,
  parseInput: (value: string) => {
    const [type, id] = value.split("\n");

    set({
      typeOfScanning: undefined,
    });

    if (!types.includes(type as TTypeOfScanning)) {
      set({
        typeOfScanning: undefined,
        scannedId: "",
        parseError: new Error("Некорректный тип."),
      });
    } else {
      set({
        typeOfScanning: type as TTypeOfScanning,
        scannedId: id,
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
