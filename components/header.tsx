import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import style from './header.module.scss';
import variables from '../styles/variables.module.scss';
import {
  alpha,
  AppBar,
  Box,
  Drawer,
  Fab,
  IconButton, InputBase,
  List,
  ListItem,
  ListItemText, styled,
  Toolbar,
  useScrollTrigger,
  Zoom,
} from '@mui/material';
import {KeyboardArrowUp, Menu as MenuIcon, Search as SearchIcon} from '@mui/icons-material';
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
  const Search = styled('div')(({theme}) => ({
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {backgroundColor: alpha(theme.palette.common.white, 0.25)},
    'marginRight': theme.spacing(2),
    'marginLeft': 0,
    'width': '100%',
    [theme.breakpoints.up('sm')]: {marginLeft: theme.spacing(3), width: 'auto'},
  }));
  const SearchIconWrapper = styled('div')(({theme}) => ({
    position: 'absolute',
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({theme}) => ({
    'color': 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
              onKeyDown={({key, target}) => {
                const {value} = target as HTMLInputElement;
                if (key === 'Enter' && value) router.push(`/search?query=${value}`).then();
              }}
            />
          </Search>
          <Box sx={{flexGrow: 1}} />
        </Toolbar>
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp sx={{color: '#fff'}}/>
          </Fab>
        </ScrollTop>
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
    </Box>
  );
};
export default Header;
