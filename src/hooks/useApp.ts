import { useDispatch } from 'react-redux';
import { setMode } from 'state';

const useApp = () => {
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setMode());
  };

  return { handleMode };
};

export default useApp;
