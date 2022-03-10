import React from 'react';
import Header from '../components/header';

/**
 * basic.layout.tsx
 * @param {any} children
 * @constructor
 * @return {JSX.Element}
 */
export default function BasicLayout({children}: any) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
