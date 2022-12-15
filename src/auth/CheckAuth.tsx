import useApp from 'hooks/useApp';
import { Navigate, Outlet } from 'react-router-dom';

const CheckAuth = () => {
  const { user, token } = useApp();

  return user && token ? <Navigate to="/home" /> : <Outlet />;
};

export default CheckAuth;
