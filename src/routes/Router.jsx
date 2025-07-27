import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import DashboardLayout from "@/layouts/DashboardLayout";
import Layout from "@/layouts/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const AdminDashboard = lazy(() => import("@/components/admin/AdminDashboard"));
const SuperAdminDashboard = lazy(() =>
  import("@/components/superadmin/SuperAdminDashboard")
);

import ProtectedRoute from "@/routes/ProtectedRoute";
import PublicRoute from "@/routes/PublicRoute";
import Typhography from "@/components/admin/Typhography";
import NotFound from "@/components/main/NotFound";

const routes = [
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { path: "admin", element: <AdminDashboard /> },
          { path: "typography", element: <Typhography /> },
          // { path: "patient", element: <PatientDashboard /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["superadmin"]} />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [{ path: "superadmin", element: <SuperAdminDashboard /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
