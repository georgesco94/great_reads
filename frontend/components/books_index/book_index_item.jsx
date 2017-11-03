import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import BookStatusContainer from '../book_status/book_status_container';

export const BookIndexItem = ({book}) => {
  debugger
  return (
    <div className="book-item-wrapper">
      <div className="book-item-box">

        <div className="book-item-content">

          <div className="image-column">
            <Link to={`/books/${book.id}`}>
              <img className="book-cover" src={book.image_url}/>
            </Link>
          </div>

          <div className="book-info-column">
            <div className="book-title">
              <Link to={`/books/${book.id}`}>
                {book.title}
              </Link>
            </div>
            <div className="book-author">
              by {book.author}
            </div>
            <div className="book-status">
              <BookStatusContainer book={book} />
              <div className="star-rating">Rate it</div>
            </div>

            <div className="book-description">
              <div className="description-text">
                {book.description}
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};
