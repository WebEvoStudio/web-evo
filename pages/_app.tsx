import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import BasicLayout from '../layouts/basic.layout';
import '../src/index.scss';
/**
 * @param {AppProps} props
 * @param {any} Component
 * @param {any} pageProps
 * @constructor
 * @return {JSX.Element}
 */
function MyApp({Component, pageProps}: AppProps) {
  return (
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
  );
}

export default MyApp;
