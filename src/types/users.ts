import { User } from './typings';

export type GetUserRes = {
  user: User;
  ok: boolean;
};

type Friends = {
  _id?: string;
  firtsname?: string;
  lastname?: string;
  occupation?: string;
  location?: string;
  picturePath?: string;
};

export type GetFriendsRes = {
  friends: Friends[];
  ok: boolean;
};
