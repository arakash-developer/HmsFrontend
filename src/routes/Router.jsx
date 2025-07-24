import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Layout from "@layouts/Layout";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    // element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
