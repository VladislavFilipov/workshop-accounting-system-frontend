import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import ProtectedRoute from "@src/components/ProtectedRoute/ProtectedRoute";
import AppLayout from "@src/components/_layouts/AppLayout";
import Menu from "@src/pages/Menu";
import Scanner from "@src/pages/Scanner";
import Users from "@src/pages/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Menu />} />
      </Route>
      <Route path="/scanner" element={<ProtectedRoute />}>
        <Route index element={<Scanner />} />
      </Route>
      <Route path="/login" element={<Users />} />
    </Route>,
  ),
);

export default router;
