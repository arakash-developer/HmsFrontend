// routes/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

const PublicRoute = () => {
  const { temptoken, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (temptoken) return <Navigate to="/admin" />;
  // if (temptoken?.role === "superadmin") return <Navigate to="/superadmin" />;

  return <Outlet />;
};

export default PublicRoute;
