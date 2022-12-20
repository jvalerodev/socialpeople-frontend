import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormikHelpers } from 'formik';
import { setLogout, setLogin, setPosts, setFriends, setPost } from 'state';
import { UserService } from 'services';
import { AppState, LoginSchema, RegisterSchema } from 'types/typings';

const useAuth = () => {
  const user = useSelector((state: AppState) => state.user);
  const token = useSelector((state: AppState) => state.token);
  const posts = useSelector((state: AppState) => state.posts);

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

  const getUser = async (userId: string) => {
    if (!token) return;

    const userRes = await UserService.getUser(userId, token);
    return userRes;
  };

  const handlePost = async (image: File | null, post: string) => {
    if (!user || !token) return;

    const formData = new FormData();
    formData.append('userId', user._id);
    formData.append('description', post);

    if (image) {
      formData.append('picture', image);
      formData.append('picturePath', image.name);
    }

    const posts = await UserService.sendPost(formData, token);

    if (posts) {
      dispatch(setPosts({ posts }));
    }
  };

  const getFeedPosts = async () => {
    if (!user || !token) return;

    const posts = await UserService.getFeedPosts(token);

    if (posts) {
      dispatch(setPosts({ posts }));
    }
  };

  const getUserPosts = async (userId: string) => {
    if (!user || !token) return;

    const posts = await UserService.getUserPosts(userId, token);

    if (posts) {
      dispatch(setPosts({ posts }));
    }
  };

  const patchFriend = async (friendId: string) => {
    if (!user || !token) return;

    const friends = await UserService.patchFriend(user._id, friendId, token);

    if (friends) {
      dispatch(setFriends({ friends }));
    }
  };

  const patchLike = async (postId: string) => {
    if (!user || !token) return;

    const updatedPost = await UserService.patchLike(postId, user._id, token);

    if (updatedPost) {
      dispatch(setPost({ post: updatedPost }));
    }
  };

  const getFriends = async (userId: string) => {
    if (!token) return;

    const friends = await UserService.getFriends(userId, token);

    if (friends) {
      dispatch(setFriends({ friends }));
    }
  };

  return {
    user,
    token,
    posts,
    logout,
    register,
    login,
    getUser,
    handlePost,
    getFeedPosts,
    getUserPosts,
    patchFriend,
    patchLike,
    getFriends
  };
};

export default useAuth;
