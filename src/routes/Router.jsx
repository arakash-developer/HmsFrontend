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

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "admin", element: <AdminDashboard /> },
          // { path: "doctor", element: <DoctorDashboard /> },
          // { path: "patient", element: <PatientDashboard /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["superadmin"]} />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [{ path: "superadmin", element: <SuperAdminDashboard /> }],
      },
    ],
  },
  {
    path: "*",
    element: <div>404 | Page Not Found</div>,
  },
];

export const router = createBrowserRouter(routes);
