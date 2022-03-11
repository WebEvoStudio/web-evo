import React, {useEffect, useState} from 'react';
import './Basic.Layout.scss';
const _ = require('lodash');

/**
 * Basic Layout
 * @return {JSX.Element}
 */
export default function BasicLayout(): JSX.Element {
  return (
    <div>
      {/*{useLocation().pathname !== '/' ? <Header/> : null}*/}
      <main>
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
  // const pathname: string = '/' + useLocation().pathname.split('/')[1];
  const pathname: string = '/';
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
          // <Link className={`link ${pathname === link.path? 'active':''}`}
          //   key={index}
          //   to={link.path}
          //   onClick={() => window.innerWidth < 575? setNavExpandedState(): null}
          // >{link.name}</Link>
            1
        ))}
      </nav>
      {
        window.innerWidth < 575 ?
            <div className={'menu'} onClick={setNavExpandedState}>=</div> : null
      }
    </header>
  );
}
