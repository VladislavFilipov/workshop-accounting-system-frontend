import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// const AppLayout = lazy(() => import("@src/components/_layouts/AppLayout"));
// const ProtectedRoute = lazy(
//   () => import("@src/components/_shared/ProtectedRoute/ProtectedRoute"),
// );
// const Menu = lazy(() => import("@src/pages/Menu"));
// const Scanner = lazy(() => import("@src/pages/Scanner"));
// const Users = lazy(() => import("@src/pages/Users"));
import AppLayout from "@src/components/_layouts/AppLayout";
import ProtectedRoute from "@src/components/_shared/ProtectedRoute/ProtectedRoute";
import Menu from "@src/pages/Menu";
import Scanner from "@src/pages/Scanner";
import Users from "@src/pages/Users";

// has temporary login simulation
export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route path="/" element={<ProtectedRoute />}>
      <Route index element={<Menu />} />
    </Route>
    <Route path="/scanner" element={<ProtectedRoute />}>
      <Route index element={<Scanner />} />
    </Route>
    <Route path="/login" element={<Users />} />
  </Route>,
);

const router = createBrowserRouter(routes);

export default router;
