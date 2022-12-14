import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import RegisterForm from 'components/forms/Register';
import { ThemeOptions } from 'types/typings';

const Register = () => {
  const theme = useTheme<ThemeOptions>();
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  return (
    <Box>
      <Box
        width="100%"
        bgcolor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialPeople
        </Typography>
      </Box>

      <Box
        width={!isMobileScreen ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        bgcolor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          mb="1.5rem"
          textAlign="center"
        >
          Create an account on SocialPeople!
        </Typography>

        <RegisterForm />
      </Box>
    </Box>
  );
};

export default Register;
