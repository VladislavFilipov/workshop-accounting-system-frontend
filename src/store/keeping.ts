import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDetail } from "@src/types/detail";
import { IKeeping } from "@src/types/keeping";

interface IKeepingStore {
  list: IKeeping[];
  getKeepingByDetail: (detail: IDetail) => IKeeping[];
  addKeeping: (keeping: IKeeping) => void;
  updateKeeping: (keeping: IKeeping) => void;
  deleteKeeping: (keeping: IKeeping) => void;
}

// temporary implementation while server is not ready
const useKeepingStore = create<IKeepingStore>()(
  persist(
    (set, get) => ({
      list: [],
      getKeepingByDetail: (detail: IDetail) => {
        return get().list.filter((item) => item.detail.id === detail.id);
      },
      addKeeping: (keeping: Omit<IKeeping, "id">) => {
        const id =
          get().list.reduce(
            (accum, cur) => (cur.id > accum ? cur.id : accum),
            get().list.length,
          ) + 1;

        set({
          list: [{ id, ...keeping }, ...get().list],
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
    }),
    {
      name: "keeping",
    },
  ),
);

export default useKeepingStore;
