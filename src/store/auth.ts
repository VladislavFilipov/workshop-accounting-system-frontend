import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IUser } from "@src/types/user";

interface IState {
  user: IUser | undefined;
  isAuthorized: boolean;
  // accessToken: string;
  // refreshToken: string;
  // expiredIn: number;
  error: string | undefined;
  isLoading: boolean;
}

interface IActions {
  login: (user: IUser) => void;
  logout: () => void;
  reset: () => void;
}

const initialState: IState = {
  user: undefined,
  isAuthorized: false,
  error: undefined,
  isLoading: false,
};

const useAuthStore = create<IState & IActions>()(
  persist(
    (set) => ({
      ...initialState,
      login: async (user: IUser) => {
        // plug, in future real authentication will be here
        if (user) {
          set({
            user,
            isAuthorized: true,
          });
        } else {
          set({
            error: "Не удалось войти.",
          });
        }
      },
      logout: () => {
        set({
          user: undefined,
          isAuthorized: false,
        });
      },
      reset: () => set(initialState),
    }),
    {
      name: "auth",
    },
  ),
);

export default useAuthStore;
