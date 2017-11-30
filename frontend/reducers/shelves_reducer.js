import merge from 'lodash/merge';

import {RECEIVE_SHELVES} from '../actions/shelf_actions';
import {RECEIVE_ASSIGNMENT} from '../actions/shelve_assignments_actions';



const ShelvesReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_SHELVES:
      return action.shelves;
    // case RECEIVE_ASSIGNMENT:
      // debugger
      // const bookId = action.assignment.book_id;
      // const shelfId = action.assignment.shelf_id;
      // Object.values(state).forEach( (shelf) => {
      //   for(var i = shelf.bookIds.length - 1; i >= 0; i--) {
      //     if(shelf.bookIds[i] === bookId) {
      //       shelf.bookIds.splice(i, 1);
      //     }
      //   }
      // });
      // let newState = merge({},state);
      // debugger
      // newState[action.assignment.shelf_id].bookIds.push(bookId);
      // return newState
    default:
      return state;
  }
};


export default ShelvesReducer;
