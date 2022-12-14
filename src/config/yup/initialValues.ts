import { RegisterSchema, LoginSchema } from 'types/typings';

export const initialValuesRegister: RegisterSchema = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  location: '',
  occupation: '',
  picture: undefined
};

export const initialValuesLogin: LoginSchema = {
  email: '',
  password: ''
};
