import { useAuth } from 'hooks';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const { user, token } = useAuth();

  return user && token ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
