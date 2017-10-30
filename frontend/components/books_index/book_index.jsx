import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BookIndexItem} from './book_index_item';

class BooksIndex extends React.Component{
  constructor(props){
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchBooks(0);
    window.addEventListener('scroll',this.fetchMore);
  }

  componentWillUnmount() {
    debugger
    window.removeEventListener('scroll',this.fetchMore);
  }

  fetchMore() {
    let off = this.props.books.length;
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)  {
      debugger
      this.props.fetchBooks(off);
    }
  }

  render() {
    debugger
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
