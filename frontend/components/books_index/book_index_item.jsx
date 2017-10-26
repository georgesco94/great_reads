import React from 'react';


export const BookIndexItem = ({book}) => {

  return (
      <li>
        <h1>{book.title}</h1>
        <h1>{book.description}</h1>
        <h1>{book.author}</h1>
      </li>
  );
};
