import { isAxiosError } from 'axios';
import axiosClient from 'config/axios/axios';
import {
  GetUserRes,
  LoginRes,
  LoginSchema,
  PostsRes,
  RegisterRes
} from 'types/typings';

export const UserService = {
  register: async (formData: FormData) => {
    try {
      const { data } = await axiosClient.post<RegisterRes>(
        '/api/auth/register',
        formData
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  login: async (credentials: LoginSchema) => {
    try {
      const { data } = await axiosClient.post<LoginRes>(
        '/api/auth/login',
        credentials
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  getUser: async (userId: string, token: string) => {
    try {
      const { data } = await axiosClient.get<GetUserRes>(
        `/api/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const { user } = data;
      return user;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  sendPost: async (formData: FormData, token: string) => {
    console.log(token);
    try {
      const { data } = await axiosClient.post<PostsRes>(
        '/api/posts/post',
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { posts } = data;
      return posts;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  }
};
