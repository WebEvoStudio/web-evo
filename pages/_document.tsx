import React from 'react';
import {Html, Main, NextScript, Head} from 'next/document';

/**
 * Document
 * @constructor
 */
export default function Document() {
  return (
    <Html lang={'zh-CN'}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
