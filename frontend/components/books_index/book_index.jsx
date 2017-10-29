import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BookIndexItem} from './book_index_item';

class BooksIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {offset:0};
  }

  componentDidMount(){
    this.props.fetchBooks(this.state.offset);
  }

  render(){
    const books = this.props.books.map(book => (
      <ul className="book-item-wrapper">
        <BookIndexItem book={book} />
      </ul>
    ));

    return (
      <div className="column-wrapper">
        <div className="user-info-column"></div>

        <div className="books-index-column">
          {books}
        </div>

        <div className="recommendations-column"></div>

      </div>
    )

  }


}


export default withRouter(BooksIndex);
