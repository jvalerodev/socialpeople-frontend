import { Dispatch, SetStateAction } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import {
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Close
} from '@mui/icons-material';
import FlexBetween from 'components/styles/FlexBetween';
import useApp from 'hooks/useApp';
import { ThemeOptions } from 'types/typings';

interface Props {
  theme: ThemeOptions;
  isMobileMenuToggled: boolean;
  setIsMobileMenuToggled: Dispatch<SetStateAction<boolean>>;
}

const MobileNav = ({
  theme,
  isMobileMenuToggled,
  setIsMobileMenuToggled
}: Props) => {
  const { user, handleMode, logout } = useApp();

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;

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
              padding: '0.25rem 1rem',
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
    </Box>
  );
};

export default MobileNav;
