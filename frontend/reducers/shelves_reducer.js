import merge from 'lodash/merge';

import {RECEIVE_SHELVES} from '../actions/shelf_actions';



const ShelvesReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_SHELVES:
      return action.shelves;
    default:
      return state;
  }
};


export default ShelvesReducer;
