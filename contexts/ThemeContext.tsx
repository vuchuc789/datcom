'use client';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { useMemo } from 'react';
import { Recursive } from '@next/font/google';

const recursive = Recursive({
  subsets: ['latin', 'vietnamese'],
});

type ThemeProviderProps = React.PropsWithChildren;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        typography: { fontFamily: `${recursive.style.fontFamily}, sans-serif` },
      }),
    []
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
