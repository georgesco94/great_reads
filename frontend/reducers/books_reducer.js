import merge from 'lodash/merge';

import {RECEIVE_BOOKS,RECEIVE_BOOK} from '../actions/book_actions';



const BooksReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});
    default:
      return state;
  }
};


export default BooksReducer;
