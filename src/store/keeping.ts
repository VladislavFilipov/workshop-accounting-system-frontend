import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDetail } from "@src/types/detail";
import { IKeeping } from "@src/types/keeping";

interface IKeepingStore {
  list: IKeeping[];
  status: "waiting" | "loading" | "error" | "success";
  // getKeepingByDetail: (detail: IDetail) => IKeeping[];
  addKeeping: (keeping: IKeeping) => void;
  updateKeeping: (keeping: IKeeping) => void;
  deleteKeeping: (keeping: IKeeping) => void;
  resetList: () => void;
}

// temporary implementation while server is not ready
const useKeepingStore = create<IKeepingStore>()(
  persist(
    (set, get) => ({
      list: [],
      status: "waiting",
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
    }),
    {
      name: "keeping",
    },
  ),
);

export default useKeepingStore;
