import {combineReducers} from 'redux';
import BooksReducer from './books_reducer';
import ReviewsReducer from './reviews_reducer';
import UsersReducer from './users_reducer';


export default combineReducers(
  {
    books: BooksReducer,
    reviews: ReviewsReducer,
    users: UsersReducer
  }
);
