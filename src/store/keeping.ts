import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDetail } from "@src/types/detail";
import { IKeeping } from "@src/types/keeping";

interface IState {
  list: IKeeping[];
  status: "waiting" | "loading" | "error" | "success";
}

interface IActions {
  addKeeping: (keeping: IKeeping) => void;
  updateKeeping: (keeping: IKeeping) => void;
  deleteKeeping: (keeping: IKeeping) => void;
  resetList: () => void;
  reset: () => void;
}

const initialState: IState = {
  list: [],
  status: "waiting",
};

// temporary implementation while server is not ready
const useKeepingStore = create<IState & IActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      addKeeping: (keeping: Omit<IKeeping, "id">) => {
        const id =
          get().list.reduce(
            (accum, cur) => (cur.id > accum ? cur.id : accum),
            get().list.length,
          ) + 1;

        // console.log("addKeeping", [{ ...keeping, id }, ...get().list]);

        set({
          list: [{ ...keeping, id }, ...get().list],
        });
      },
      updateKeeping: (keeping: IKeeping) => {
        set({
          list: get().list.map((item) =>
            item.id == keeping.id ? keeping : item,
          ),
        });
      },
      deleteKeeping: (keeping: IKeeping) => {
        set({
          list: get().list.filter((item) => item.id !== keeping.id),
        });
      },
      resetList: () => {
        set({
          status: "loading",
        });
        setTimeout(() => {
          set({
            list: [],
            status: "success",
          });

          setTimeout(() => {
            set({
              status: "waiting",
            });
          }, 2000);
        }, 500);
      },
      reset: () => set(initialState),
    }),
    {
      name: "keeping",
    },
  ),
);

export default useKeepingStore;
