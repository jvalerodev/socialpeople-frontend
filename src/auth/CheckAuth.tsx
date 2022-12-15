import { useAuth } from 'hooks';
import { Navigate, Outlet } from 'react-router-dom';

const CheckAuth = () => {
  const { user, token } = useAuth();

  return user && token ? <Navigate to="/home" /> : <Outlet />;
};

export default CheckAuth;
