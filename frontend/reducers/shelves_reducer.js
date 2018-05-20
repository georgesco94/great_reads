import merge from 'lodash/merge';

import {RECEIVE_SHELVES,RECEIVE_SHELF} from '../actions/shelf_actions';
import {RECEIVE_ASSIGNMENT} from '../actions/shelve_assignments_actions';



const ShelvesReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_SHELVES:
      return action.shelves;
    case RECEIVE_SHELF:
      return merge({}, state, {[action.shelf.id]: action.shelf});
    default:
      return state;
  }
};


export default ShelvesReducer;
