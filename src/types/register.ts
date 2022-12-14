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

export type RegisterRes = {
  user: User;
  ok: boolean;
};
