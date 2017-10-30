import React from 'react';
import { Link,withRouter } from 'react-router-dom';

export const BookIndexItem = ({book}) => {

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
              <button className="status-button">Status</button>
              <button className="change-status-button">
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
              </button>
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
