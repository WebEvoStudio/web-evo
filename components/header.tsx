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
  const [navExpandedState, setNavExpandedState] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(600);
  useEffect(() => {
    const resize = () => {
      setWindowInnerWidth(window.innerWidth);
    };
    resize();
    window.addEventListener('resize', _.debounce(resize, 150));
    return () => {
      window.removeEventListener('resize', _.debounce(resize, 150));
    };
  }, []);
  useEffect(() => {
    if (windowInnerWidth > 575) {
      setNavExpandedState(true);
    } else {
      setNavExpandedState(false);
    }
  }, [windowInnerWidth]);
  return (
    <header className={style.header}>
      <nav className={style.nav} style={{display: navExpandedState? 'flex': 'none'}}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
          >
            <span className={style.link} style={{color: pathname === link.path? variables.primaryColor:''}} onClick={() => window.innerWidth < 575? setNavExpandedState(!navExpandedState): null}>
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
      {windowInnerWidth < 575 ? <div className={style['menu']} onClick={() => setNavExpandedState(!navExpandedState)}>=</div> : null}
    </header>
  );
};
export default Header;
