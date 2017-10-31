import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import NavBar from '../nav_bar/nav_bar';
import DiscoverBoxContainer from '../discover_box/discover_box_container';


const LoginPage = () => (
  <main className="login-signup-page">
    <div className="nav-and-form">
      <div className="ui-content">
        <NavBar />
        <SessionFormContainer />
        <DiscoverBoxContainer />
      </div>
    </div>
  </main>
);

export default LoginPage;
