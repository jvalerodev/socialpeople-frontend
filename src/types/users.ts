import { User, Friends } from './typings';

export type GetUserRes = {
  user: User;
  ok: boolean;
};

export type GetFriendsRes = {
  friends: Friends[];
  ok: boolean;
};
