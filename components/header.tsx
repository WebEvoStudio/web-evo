import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import style from './header.module.scss';
import variables from '../styles/variables.module.scss';
const _ = require('lodash');
/**
 * Header component
 * @constructor
 */
const Header = () => {
  const links: any[] = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/portfolio', name: 'Portfolio'},
    {path: '/blog', name: 'Blog'},
    {path: '/contact', name: 'Contact'},
  ];
  const pathname = `/${useRouter().pathname.split('/')[1]}`;
  console.log(pathname);
  const [state, setState] = useState({
    navExpandedState: false,
  });
  const setNavExpandedState = () => setState(
      {navExpandedState: !state.navExpandedState},
  );
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth > 575) {
        setState({navExpandedState: true});
      } else {
        setState({navExpandedState: false});
      }
    };
    resize();
    window.addEventListener('resize', _.debounce(resize, 150));
  }, []);
  return (
    <header className={style.header}>
      <nav className={style.nav} style={{display: state.navExpandedState? 'flex': 'none'}}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
          >
            <span className={style.link} style={{color: pathname === link.path? variables.primaryColor:''}} onClick={() => window.innerWidth < 575? setNavExpandedState(): null}>
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;
