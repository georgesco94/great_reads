import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import NavBar from '../nav_bar/nav_bar';


const LoginPage = () => (
  <main className="login-signup-page">
    <div className="nav-and-form">
      <div className="ui-content">
        <NavBar />
        <SessionFormContainer />
      </div>
    </div>
  </main>
);

export default LoginPage;
