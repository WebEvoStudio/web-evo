'use client';
import React, {useEffect, useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Box, CssBaseline, Paper, ThemeProvider} from '@mui/material';
import {
  HomeRounded, ArticleRounded, SourceRounded, HomeRepairServiceRounded, ContactMailRounded,
} from '@mui/icons-material';
import {usePathname, useRouter} from 'next/navigation';
import styles from './basic-layout.module.css';
import theme from '../core/themes/theme';
import Header from '../ui/header';

/**
 * basic.layout.tsx
 * @param {any} children
 * @constructor
 * @return {JSX.Element}
 */
export default function BasicLayout({children}: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPwa, setIsPwa] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    console.log(router);
    // setIsPwa(
    //     ['fullscreen', 'standalone', 'minimal-ui'].some(
    //         (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches,
    //     ),
    // );
  }, []);
  useEffect(() => {
    const path = `/${pathname?.split('/')[1]}`;
    const index = ['/', '/blogs', '/docs', '/tools', '/contact'].indexOf(path);
    setCurrent(index);
  }, [router]);
  const TabBar = () => {
    if (isPwa) {
      return (
        <Box>
          <Paper
            className={styles['bottom-button']}
            sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}}
            elevation={3}>
            <BottomNavigation showLabels value={current}>
              <BottomNavigationAction
                label="首页"
                icon={<HomeRounded />}
                onClick={() => router.push('/')}
              />
              <BottomNavigationAction
                label="博客"
                icon={<ArticleRounded />}
                onClick={() => router.push('/blogs')}
              />
              <BottomNavigationAction
                label="文档"
                icon={<SourceRounded />}
                onClick={() => router.push('/docs')}
              />
              <BottomNavigationAction
                label="工具"
                icon={<HomeRepairServiceRounded />}
                onClick={() => router.push('/tools')}
              />
              <BottomNavigationAction
                label="联系"
                icon={<ContactMailRounded />}
                onClick={() => router.push('/contact')}
              />
            </BottomNavigation>
          </Paper>
          <Box className={styles['bottom-button']} sx={{width: '100%', height: '100px'}}/>
        </Box>
      );
    }
    return null;
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {!isPwa ? <Header /> : null}
        {children}
        <TabBar/>
      </ThemeProvider>
    </>
  );
}
