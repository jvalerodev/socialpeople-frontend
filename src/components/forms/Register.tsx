import { useState } from 'react';
import { Box, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from 'config/yup/schemas';
import { initialValuesRegister } from 'config/yup/initialValues';
import useApp from 'hooks/useApp';
import Message from 'components/alert';
import Dropzone from './Dropzone';
import { BottomText, FormContainer, SubmitButton } from './styles';
import { RegisterSchema, ThemeOptions } from 'types/typings';

const RegisterForm = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { register } = useApp();

  const { palette } = useTheme<ThemeOptions>();
  const isMobileScreen = useMediaQuery('(max-width: 600px)');

  const formik = useFormik<RegisterSchema>({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      await register(values, actions);
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

  const login = () => {
    resetForm();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer isMobileScreen={isMobileScreen}>
        {/* INPUTS */}
        <TextField
          label="First name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstname}
          name="firstname"
          error={Boolean(touched.firstname) && Boolean(errors.firstname)}
          helperText={touched.firstname && errors.firstname}
          sx={{ gridColumn: 'span 2' }}
        />

        <TextField
          label="Last name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastname}
          name="lastname"
          error={Boolean(touched.lastname) && Boolean(errors.lastname)}
          helperText={touched.lastname && errors.lastname}
          sx={{ gridColumn: 'span 2' }}
        />

        <TextField
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={Boolean(touched.email) && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: 'span 2' }}
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
          sx={{ gridColumn: 'span 2' }}
        />

        {error && (
          <Message
            type="error"
            text="The image must have a maximum weight of 1 Mb and be of type JPG, JPEG or PNG."
          />
        )}

        <Box
          gridColumn="span 4"
          border={`1px solid ${palette.neutral.medium}`}
          borderRadius="5px"
          p="1rem"
        >
          <Dropzone formik={formik} setError={setError} />
        </Box>

        <TextField
          label="Location"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.location}
          name="location"
          sx={{ gridColumn: 'span 4' }}
        />

        <TextField
          label="Occupation"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.occupation}
          name="occupation"
          sx={{ gridColumn: 'span 4' }}
        />
      </FormContainer>

      {/* BUTTONS */}
      <Box>
        <SubmitButton fullWidth type="submit" palette={palette}>
          Register
        </SubmitButton>

        <BottomText palette={palette} onClick={login}>
          Already have an account? Log in.
        </BottomText>
      </Box>
    </form>
  );
};

export default RegisterForm;
