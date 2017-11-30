import {combineReducers} from 'redux';
import BooksReducer from './books_reducer';
import ReviewsReducer from './reviews_reducer';
import UsersReducer from './users_reducer';
import StatusesReducer from './statuses_reducer';
import ShelvesReducer from './shelves_reducer';
import AssignmentsReducer from './shelve_assignments_reducer';


export default combineReducers(
  {
    books: BooksReducer,
    reviews: ReviewsReducer,
    statuses: StatusesReducer,
    users: UsersReducer,
    shelves: ShelvesReducer,
    assignments: AssignmentsReducer
  }
);
