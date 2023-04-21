import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IUser } from "@src/types/user";

interface IState {
  title: string;
}

interface IActions {
  setTitle: (title: string) => void;
  reset: () => void;
}

const initialState: IState = {
  title: "Меню",
};

const usePageStore = create<IState & IActions>()(
  persist(
    (set) => ({
      ...initialState,
      setTitle: (title) => set({ title }),
      reset: () => set(initialState),
    }),
    {
      name: "page",
    },
  ),
);

export default usePageStore;
