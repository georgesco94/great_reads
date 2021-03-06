import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


export const fetchReviews = (id) => dispatch => {
  return APIUtil.fetchReviews(id).then( (reviews) => (
    dispatch(receiveReviews(reviews))
  ));
};


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

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});


const receiveReviewErrors = errors => (
  {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  }
);
