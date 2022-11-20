'use client';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { useMemo } from 'react';

type ThemeProviderProps = React.PropsWithChildren;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(() => createTheme(), []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
