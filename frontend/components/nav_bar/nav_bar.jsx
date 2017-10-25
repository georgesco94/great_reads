import React from 'react';
import NavLoginFormContainer from './nav_login_form/nav_login_form_container';

const NavBar = () => (
  <div className="nav-bar">
    <h1 className="nav-logo">GreatReads</h1>
    <NavLoginFormContainer />
  </div>
);

export default NavBar;
