import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_REVIEW} from '../actions/review_actions';



const SessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case RECEIVE_REVIEW:
      let newReviewId = action.review.id;
      let newState = merge({}, state);
      newState.currentUser.reviewIds.push(newReviewId);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
