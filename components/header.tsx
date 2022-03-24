import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import style from './header.module.scss';
import variables from '../styles/variables.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar} from '@mui/material';
/**
 * Header component
 * @constructor
 */
const Header = () => {
  const links: any[] = [
    {path: '/', name: 'Home'},
    // {path: '/about', name: 'About'},
    // {path: '/portfolio', name: 'Portfolio'},
    {path: '/blog', name: 'Blog'},
    {path: '/docs', name: 'Docs'},
    // {path: '/contact', name: 'Contact'},
  ];
  const pathname = `/${useRouter().pathname.split('/')[1]}`;
  const [drawerState, setDrawerState] = useState(false);
  const router = useRouter();
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" sx={{color: 'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display: {xs: 'flex', sm: 'none'}, mr: 2}}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon/>
          </IconButton>
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
          <Box sx={{flexGrow: 1}} />
        </Toolbar>
      </AppBar>
      <Toolbar/>
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
    </Box>
  );
};
export default Header;
