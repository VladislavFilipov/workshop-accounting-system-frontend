import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorScreen from "@src/components/ErrorScreen";
import AppLayout from "@src/components/_layouts/AppLayout";
import ProtectedRoute from "@src/components/_shared/ProtectedRoute";
import { ADMIN, MODERATOR } from "@src/const/userRoles";

const AccountingPackaging = lazy(
  () => import("@src/pages/AccountingPackaging"),
);
const AccountingProduction = lazy(
  () => import("@src/pages/AccountingProduction"),
);
const Items = lazy(
  () => import("@src/pages/AccountingProduction/_routes/Items/Items"),
);
const Stamps = lazy(
  () => import("@src/pages/AccountingProduction/_routes/Stamps/Stamps"),
);
const ActiveWorks = lazy(
  () => import("@src/pages/ActiveWorks/ActiveWorksPage"),
);
const Machines = lazy(() => import("@src/pages/Machines"));
const Menu = lazy(() => import("@src/pages/Menu"));
const PackstationScans = lazy(() => import("@src/pages/PackstationScans"));
const Packstations = lazy(() => import("@src/pages/Packstations"));
const Requests = lazy(() => import("@src/pages/Requests/Requests"));
const Users = lazy(() => import("@src/pages/Users"));

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
        path: "/accounting",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/accounting/production",
            element: <ProtectedRoute />,
            children: [
              {
                path: "/accounting/production",
                element: <AccountingProduction />,
                children: [
                  {
                    path: "/accounting/production/stamps",
                    element: <Stamps />,
                  },
                  {
                    path: "/accounting/production/items",
                    element: <Items />,
                  },
                ],
              },
            ],
          },
          {
            path: "/accounting/packaging",
            element: <ProtectedRoute />,
            children: [
              {
                path: "/accounting/packaging",
                element: <AccountingPackaging />,
              },
            ],
          },
        ],
      },
      {
        path: "/monitoring",
        element: <ProtectedRoute permittedRoles={[MODERATOR, ADMIN]} />,
        children: [
          {
            path: "/monitoring/packstations",
            element: <ProtectedRoute />,
            children: [
              { index: true, element: <Packstations /> },

              {
                path: "/monitoring/packstations/:id",
                element: <PackstationScans />,
              },
            ],
          },
          {
            path: "/monitoring/machines",
            element: <ProtectedRoute />,
            children: [{ index: true, element: <Machines /> }],
          },
        ],
      },
      {
        path: "/active-works",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <ActiveWorks /> }],
      },
      {
        path: "/requests",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Requests /> }],
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
export type TRouter = typeof router;
