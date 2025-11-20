import { useAuth } from "@contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { temptoken, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // If there is no valid token, redirect to the login page
  if (!temptoken) {
    return <Navigate to="/" />;
  }

  // If allowedRoles is specified, check if user has the required role
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(temptoken?.token?.role)
  ) {
    // Redirect to appropriate dashboard based on user role
    if (temptoken?.token?.role === "admin") return <Navigate to="/admin" />;
    if (temptoken?.token?.role === "receiption")
      return <Navigate to="/receiption" />;
    if (temptoken?.token?.role === "superadmin")
      return <Navigate to="/superadmin" />;

    // If role doesn't match any known role, redirect to login
    return <Navigate to="/" />;
  }

  return <Outlet />; // If user is valid and has required role, show the protected content
};

export default ProtectedRoute;
