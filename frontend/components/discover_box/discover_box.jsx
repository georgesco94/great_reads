import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {DiscoverBoxBook} from './discover_box_book';

class DiscoverBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRandom(7);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBooks(this.state.search).then(
      () => this.props.history.push('/search'));
  }

  render() {
    let books = this.props.books.map( (book) => {
        return <DiscoverBoxBook key={book.id} book={book}/>;
      });
    return (
      <div className="discover-box">

        <div className="discover-text">
            <div className="text-div">
              <h1 className="header-discover">Deciding what to read next?</h1>
              <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
            </div>
            <div>
              <h1 className="header-discover">What are your friends reading?</h1>
              <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
            </div>
        </div>

        <div className="discover-books">
          <h1 className="header-discover">What will you discover?</h1>
          <div className="book-row">
            {books}
          </div>
        </div>

        <div className="discover-search">
          <form onSubmit={this.handleSubmit}>
              <h1>Search and Browse Books</h1>
              <div className="search-wrap">
                <input onChange={this.update("search")} type="text" className="search-input" placeholder="Author/Title" />
                <input className="search-submit" type="submit" value="" />
              </div>
          </form>
        </div>


      </div>

    );
  }

}

export default withRouter(DiscoverBox);
