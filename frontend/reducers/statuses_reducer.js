import merge from 'lodash/merge';

import {RECEIVE_STATUS, RECEIVE_STATUSES} from '../actions/status_actions';



const StatusesReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_STATUS:
      return merge({}, state, {[action.status.id]: action.status});
    case RECEIVE_STATUSES:
      return action.statuses;
    default:
      return state;
  }
};


export default StatusesReducer;
