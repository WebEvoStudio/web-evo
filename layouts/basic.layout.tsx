import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import {BottomNavigation, BottomNavigationAction, Box, Paper} from '@mui/material';
import {
  HomeRounded, ArticleRounded, SourceRounded, HomeRepairServiceRounded, ContactMailRounded,
} from '@mui/icons-material';
import {useRouter} from 'next/router';
import styles from '/styles/basic-layout.module.scss';

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
        <Box>
          <Paper className={styles['bottom-button']} sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
            elevation={3}>
            <BottomNavigation showLabels>
              <BottomNavigationAction label="首页" icon={<HomeRounded />} onClick={() => router.push('/')}/>
              <BottomNavigationAction label="博客" icon={<ArticleRounded />} onClick={() => router.push('/blogs')}/>
              <BottomNavigationAction label="文档" icon={<SourceRounded />} onClick={() => router.push('/docs')}/>
              <BottomNavigationAction
                label="工具" icon={<HomeRepairServiceRounded />} onClick={() => router.push('/tools')}/>
              <BottomNavigationAction label="联系" icon={<ContactMailRounded />} onClick={() => router.push('/contact')}/>
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
      {!isPwa ? <Header /> : null}
      {children}
      <TabBar/>
    </>
  );
}
