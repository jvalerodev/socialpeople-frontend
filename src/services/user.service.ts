import { isAxiosError } from 'axios';
import axiosClient from 'config/axios/axios';
import { GetUserRes, LoginRes, LoginSchema, RegisterRes } from 'types/typings';

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
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
