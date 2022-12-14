import { isAxiosError } from 'axios';
import axiosClient from 'config/axios/axios';
import { LoginRes, LoginSchema, RegisterRes } from 'types/typings';

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
      console.log(error);
    }
  }
};
