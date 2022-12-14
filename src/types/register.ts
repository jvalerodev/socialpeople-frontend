import { User } from './typings';

export type RegisterSchema = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  location?: string;
  occupation?: string;
  picture?: File;
};

export type LoginSchema = {
  email: string;
  password: string;
};

export type RegisterRes = User & {
  ok: boolean;
};

export type LoginRes = User & {
  token: string;
  ok: boolean;
};
