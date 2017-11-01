import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};

export const updateReview = (review) => dispatch => {
  return APIUtil.updateReview(review).then(review => (
    dispatch(receiveReview(review))
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};




export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


const receiveReviewErrors = errors => (
  {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  }
);
