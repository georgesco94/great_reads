import * as APIUtil from '../util/book_api_util';
import {RECEIVE_SESSION_ERRORS} from './session_actions';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_SEARCH_BOOKS = 'RECEIVE_SEARCH_BOOKS';


export const fetchBooks = (offset) => dispatch => {
  return APIUtil.fetchBooks(offset).then(books => (
    dispatch(receiveBooks(books))
  ));
};

export const fetchShelfBooks = (shelfId) => dispatch => {
  return APIUtil.fetchShelfBooks(shelfId).then(books => (
    dispatch(receiveBooks(books))
  ));
};

export const fetchBook = (id) => dispatch => {
  return APIUtil.fetchBook(id).then(book => (
    dispatch(receiveBook(book))
  ));
};

export const searchBooks = (searchQuery) => dispatch => {
  return APIUtil.searchBooks(searchQuery).then(books => (
    dispatch(receiveSearchBooks(books))
  ));
};

export const fetchRandom = (num) => dispatch => {
  return APIUtil.fetchRandom(num).then(books => (
    dispatch(receiveSearchBooks(books))
  ));
};


export const createBook = (book) => dispatch => {
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

export const receiveSearchBooks = books => ({
  type: RECEIVE_SEARCH_BOOKS,
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
