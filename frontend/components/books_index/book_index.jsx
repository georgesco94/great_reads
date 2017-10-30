import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BookIndexItem} from './book_index_item';

class BooksIndex extends React.Component{
  constructor(props){
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks(this.props.books.length);
    window.addEventListener('scroll',this.fetchMore);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.fetchMore);
  }

  fetchMore() {
    let off = this.props.books.length;
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)  {
      this.props.fetchBooks(off);
    }
  }

  render() {
    const books = this.props.books.map(book => (
        <BookIndexItem book={book} />
    ));

    return (
      <div className="column-wrapper">
        <div className="user-info-column"></div>

        <div className="books-index-column">
          {books}
        </div>

        <div className="recommendations-column"></div>

      </div>
    );

  }


}


export default withRouter(BooksIndex);
