import React from 'react';
import { Link,withRouter } from 'react-router-dom';

export const DiscoverBoxBook = ({book}) => {

  return (
    <div className="discover-item">
      <Link to={`/books/${book.id}`}>
        <img className="book-cover" src={book.image_url}/>
      </Link>
    </div>
  );
};
