import useApp from 'hooks/useApp';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const { user, token } = useApp();

  return user && token ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
