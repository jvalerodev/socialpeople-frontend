import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from 'state';
import { AppState } from 'types/typings';

const useApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);

  const handleMode = () => {
    dispatch(setMode());
  };

  const logout = () => {
    dispatch(setLogout());
  };

  return { user, handleMode, logout };
};

export default useApp;
