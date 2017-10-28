import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './login_page/login_page';
import { Provider } from 'react-redux';
import NavLoginFormContainer from './nav_bar/nav_login_form/nav_login_form_container';
import BookIndexContainer from './books_index/book_index_container';

const App = (props) => {
  return (
    <div id="App">
      {
        !props.loggedIn ? (
          <LoginPage />
        ) : (
            <div className="logged-overall">
              <NavLoginFormContainer logged={"true"} />
              <BookIndexContainer />
            </div>
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
