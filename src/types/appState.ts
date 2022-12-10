import { User, Post, Friends } from './typings';

export type AppState = {
  mode: string;
  user: User | null;
  token: string | null;
  posts: Post[];
};

export type SetLogin = {
  user: User;
  token: string;
};

export type SetFriends = {
  friends: Friends[];
};

export type SetPosts = {
  posts: Post[];
};

export type SetPost = {
  post: Post;
};
