import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // Or a nice spinner from components/ui
  }

  if (!user) {
    return <Navigate to="/welcome" state={{ from: location }} replace />;
  }

  return children;
}
