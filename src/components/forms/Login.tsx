import { Box, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'config/yup/schemas';
import { initialValuesLogin } from 'config/yup/initialValues';
import useApp from 'hooks/useApp';
import { BottomText, FormContainer, SubmitButton } from './styles';
import { LoginSchema, ThemeOptions } from 'types/typings';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useApp();

  const { palette } = useTheme<ThemeOptions>();
  const isMobileScreen = useMediaQuery('(max-width: 600px)');

  const formik = useFormik<LoginSchema>({
    initialValues: initialValuesLogin,
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      await login(values, actions);
    }
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm
  } = formik;

  const register = () => {
    resetForm();
    navigate('/register');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer isMobileScreen={isMobileScreen}>
        {/* INPUTS */}
        <TextField
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={Boolean(touched.email) && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: 'span 4' }}
        />

        <TextField
          label="Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          name="password"
          type="password"
          error={Boolean(touched.password) && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          sx={{ gridColumn: 'span 4' }}
        />
      </FormContainer>

      {/* BUTTONS */}
      <Box>
        <SubmitButton fullWidth type="submit" palette={palette}>
          Login
        </SubmitButton>

        <BottomText palette={palette} onClick={register}>
          Don't have an account? Create one!
        </BottomText>
      </Box>
    </form>
  );
};

export default LoginForm;
