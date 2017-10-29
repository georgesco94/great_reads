import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';


export const fetchBooks = (offset) => dispatch => {
  debugger
  return APIUtil.fetchBooks(offset).then(books => (
    dispatch(receiveBooks(books))
  ));
};

export const fetchBook = (id) => dispatch => (
  APIUtil.fetchBook(id).then(book => (
    dispatch(receiveBook(book))
  ))
);


export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});
