import React from 'react';
import './Hello.scss';
import {Link} from 'react-router-dom';
/**
 * @class Hello
 * @extends React.Component
 */
export default class Hello extends React.Component<any, any> {
  /**
   * render the component
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className='hello'>
        <div>
          <span>Hello, I`m 董军.</span>
        </div>
        <div>
          <span>I`m a full stack web developer.</span>
        </div>
        <div>
          <Link to={'/about'}>
            <button className='action'>View my work</button>
          </Link>
        </div>
      </div>
    );
  }
}
