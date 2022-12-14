import * as yup from 'yup';
import { RegisterSchema, LoginSchema } from 'types/typings';

export const registerSchema: yup.SchemaOf<RegisterSchema> = yup.object().shape({
  firstname: yup.string().required('First name is required.'),
  lastname: yup.string().required('Last name is required.'),
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
  location: yup.string(),
  occupation: yup.string(),
  picture: yup
    .mixed()
    .test(
      'fileSize',
      'The file is too large.',
      (value: File) => value?.size <= 1048576
    )
});

export const loginSchema: yup.SchemaOf<LoginSchema> = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.')
});
