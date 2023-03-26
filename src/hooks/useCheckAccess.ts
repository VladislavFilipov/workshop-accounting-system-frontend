/*
  Hook that returns permission for current user
*/
import { useMemo } from "react";

import useAuthStore from "@src/store/auth";
import { TUserRole } from "@src/types/user";

const useCheckAccess = (permittedRoles: TUserRole[] = []): boolean => {
  const role = useAuthStore((state) => state.user?.role);

  return useMemo(
    () => !!role && permittedRoles.includes(role),
    [permittedRoles],
  );
};

export default useCheckAccess;
