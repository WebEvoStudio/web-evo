'use client';
import * as React from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from '../../core/themes/theme';
import NextAppDirEmotionCacheProvider from './emotion-cache';
import {SnackbarProvider} from 'notistack';

const ThemeRegistry = ({children}: { children: React.ReactNode }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <SnackbarProvider dense={true} maxSnack={1} autoHideDuration={3000} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
export default ThemeRegistry;
