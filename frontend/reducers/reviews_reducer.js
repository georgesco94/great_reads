import merge from 'lodash/merge';

import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';



const ReviewsReducer = (state = {} , action) => {
  debugger
  switch(action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};


export default ReviewsReducer;
