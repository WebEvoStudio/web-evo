import React, {useState} from 'react';
import Link from 'next/link';
import style from './header.module.scss';
import variables from '../styles/variables.module.scss';
import {
  AppBar,
  Box, Button,
  Drawer,
  Fab, Fade,
  IconButton, List,
  ListItem,
  ListItemText, Toolbar,
  useScrollTrigger,
  Zoom,
} from '@mui/material';
import {KeyboardArrowUp, Menu as MenuIcon} from '@mui/icons-material';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {usePathname, useRouter} from 'next/navigation';
import MainSearch from '../components/main-search';
/**
 * Header component
 * @constructor
 */
const Header = () => {
  const pathname = usePathname();
  const links: any[] = [
    {path: '/blogs', name: '博客'},
    {path: '/about', name: '关于'},
    {path: '/support-us', name: '支持'},
    {path: '/contact', name: '联系'},
    // {path: '/about', name: 'About'},
    // {path: '/portfolio', name: 'Portfolio'},
    // {path: '/courses', name: '课程'},
    // {path: '/docs', name: '文档'},
    // {path: '/tools', name: '工具'},
  ];
  const pathName = `/${pathname?.split('/')[1]}`;
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
  const toContact = () => {
    router.push('/contact');
  };
  const appBarStyle = {color: 'white', backgroundColor: '#121212'};
  const getTouch = () => {
    const isShowing = pathName !== '/contact';
    return (
      <Fade in={isShowing}>
        <Button
          variant={'outlined'}
          size={'small'}
          sx={{
            borderRadius: '1rem',
            fontSize: '12px',
            visibility: isShowing ? 'visible' : 'hidden',
            color: 'var(--vp-c-brand)',
            borderColor: 'var(--vp-c-brand)',
          }}
          onClick={() => toContact()}
        >取得联系</Button>
      </Fade>
    );
  };
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" sx={appBarStyle} elevation={0}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: {xs: 'row-reverse', sm: 'row'},
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            {getTouch()}
          </Box>
          <Link href={'/'}>
            <Box sx={{display: 'flex', alignItem: 'center', mr: {xs: 0, sm: 2}}}>
              <Box sx={{display: {xs: 'flex', sm: 'none'}, alignItems: 'center', mr: 1}}>
                <Image width={24} src={Images.undrawDeveloperActivity} alt={'开发进行中'}/>
              </Box>
              <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                <Image width={50} src={Images.undrawDeveloperActivity} alt={'开发进行中'}/>
              </Box>
              <Box sx={{display: {xs: 'flex', sm: 'none'}, alignItems: 'center'}}>Web Evo</Box>
            </Box>
          </Link>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <nav className={style.nav}>
              {links.map((link, index) => (
                <Link key={index} href={link.path}>
                  <span
                    className={style.link}
                    style={{color: pathName === link.path? variables.primaryColor:'white'}}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </Box>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <MainSearch/>
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}} />
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
                router.push(link.path);
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
