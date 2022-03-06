import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import About from '../pages/About';
import Hello from '../pages/Hello';
import './Basic.Layout.scss';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
const _ = require('lodash');

/**
 * Basic Layout
 * @return {JSX.Element}
 */
export default function BasicLayout(): JSX.Element {
  return (
    <div>
      {useLocation().pathname !== '/' ? <Header/> : null}
      <main>
        <Routes>
          <Route path={'/'} element={<Hello/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </div>
  );
}

/**
 * Header
 * @return {JSX.Element}
 */
function Header() {
  const links: any[] = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/portfolio', name: 'Portfolio'},
    {path: '/blog', name: 'Blog'},
    {path: '/contact', name: 'Contact'},
  ];
  const pathname: string = useLocation().pathname;
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
    <header>
      <nav style={{display: state.navExpandedState? 'flex': 'none'}}>
        {links.map((link, index) => (
          <Link className={`link ${pathname === link.path? 'active':''}`}
            key={index}
            to={link.path}
          >{link.name}</Link>
        ))}
      </nav>
      {
        window.innerWidth < 575 ?
            <div className={'menu'} onClick={setNavExpandedState}>=</div> : null
      }
    </header>
  );
}
