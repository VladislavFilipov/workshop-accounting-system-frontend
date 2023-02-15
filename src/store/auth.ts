import localforage from "localforage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IUser } from "@src/types/user";

interface IAuthStore {
  user: IUser;
  isAuthorized: boolean;
  // accessToken: string;
  // refreshToken: string;
  // expiredIn: number;
  error: string;
  isLoading: boolean;
  login: (user: IUser) => void;
  // login: () => void;
  logout: () => void;
}

const initialUser: IUser = {
  id: undefined,
  lastName: "",
  name: "",
  middleName: "",
  role: "",
  jobs: [],
};

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      user: initialUser,
      isAuthorized: false,
      error: "",
      isLoading: false,
      // setUserData: (user: IUser) =>
      //   set({
      //     user,
      //   }),
      login: (user: IUser) => {
        set({
          user,
          isAuthorized: true,
        });
      },
      logout: () => {
        set({
          user: initialUser,
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
