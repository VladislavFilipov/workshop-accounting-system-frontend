import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuthStore from "@src/store/auth";

const ProtectedRoute: FC = () => {
  const location = useLocation();
  const isAuthorized = useAuthStore((state) => state.isAuthorized);

  if (!isAuthorized)
    return <Navigate to={"/login"} state={{ from: location }} />;

  return <Outlet />;
};

export default ProtectedRoute;
