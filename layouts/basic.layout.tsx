import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import {Home} from '@mui/icons-material';
import {useRouter} from 'next/router';

/**
 * basic.layout.tsx
 * @param {any} children
 * @constructor
 * @return {JSX.Element}
 */
export default function BasicLayout({children}: any) {
  const router = useRouter();
  const [isPwa, setIsPwa] = useState(false);
  useEffect(() => {
    setIsPwa(
        ['fullscreen', 'standalone', 'minimal-ui'].some(
            (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches,
        ),
    );
  }, []);
  const TabBar = () => {
    if (isPwa) {
      return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="首页" icon={<Home />} onClick={() => router.push('/')}/>
            <BottomNavigationAction label="博客" icon={<Home />} onClick={() => router.push('/blogs')}/>
            <BottomNavigationAction label="文档" icon={<Home />} onClick={() => router.push('/docs')}/>
            <BottomNavigationAction label="工具" icon={<Home />} onClick={() => router.push('/tools')}/>
            <BottomNavigationAction label="联系" icon={<Home />} onClick={() => router.push('/contact')}/>
          </BottomNavigation>
        </Paper>
      );
    }
    return null;
  };
  return (
    <>
      {!isPwa ? <Header /> : null}
      {children}
      <TabBar/>
    </>
  );
}
