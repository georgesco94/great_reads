import React from 'react';
import { connect, Provider } from 'react-redux';

import NavLoginFormContainer from './nav_bar/nav_login_form/nav_login_form_container';
import BookIndexContainer from './books_index/book_index_container';
import BookShowContainer from './book_show/book_show_container';
import BookCreateContainer from './book_create/book_create_container';
import SearchResultsContainer from './search_results/search_results_container';
import ReviewFormContainer from './review_form/review_form_container';
import BookShelfContainer from './bookshelfs/bookshelf_container';
import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer';
import UnlogContainer from './nav_bar/unlog_container';
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
  const isLoginPage = !props.loggedIn && props.location.pathname === "/";
  console.log(isLoginPage);
  return (

    <div id="App">
      {
        <div className="logged-overall">
          {!props.loggedIn ? (
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <UnlogContainer />
            </Switch>
          ) : (
            <NavLoginFormContainer logged={"true"} />
          )}
          <Switch>
            <Route path="/books/new" component={BookCreateContainer} />
            <Route path="/books/:bookId" component={BookShowContainer} />
            <Route path="/books" component={BookIndexContainer} />
            <Route path="/search" component={SearchResultsContainer} />
            <Route path="/review/:bookId/edit" component={ReviewFormContainer} />
            <Route path="/review/:bookId" component={ReviewFormContainer} />
            <Route path="/shelf/:userId" component={BookShelfContainer} />
          </Switch>
          {!isLoginPage ? <Footer />:""}
        </div>

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
