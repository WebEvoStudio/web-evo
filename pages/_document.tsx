import React from 'react';
import {Html, Main, NextScript, Head} from 'next/document';

/**
 * Document
 * @constructor
 */
export default function Document() {
  return (
    <Html lang={'zh-CN'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
