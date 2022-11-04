import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import style from './header.module.scss';
import variables from '../styles/variables.module.scss';
import {
  AppBar,
  Box,
  Drawer,
  Fab,
  IconButton, List,
  ListItem,
  ListItemText, Toolbar,
  useScrollTrigger,
  Zoom,
} from '@mui/material';
import {KeyboardArrowUp, Menu as MenuIcon} from '@mui/icons-material';
import MainSearch from './main-search';
import Image from 'next/image';
import {Images} from '../core/libs/images';
/**
 * Header component
 * @constructor
 */
const Header = () => {
  const links: any[] = [
    // {path: '/about', name: 'About'},
    // {path: '/portfolio', name: 'Portfolio'},
    // {path: '/courses', name: '课程'},
    {path: '/blogs', name: '博客'},
    // {path: '/docs', name: '文档'},
    // {path: '/tools', name: '工具'},
    {path: '/contact', name: '联系'},
  ];
  const pathname = `/${useRouter().pathname.split('/')[1]}`;
  const [drawerState, setDrawerState] = useState(false);
  const router = useRouter();
  const ScrollTop = ({window, children}: {window?: () => Window, children: React.ReactElement}) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#back-to-top-anchor');
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
    return (
      <Zoom in={trigger}>
        <Box
          role="presentation"
          sx={{position: 'fixed', bottom: 16, right: 16}}
          onClick={handleClick}
        >{children}</Box>
      </Zoom>
    );
  };
  const appBarStyle = {color: 'white', backgroundColor: 'rgba(0,176,255,0.7)', backdropFilter: 'blur(10px)'};
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" sx={appBarStyle}>
        <Toolbar>
          <Link href={'/'}>
            <a>
              <Box sx={{width: 50, display: 'flex', alignItem: 'center', mr: 2}}>
                <Image src={Images.undrawDeveloperActivity} alt={'开发进行中'}/>
              </Box>
            </a>
          </Link>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <nav className={style.nav}>
              {links.map((link, index) => (
                <Link key={index} href={link.path}>
                  <a
                    className={style.link}
                    style={{color: pathname === link.path? variables.primaryColor:''}}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </Box>
          <MainSearch/>
          <Box sx={{flexGrow: 1}} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display: {xs: 'flex', sm: 'none'}, ml: 0}}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <Drawer
        anchor={'top'}
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <Box>
          <List>
            {links.map((link, index) => (
              <ListItem key={index} button onClick={() => {
                router.push(link.path).then();
                setDrawerState(false);
              }}>
                <ListItemText>{link.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{position: 'fixed', zIndex: 1}}>
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp sx={{color: '#fff'}}/>
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  );
};
export default Header;
