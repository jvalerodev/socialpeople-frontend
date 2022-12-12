import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import FlexBetween from 'components/styles/FlexBetween';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { ThemeOptions } from 'types/typings';

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const isMobileScreen = useMediaQuery('(max-width: 1000px)');

  const theme = useTheme<ThemeOptions>();
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween padding="1rem 6%" bgcolor={alt}>
      {/* SIDE LEFT */}
      <Logo theme={theme} />

      {/* DESKTOP NAV */}
      <DesktopNav
        theme={theme}
        isMobileMenuToggled={isMobileMenuToggled}
        setIsMobileMenuToggled={setIsMobileMenuToggled}
      />

      {/* MOBILE NAV */}
      {isMobileScreen && isMobileMenuToggled && (
        <MobileNav
          theme={theme}
          isMobileMenuToggled={isMobileMenuToggled}
          setIsMobileMenuToggled={setIsMobileMenuToggled}
        />
      )}
    </FlexBetween>
  );
};

export default Navbar;
