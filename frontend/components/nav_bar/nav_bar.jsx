import React from 'react';
import NavLoginFormContainer from './nav_login_form/nav_login_form_container';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="nav-bar">
        <Link className="nav-link-img" to={`/`}>
          <div className="logo"></div>
        </Link>
        <NavLoginFormContainer />
      </nav>
  );
};

export default NavBar;
