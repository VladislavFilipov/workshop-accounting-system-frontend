import localforage from "localforage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import Api from "@src/api";
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
  // login: () => void;
  logout: () => void;
}

// const initialUser: IUser = {
//   id: undefined,
//   lastName: "",
//   name: "",
//   middleName: "",
//   role: "",
//   jobs: [],
// };

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      isAuthorized: false,
      error: undefined,
      isLoading: false,
      // setUserData: (user: IUser) =>
      //   set({
      //     user,
      //   }),
      login: async (user: IUser) => {
        // plug, in future real authentication will be there
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
      },
    }),
    {
      name: "auth",
    },
  ),
);

export default useAuthStore;
