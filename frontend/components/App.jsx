import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './login_page/login_page';
import { Provider } from 'react-redux';

const App = (props) => {
  return (
    <div id="App">
      {
        !props.loggedIn ? (
          <LoginPage />
        ) : (
          <h1>Loggedin </h1>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser
  };
};



export default connect(mapStateToProps)(App);
