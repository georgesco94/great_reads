import {combineReducers} from 'redux';
import BooksReducer from './books_reducer';


export default combineReducers(
  {
    books: BooksReducer
  }
);
