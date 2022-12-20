import { Dispatch, SetStateAction } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  MenuItem,
  FormControl,
  useTheme
} from '@mui/material';
import {
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Close
} from '@mui/icons-material';
import { FlexBetween } from 'components/styles';
import { useApp, useAuth } from 'hooks';
import { InputSelect } from './styles';
import { ThemeOptions } from 'types/typings';

interface Props {
  isMobileMenuToggled: boolean;
  setIsMobileMenuToggled: Dispatch<SetStateAction<boolean>>;
}

const MobileNav = ({ isMobileMenuToggled, setIsMobileMenuToggled }: Props) => {
  const { user, logout } = useAuth();
  const { handleMode } = useApp();

  const { palette } = useTheme<ThemeOptions>();

  const dark = palette.neutral.dark;
  const background = palette.background.default;

  const fullName = `${user?.firstname} ${user?.lastname}`;

  return (
    <Box
      position="fixed"
      right="0"
      bottom="0"
      height="100%"
      zIndex="10"
      maxWidth="500px"
      minWidth="300px"
      bgcolor={background}
    >
      <Box display="flex" justifyContent="flex-end" p="1rem">
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Close />
        </IconButton>
      </Box>

      <FlexBetween
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="3rem"
      >
        <IconButton onClick={handleMode} sx={{ fontSize: '25px' }}>
          {palette.mode === 'dark' ? (
            <LightMode sx={{ fontSize: '25px' }} />
          ) : (
            <DarkMode sx={{ color: dark, fontSize: '25px' }} />
          )}
        </IconButton>

        <Message sx={{ fontSize: '25px' }} />

        <Notifications sx={{ fontSize: '25px' }} />

        <Help sx={{ fontSize: '25px' }} />

        <FormControl variant="standard" defaultValue={fullName}>
          <InputSelect value={fullName} input={<InputBase />} palette={palette}>
            <MenuItem value={fullName}>
              <Typography>{fullName}</Typography>
            </MenuItem>

            <MenuItem onClick={logout}>Logout</MenuItem>
          </InputSelect>
        </FormControl>
      </FlexBetween>
    </Box>
  );
};

export default MobileNav;
