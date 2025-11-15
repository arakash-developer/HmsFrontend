// routes/PublicRoute.jsx
import { useAuth } from "@contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { temptoken, loading } = useAuth();
  // console.log(temptoken.token);

  if (loading) return <div>Loading...</div>;

  if (temptoken?.token?.role == "admin") return <Navigate to="/admin" />;
  if (temptoken?.token?.role == "receiption")
    return <Navigate to="/receiption" />;

  return <Outlet />;
};

export default PublicRoute;
