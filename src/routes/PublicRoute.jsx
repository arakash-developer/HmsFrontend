// routes/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (user?.role === "admin") return <Navigate to="/dashboard/admin" />;
  if (user?.role === "superadmin") return <Navigate to="/dashboard/superadmin" />;

  return <Outlet />;
};

export default PublicRoute;
