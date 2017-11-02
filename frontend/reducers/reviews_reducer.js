import merge from 'lodash/merge';

import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';



const ReviewsReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_REVIEW:
      let newState = merge({},state);
      return Object.assign(newState,action.review);
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};


export default ReviewsReducer;
