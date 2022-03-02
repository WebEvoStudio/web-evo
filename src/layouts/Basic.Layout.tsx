import React from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import About from "../pages/About";
import Hello from "../pages/Hello";
import './Basic.Layout.scss';

export default function BasicLayout() {
  return (
      <div>
        {useLocation().pathname !== '/' ? <Header/> : null}
        <main>
          <Routes>
            <Route path={'/'} element={<Hello/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </main>
      </div>
  );
}
function Header() {
  const links: any[] = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/portfolio', name: 'Portfolio'},
    {path: '/blog', name: 'Blog'},
    {path: '/contact', name: 'Contact'},
  ];
  const pathname: string = useLocation().pathname;
  return (
      <header>
        <nav>
          {links.map((link, index) => (
              <Link className={`link ${pathname === link.path? 'active':''}`}
                    key={index}
                    to={link.path}
              >{link.name}</Link>
          ))}
        </nav>
      </header>
  );
}
