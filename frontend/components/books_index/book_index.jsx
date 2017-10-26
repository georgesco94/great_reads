import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BookIndexItem} from './book_index_item';

class BooksIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBooks();
  }

  render(){
    debugger
    const books = this.props.books.map(book => (
      <BookIndexItem book={book} />
    ));

    return (
      <div className="column-wrapper">
        <div className="user-info-column"></div>

        <div className="books-index-column">

          <ul className="temp-books">
            {books}
          </ul>

        </div>

        <div className="recommendations-column"></div>

      </div>
    )

  }


}


export default withRouter(BooksIndex);
