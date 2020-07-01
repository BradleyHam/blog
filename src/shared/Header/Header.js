import React, { useState } from 'react';
import { Link } from '@reach/router';
import './Header.scss';

const Header = () => {
  const [active, setActive] = useState('blog');

  return (
    <div className="Header">
      <div className="Header__content">
        <div className="Header__title">
          <h1>Living the simple life</h1>
          <p>A blog exploring minimalism in life</p>
        </div>
        <nav className="Header__nav">
          <ul>
            <Link to="/" onClick={() => { setActive('home'); }}>
              <li className={active === 'home' && 'active'}>Home</li>
            </Link>
            <Link to="/about" onClick={() => { setActive('about'); }}>
              <li className={active === 'about' && 'active'}>About Me</li>
            </Link>
            <Link to="/blog" onClick={() => { setActive('blog'); }}>
              <li className={active === 'blog' && 'active'}>Blog Posts</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
