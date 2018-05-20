import merge from 'lodash/merge';

import {RECEIVE_SESSION_ERRORS,RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_REVIEWS} from '../actions/review_actions';
import {RECEIVE_SEARCH_BOOKS} from '../actions/book_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case  RECEIVE_SEARCH_BOOKS:
      return [];
    case  RECEIVE_REVIEWS:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
