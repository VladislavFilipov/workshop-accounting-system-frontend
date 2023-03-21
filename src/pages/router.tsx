import { createBrowserRouter } from "react-router-dom";

import ErrorScreen from "@src/components/ErrorScreen";
// const AppLayout = lazy(() => import("@src/components/_layouts/AppLayout"));
// const ProtectedRoute = lazy(
//   () => import("@src/components/_shared/ProtectedRoute/ProtectedRoute"),
// );
// const Menu = lazy(() => import("@src/pages/Menu"));
// const Scanner = lazy(() => import("@src/pages/Scanner"));
// const Users = lazy(() => import("@src/pages/Users"));
import AppLayout from "@src/components/_layouts/AppLayout";
import ProtectedRoute from "@src/components/_shared/ProtectedRoute";
import userRoles from "@src/data/userRoles";
import ActiveWorks from "@src/pages/ActiveWorks/ActiveWorksPage";
import Menu from "@src/pages/Menu";
import Packaging from "@src/pages/Packaging";
import Scanner from "@src/pages/Scanner";
import Stamps from "@src/pages/Scanner/_routes/Stamps/Stamps";
import Users from "@src/pages/Users";

// has temporary login simulation
export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorScreen type="error" />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Menu /> }],
      },
      {
        path: "/scanner",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/scanner",
            element: <Scanner />,
            children: [
              {
                path: "/scanner/stamps",
                element: <Stamps />,
              },
              {
                path: "/scanner/items",
                element: <div>Items</div>,
              },
            ],
          },
        ],
      },
      {
        path: "/active-works",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <ActiveWorks /> }],
      },
      {
        path: "/packaging",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Packaging /> }],
      },
      {
        path: "/login",
        element: <Users />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorScreen type="pageNotFound" />,
  },
];

const router = createBrowserRouter(routes);

export default router;
