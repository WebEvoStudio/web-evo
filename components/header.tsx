import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Modules from './header.module.scss';
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
  return (
    <header className={Modules.header}>
      <nav className={'nav'} style={{display: state.navExpandedState? 'flex': 'none'}}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
          >
            <div className={`link ${pathname === link.path? 'active':''}`} onClick={() => window.innerWidth < 575? setNavExpandedState(): null}>
              {link.name}
            </div>
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;
