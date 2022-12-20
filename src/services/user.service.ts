import { isAxiosError } from 'axios';
import axiosClient from 'config/axios/axios';
import {
  GetFriendsRes,
  GetUserRes,
  LoginRes,
  LoginSchema,
  PostRes,
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
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const { posts } = data;
      return posts;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  getFeedPosts: async (token: string) => {
    try {
      const { data } = await axiosClient.get<PostsRes>('/api/posts', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { posts } = data;
      return posts;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  getUserPosts: async (userId: string, token: string) => {
    try {
      const { data } = await axiosClient.get<PostsRes>(`/api/posts/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { posts } = data;
      return posts;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  patchFriend: async (userId: string, friendId: string, token: string) => {
    try {
      const { data } = await axiosClient.patch<GetFriendsRes>(
        `/api/users/${userId}/${friendId}`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const { friends } = data;
      return friends;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  patchLike: async (postId: string, userId: string, token: string) => {
    try {
      const { data } = await axiosClient.patch<PostRes>(
        `/api/posts/${postId}/like`,
        { userId },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const { post } = data;
      return post;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  },

  getFriends: async (userId: string, token: string) => {
    try {
      const { data } = await axiosClient.get<GetFriendsRes>(
        `/api/users/${userId}/friends`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const { friends } = data;
      return friends;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.msg);
      }
    }
  }
};
