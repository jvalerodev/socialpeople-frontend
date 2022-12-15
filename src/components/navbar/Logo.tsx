import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { FlexBetween } from 'components/styles';
import { ThemeOptions } from 'types/typings';

const Logo = () => {
  const navigate = useNavigate();
  const theme = useTheme<ThemeOptions>();

  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  const neutralLight = theme.palette.neutral.light;
  const primaryLight = theme.palette.primary.light;

  return (
    <FlexBetween gap="1.75rem">
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate('/home')}
        sx={{
          '&:hover': {
            color: primaryLight,
            cursor: 'pointer'
          }
        }}
      >
        SocialPeople
      </Typography>

      {!isMobileScreen && (
        <FlexBetween
          bgcolor={neutralLight}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />

          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      )}
    </FlexBetween>
  );
};

export default Logo;
