import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { AppState } from 'types/typings';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './themeData';

interface Props {
  children: React.ReactElement;
}

const Theme = ({ children }: Props) => {
  const mode = useSelector((state: AppState) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
