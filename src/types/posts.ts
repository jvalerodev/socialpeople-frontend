import { Post } from './typings';

export type PostsRes = {
  posts: Post[];
  ok: boolean;
};

export type LikeBody = {
  userId: string;
};

export type PostRes = {
  post: Post;
  ok: boolean;
};
