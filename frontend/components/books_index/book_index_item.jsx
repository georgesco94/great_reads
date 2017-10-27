import React from 'react';


export const BookIndexItem = ({book}) => {

  return (
      <div className="book-item-box">

          <div className="image-column">
              <div className="book-image">

              </div>
          </div>

          <div className="book-info-column">
              <div className="book-title">
                {book.title}
              </div>
              <div className="book-author">
                by {book.author}
              </div>
              <div className="book-status">
                {book.status}
              </div>
              <div className="book-description">
            </div>
        </div>

      </div>
  );
};
