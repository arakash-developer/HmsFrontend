import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import Layout from "@/layouts/Layout";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

import Dashboard from "@/components/admin/Dashboard";
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
    element: <ProtectedRoute allowedRoles={["admin", "doctor", "patient"]} />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "admin", element: <Dashboard /> },
          // { path: "doctor", element: <DoctorDashboard /> },
          // { path: "patient", element: <PatientDashboard /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>404 | Page Not Found</div>,
  },
];

export const router = createBrowserRouter(routes);
