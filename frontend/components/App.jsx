import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './login_page/login_page';
import { Provider } from 'react-redux';
import NavLoginFormContainer from './nav_bar/nav_login_form/nav_login_form_container';
import BookIndexContainer from './books_index/book_index_container';
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
                <Switch>
                  <BookIndexContainer />
                  <Route path="/books/:bookId" component={NavLoginFormContainer} />
                </Switch>
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
