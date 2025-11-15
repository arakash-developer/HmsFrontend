import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';

const ProtectedRoute = () => {
  const { temptoken } = useAuth();

  // If there is no valid token (user is null), redirect to the login page
  if (!temptoken) {
    return <Navigate to="/" />;
  }

  return <Outlet />; // If user is valid, show the protected content
};

export default ProtectedRoute;
