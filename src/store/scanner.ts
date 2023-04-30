import { create } from "zustand";

const types = ["item", "stamp"] as const;

type TTypeOfScanning = typeof types[number];

// "-Eid" means "enterprice id" from main CRM system
interface IState {
  typeOfScanning: TTypeOfScanning | undefined;
  scannedEid: string;
  scannedStampEid: string;
  parseError: Error | undefined;
  curDetailCraftId: number | undefined;
}

interface IActions {
  parseInput: (value: string) => void;
  setCurDetailCraftId: (id: number | undefined) => void;
  reset: () => void;
}

const initialState: IState = {
  typeOfScanning: undefined,
  scannedEid: "",
  scannedStampEid: "",
  parseError: undefined,
  curDetailCraftId: undefined,
};

const useScannerData = create<IState & IActions>((set) => ({
  ...initialState,
  parseInput: (value: string) => {
    const isDetail = value.includes("-");
    const [type, id] = value.split(isDetail ? "-" : "\n");

    set({
      typeOfScanning: undefined,
    });

    const tmpType = isDetail ? "stamp" : type;
    if (!types.includes(tmpType as TTypeOfScanning)) {
      set({
        typeOfScanning: undefined,
        scannedEid: "",
        scannedStampEid: "",
        parseError: new Error("Некорректный тип."),
      });
    } else {
      set({
        typeOfScanning: tmpType as TTypeOfScanning,
        scannedEid: id,
        scannedStampEid: type,
        parseError: undefined,
      });
    }
  },
  setCurDetailCraftId: (id) => set({ curDetailCraftId: id }),
  reset: () => set(initialState),
}));

// export const resetScannerData = () => {
//   useScannerData.setState(initialState, true);
// }

export default useScannerData;
