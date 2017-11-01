import React from 'react';
import { Link,withRouter } from 'react-router-dom';

export const SearchResultItem = ({book}) => {
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
            <h1>{book.author}</h1>
          </Link>
        </div>
      </div>

      <div className="book-status">
        <button className="status-button">Status</button>
        <button className="change-status-button">
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
        </button>
      </div>

    </div>
  );
};
