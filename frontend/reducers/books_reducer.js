import merge from 'lodash/merge';

import {RECEIVE_BOOKS,RECEIVE_BOOK} from '../actions/book_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';



const BooksReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};


export default BooksReducer;
