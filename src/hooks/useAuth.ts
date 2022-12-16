import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormikHelpers } from 'formik';
import { setLogout, setLogin } from 'state';
import { UserService } from 'services';
import { AppState, LoginSchema, RegisterSchema } from 'types/typings';

const useAuth = () => {
  const user = useSelector((state: AppState) => state.user);
  const token = useSelector((state: AppState) => state.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setLogout());
  };

  const register = async (
    values: RegisterSchema,
    actions: FormikHelpers<RegisterSchema>
  ) => {
    const formData = new FormData();

    Object.entries(values).forEach((item) => {
      formData.append(item[0], item[1]);
    });

    const picturePath = values.picture?.name || '';
    formData.append('picturePath', picturePath);

    const savedUser = await UserService.register(formData);

    if (savedUser) {
      actions.resetForm();
      navigate('/');
    }
  };

  const login = async (
    values: LoginSchema,
    actions: FormikHelpers<LoginSchema>
  ) => {
    const loggedUser = await UserService.login(values);

    if (loggedUser) {
      dispatch(
        setLogin({
          user: loggedUser.user,
          token: loggedUser.token
        })
      );
      actions.resetForm();
      navigate('/home');
    }
  };

  const getUser = async () => {
    if (!user || !token) return;

    const data = await UserService.getUser(user._id, token);
    return data?.user;
  };

  return { user, token, logout, register, login, getUser };
};

export default useAuth;
