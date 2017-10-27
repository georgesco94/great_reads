import React from 'react';


export const BookIndexItem = ({book}) => {
  return (
      <div className="book-item-box">

          <div className="image-column">
              <div className="book-image">
                <img src={book.image_url}/>
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
                    <button className="status-button">Status</button>
                    <button className="change-status-button"><i class="fa fa-sort-desc" aria-hidden="true"></i></button>
                </div>

                <div className="book-description">
                  {book.description}
                </div>
            </div>

      </div>
  );
};
