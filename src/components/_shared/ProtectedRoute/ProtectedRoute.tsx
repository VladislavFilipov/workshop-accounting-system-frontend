import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import useCheckAccess from "@src/hooks/useCheckAccess";
import useAuthStore from "@src/store/auth";
import { TUserRole } from "@src/types/user";

interface IProtectedRouteProps {
  permittedRoles?: TUserRole[];
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ permittedRoles }) => {
  const location = useLocation();
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  const hasAccess = useCheckAccess(permittedRoles);
  // console.log("isAuthorized", isAuthorized);

  if (permittedRoles && !hasAccess)
    return <Navigate to={"/"} state={{ from: location }} />;
  if (!isAuthorized)
    return <Navigate to={"/login"} state={{ from: location }} />;

  return <Outlet />;
};

export default ProtectedRoute;
