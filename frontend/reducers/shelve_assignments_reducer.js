import merge from 'lodash/merge';

import {RECEIVE_ASSIGNMENT, RECEIVE_ASSIGNMENTS} from '../actions/shelve_assignments_actions';



const AssignmentsReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_ASSIGNMENTS:
      return action.assignments;
    case RECEIVE_ASSIGNMENT:
      return merge({}, state, {[action.assignment.id]: action.assignment});
    default:
      return state;
  }
};


export default AssignmentsReducer;
