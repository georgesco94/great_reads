import * as APIUtil from '../util/shelf_api_util';
export const RECEIVE_SHELVES = 'RECEIVE_SHELVES';


export const fetchShelves = (id) => dispatch => {
  return APIUtil.fetchShelves(id).then(shelfs => (
    dispatch(receiveShelves(shelfs))
  ));
};



export const receiveShelves = shelves => ({
  type: RECEIVE_SHELVES,
  shelves
});
