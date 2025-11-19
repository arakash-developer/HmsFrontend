import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Layout from "@/layouts/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// Lazy-load layouts
const AdminDashboardLayout = lazy(() =>
  import("@/layouts/admin/AdminDashboardLayout")
);
const AdminDashboard = lazy(() => import("@/components/admin/AdminDashboard"));
const AdminAccounts = lazy(() => import("@/components/admin/AdminAccounts"));
const SuperAdminDashboard = lazy(() =>
  import("@/components/superadmin/SuperAdminDashboard")
);

import AdminConnections from "@/components/admin/AdminConnections";
import AdminDoctors from "@/components/admin/AdminDoctors";
import AdminPathology from "@/components/admin/AdminPathology";
import AdminPatients from "@/components/admin/AdminPatients";
import Typhography from "@/components/admin/Typhography";
import NotFound from "@/components/main/NotFound";
import Category from "@/components/receiption/Category";
import Country from "@/components/receiption/Country";
import Department from "@/components/receiption/Department";
import Doctor from "@/components/receiption/Doctor";
import Due from "@/components/receiption/Due";
import OutdoorIncome from "@/components/receiption/outdoorIncome/OutdoorIncome";
import Patientinfo from "@/components/receiption/patientinfo/Patientinfo";
import PatientReg from "@/components/receiption/patientregistration/PatientReg";
import PeriodicalReport from "@/components/receiption/periodicalReport/periodicalReport";
import PeriodicalStatementReport from "@/components/receiption/periodicalStatementReport/periodicalStatementReport";
import RefferelDoctor from "@/components/receiption/RefferelDoctor";
import Statement from "@/components/receiption/Statement";
import Test from "@/components/receiption/Test";
import UserWiseCollection from "@/components/receiption/userWiseCollection/UserWiseCollection";
import ReceiptionLayout from "@/layouts/receiption/ReceiptionLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";
import PublicRoute from "@/routes/PublicRoute";
// import { i } from "react-router/dist/development/index-react-server-client-kY8DvDF3";

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
    element: <ProtectedRoute allowedRoles={["receiption"]} />,
    children: [
      {
        path: "/receiption",
        element: <ReceiptionLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "add-country", element: <Country /> },
          { path: "add-test", element: <Test /> },
          { path: "add-department", element: <Department /> },
          { path: "add-category", element: <Category /> },
          { path: "doctor", element: <Doctor /> },
          { path: "patient-registration", element: <PatientReg /> },
          { path: "due-collection", element: <Due /> },
          { path: "statement", element: <Statement /> },
          { path: "search-patient-info", element: <Patientinfo /> },
          { path: "refferel-doctor", element: <RefferelDoctor /> },
          { path: "outdoor-income", element: <OutdoorIncome /> },
          { path: "periodical-report", element: <PeriodicalReport /> },
          {
            path: "periodical-statement-report",
            element: <PeriodicalStatementReport />,
          },
          { path: "user-wise-collection", element: <UserWiseCollection /> },
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
          { path: "analytics", element: <AdminDashboard /> },
          { path: "typography", element: <Typhography /> },
          { path: "patients", element: <AdminPatients /> },
          { path: "accounts", element: <AdminAccounts /> },
          { path: "doctors", element: <AdminDoctors /> },
          { path: "pathology", element: <AdminPathology /> },
          { path: "connections", element: <AdminConnections /> },
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
