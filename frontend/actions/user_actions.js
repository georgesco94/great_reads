import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_RECOMMENDATION = 'RECEIVE_RECOMMENDATION';

export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers().then( (users) => (
    dispatch(receiveUsers(users))
  ));
};
export const getRecommendation = () => dispatch => {
  return APIUtil.getRecommendation().then( (book) => (
    dispatch(receiveRecommendation(book))
  ));
};


export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveRecommendation = books => ({
  type: RECEIVE_RECOMMENDATION,
  books
});
