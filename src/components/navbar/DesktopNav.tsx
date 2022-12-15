import { Dispatch, SetStateAction } from 'react';
import {
  IconButton,
  InputBase,
  Typography,
  MenuItem,
  FormControl,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu
} from '@mui/icons-material';
import FlexBetween from 'components/styles/FlexBetween';
import { useApp, useAuth } from 'hooks';
import { InputSelect } from './styles';
import { ThemeOptions } from 'types/typings';

interface Props {
  isMobileMenuToggled: boolean;
  setIsMobileMenuToggled: Dispatch<SetStateAction<boolean>>;
}

const DesktopNav = ({ isMobileMenuToggled, setIsMobileMenuToggled }: Props) => {
  const { user, logout } = useAuth();
  const { handleMode } = useApp();

  const { palette } = useTheme<ThemeOptions>();

  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  const dark = palette.neutral.dark;

  const fullName = `${user?.firstname} ${user?.lastname}`;

  return (
    <>
      {!isMobileScreen ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={handleMode}>
            {palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            )}
          </IconButton>

          <Message sx={{ fontSize: '25px' }} />

          <Notifications sx={{ fontSize: '25px' }} />

          <Help sx={{ fontSize: '25px' }} />

          <FormControl variant="standard" defaultValue={fullName}>
            <InputSelect
              value={fullName}
              input={<InputBase />}
              palette={palette}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>

              <MenuItem onClick={logout}>Logout</MenuItem>
            </InputSelect>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
    </>
  );
};

export default DesktopNav;
