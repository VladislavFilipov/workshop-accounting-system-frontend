import { createBrowserRouter } from "react-router-dom";

import ErrorScreen from "@src/components/ErrorScreen";
import AppLayout from "@src/components/_layouts/AppLayout";
import ProtectedRoute from "@src/components/_shared/ProtectedRoute";
import userRoles from "@src/data/userRoles";
import AccountingPackaging from "@src/pages/AccountingPackaging";
import AccountingProduction from "@src/pages/AccountingProduction";
import Items from "@src/pages/AccountingProduction/_routes/Items/Items";
import Stamps from "@src/pages/AccountingProduction/_routes/Stamps/Stamps";
import ActiveWorks from "@src/pages/ActiveWorks/ActiveWorksPage";
import Machines from "@src/pages/Machines";
import Menu from "@src/pages/Menu";
import PackstationScans from "@src/pages/PackstationScans";
import Packstations from "@src/pages/Packstations";
import Requests from "@src/pages/Requests/Requests";
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
      // {
      //   path: "/accounting/production",
      //   element: <ProtectedRoute />,
      //   children: [
      //     {
      //       path: "/accounting/production",
      //       element: <AccountingProduction />,
      //       children: [
      //         {
      //           path: "/accounting/production/stamps",
      //           element: <Stamps />,
      //         },
      //         {
      //           path: "/accounting/production/items",
      //           element: <Items />,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: "/accounting/packaging",
      //   element: <ProtectedRoute />,
      //   children: [
      //     {
      //       path: "/accounting/packaging",
      //       element: <AccountingPackaging />,
      //     },
      //   ],
      // },
      {
        path: "/monitoring",
        element: (
          <ProtectedRoute
            permittedRoles={[userRoles.MODERATOR.name, userRoles.ADMIN.name]}
          />
        ),
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
