import merge from 'lodash/merge';

import {RECEIVE_RECOMMENDATION} from '../actions/user_actions';



const RecommendationReducer = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_RECOMMENDATION:
      let newState = merge({},state);
      return Object.assign(newState,action.books);
    default:
      return state;
  }
};


export default RecommendationReducer;
