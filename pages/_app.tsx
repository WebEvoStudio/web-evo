import React from 'react';
import '../styles/globals.css';
import {AppProps} from 'next/app';
import BasicLayout from '../layouts/basic.layout';
import '../styles/index.scss';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from '../core/themes/theme';
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from '../core/unit/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * @param {AppProps} props
 * @constructor
 * @return {JSX.Element}
 */
function MyApp(props: MyAppProps) {
  const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <BasicLayout>
          {/* Google Analytics*/}
          <GoogleAnalytics measurementId={'G-YKCPHDYK53'}/>
          <CssBaseline/>
          <Component {...pageProps} />
        </BasicLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
