import { create } from "zustand";

const types = ["item", "stamp"] as const;

type TTypeOfScanning = typeof types[number];

interface IState {
  typeOfScanning: TTypeOfScanning | undefined;
  scannedId: string;
  parseError: Error | undefined;
  canUpdate: boolean;
  canDetailFinish: boolean;
}

interface IActions {
  parseInput: (value: string) => void;
  setCanUpdate: (value: boolean) => void;
  setCanDetailFinish: (value: boolean) => void;
  reset: () => void;
}

const initialState: IState = {
  typeOfScanning: undefined,
  scannedId: "",
  parseError: undefined,
  canUpdate: false,
  canDetailFinish: false,
};

const useScannerData = create<IState & IActions>((set) => ({
  ...initialState,
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
  setCanUpdate: (value: boolean) => set({ canUpdate: value }),
  setCanDetailFinish: (value: boolean) => set({ canDetailFinish: value }),
  reset: () => set(initialState),
}));

// export const resetScannerData = () => {
//   useScannerData.setState(initialState, true);
// }

export default useScannerData;
