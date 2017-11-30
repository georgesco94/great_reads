import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import BookStatusContainer from '../book_status/book_status_container';

export const SearchResultItem = ({book,review}) => {
  if(book){
    return (
      <div className="result-item">
        <div className="book-hold">
          <Link to={`/books/${book.id}`}>
            <img className="search-cover" src={book.image_url}/>
          </Link>

          <div className="hold">
            <Link to={`/books/${book.id}`}>
              <h1>{book.title}</h1>
            </Link>
            <Link to={`/books/${book.id}`}>
              <p className="book-author">{book.author}</p>
            </Link>
          </div>
        </div>

        <div className="book-status">
          <BookStatusContainer book={book} />
        </div>

      </div>
    );
  }else{
    return "";
  }
};
