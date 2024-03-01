/** @format */

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerIconPath = process.env.PUBLIC_URL + '/OB-movie.png';

  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to='/'>
          <img
            className='header__icon'
            src={headerIconPath}
            alt='Header Icon'
          />
        </Link>
      </div>
      <div className='headerRight'>
        <Link to='/movies/popular' style={{ textDecoration: 'none' }}>
          <span>Popular</span>
        </Link>
        <Link to='/movies/top_rated' style={{ textDecoration: 'none' }}>
          <span>TopRated</span>
        </Link>
        <Link to='/movies/upcoming' style={{ textDecoration: 'none' }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
