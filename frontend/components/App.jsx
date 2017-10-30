import React from 'react';
import { connect, Provider } from 'react-redux';

import NavLoginFormContainer from './nav_bar/nav_login_form/nav_login_form_container';
import BookIndexContainer from './books_index/book_index_container';
import BookShowContainer from './book_show/book_show_container';
import LoginPage from './login_page/login_page';
import { withRouter } from 'react-router';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = (props) => {
  return (
    <div id="App">
      {
        !props.loggedIn ? (
          <LoginPage />
        ) : (
            <div className="logged-overall">
                <NavLoginFormContainer logged={"true"} />
                <Route path="/books/:bookId" component={BookShowContainer} />
                <Route exact path="/" component={BookIndexContainer} />
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



export default withRouter(connect(mapStateToProps)(App));
