import { User } from './typings';

export type LoginSchema = {
  email: string;
  password: string;
};

export type LoginRes = {
  user: User;
  token: string;
  ok: boolean;
};
