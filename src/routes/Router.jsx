import { lazy } from "react";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
// Lazy-load layouts
const AdminDashboardLayout = lazy(() =>
  import("@/layouts/admin/AdminDashboardLayout")
);
import Layout from "@/layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
const AdminDashboard = lazy(() => import("@/components/admin/AdminDashboard"));
const AdminAccounts = lazy(() => import("@/components/admin/AdminAccounts"));
const SuperAdminDashboard = lazy(() =>
  import("@/components/superadmin/SuperAdminDashboard")
);

import ProtectedRoute from "@/routes/ProtectedRoute";
import PublicRoute from "@/routes/PublicRoute";
import Typhography from "@/components/admin/Typhography";
import NotFound from "@/components/main/NotFound";
import AdminPatients from "@/components/admin/AdminPatients";
import AdminDoctors from "@/components/admin/AdminDoctors";

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
        path: "/admin",
        element: <AdminDashboardLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "typography", element: <Typhography /> },
          { path: "patients", element: <AdminPatients /> },
          { path: "accounts", element: <AdminAccounts /> },
          { path: "doctors", element: <AdminDoctors /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["superadmin"]} />,
    children: [
      {
        path: "/",
        element: <AdminDashboardLayout />,
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
