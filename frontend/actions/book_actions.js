import * as APIUtil from '../util/book_api_util';
import {RECEIVE_SESSION_ERRORS} from './session_actions';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';


export const fetchBooks = (offset) => dispatch => {
  return APIUtil.fetchBooks(offset).then(books => (
    dispatch(receiveBooks(books))
  ));
};

export const fetchBook = (id) => dispatch => {
  return APIUtil.fetchBook(id).then(book => (
    dispatch(receiveBook(book))
  ));
};

export const createBook = (book) => dispatch => {
  debugger
  return APIUtil.createBook(book).then(book => (
    dispatch(receiveBook(book))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

const receiveErrors = errors => (
  {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
);
