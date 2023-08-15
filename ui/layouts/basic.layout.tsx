'use client';
import React, {useEffect, useState} from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import {
  HomeRounded, ArticleRounded, SourceRounded, HomeRepairServiceRounded, ContactMailRounded,
} from '@mui/icons-material';
import {usePathname, useRouter} from 'next/navigation';
import styles from './basic-layout.module.css';
import theme from '../../core/themes/theme';
import Header from '../header';
import Image from 'next/image';
import {Images} from '../../core/libs/images';
import Link from 'next/link';
import '../../styles/rainbow.css';

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
  const Footer = () => {
    const connects: any[] = [
      // {icon: <MdiWechat fontSize={24}/>},
      // {icon: <MdiQqchat fontSize={24}/>},
    ];
    return (
      <footer>
        <Box sx={{
          borderTop: 2,
          paddingTop: '20px',
          borderColor: 'divider',
          display: 'flex',
          flexDirection: {xs: 'column-reverse', md: 'column'},
          alignItems: 'center',
        }}>
          <Link href={'/'}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Image src={Images.undrawDeveloperActivity} width={56} alt={'Web Evo Logo'}/>
              <Box sx={{ml: 1, textAlign: 'center'}}>
                <Typography fontWeight={'bold'} fontSize={18} color={'primary'}>WebEvo</Typography>
                <Typography fontWeight={'bold'}>STUDIO</Typography>
              </Box>
            </Box>
          </Link>
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            {connects.map((it, i) => (
              <Box key={i} sx={{width: '20%', textAlign: 'center', mb: 1}}>
                {it.icon}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{mt: 2, display: 'flex', justifyContent: 'center'}}>
          {/* eslint-disable-next-line max-len */}
          <a href="https://www.digitalocean.com/?refcode=691dc5c1ac63&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
            {/* eslint-disable-next-line max-len */}
            <img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" />
          </a>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: {xs: 2, md: 3.5}, pb: 3}}>
          <Typography textAlign={'center'} fontSize={14}>© 2023, Web Evo All Rights Reserved</Typography>
          <Link href={'/privacy-policy'}>
            <Typography color={'primary'} textAlign={'center'} fontSize={14}>Privacy Policy</Typography>
          </Link>
        </Box>
      </footer>
    );
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {!isPwa ? <Header /> : null}
        {children}
        <TabBar/>
        <Footer />
      </ThemeProvider>
    </>
  );
}
