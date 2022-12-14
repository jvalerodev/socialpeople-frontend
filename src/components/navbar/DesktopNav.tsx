import { Dispatch, SetStateAction } from 'react';
import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery
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
import useApp from 'hooks/useApp';
import { ThemeOptions } from 'types/typings';

interface Props {
  theme: ThemeOptions;
  isMobileMenuToggled: boolean;
  setIsMobileMenuToggled: Dispatch<SetStateAction<boolean>>;
}

const DesktopNav = ({
  theme,
  isMobileMenuToggled,
  setIsMobileMenuToggled
}: Props) => {
  const { user, handleMode, logout } = useApp();
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;

  const fullName = `${user?.firstname} ${user?.lastname}`;

  return (
    <>
      {!isMobileScreen ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={handleMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            )}
          </IconButton>

          <Message sx={{ fontSize: '25px' }} />

          <Notifications sx={{ fontSize: '25px' }} />

          <Help sx={{ fontSize: '25px' }} />

          <FormControl variant="standard" defaultValue={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem'
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutralLight
                }
              }}
              input={<InputBase />}
            >
              <MenuItem defaultValue={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>

              <MenuItem onClick={logout}>Logout</MenuItem>
            </Select>
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
