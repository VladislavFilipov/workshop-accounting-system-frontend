import { create } from "zustand";
import { persist } from "zustand/middleware";

import router from "@src/pages/router";
import { IUser } from "@src/types/user";

interface IAuthStore {
  user: IUser | undefined;
  isAuthorized: boolean;
  // accessToken: string;
  // refreshToken: string;
  // expiredIn: number;
  error: string | undefined;
  isLoading: boolean;
  login: (user: IUser) => void;
  logout: () => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      isAuthorized: false,
      error: undefined,
      isLoading: false,
      login: async (user: IUser) => {
        // plug, in future real authentication will be here
        if (user) {
          set({
            user,
            isAuthorized: true,
          });
          router.navigate("/");
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
        router.navigate("/login");
      },
    }),
    {
      name: "auth",
    },
  ),
);

export default useAuthStore;
