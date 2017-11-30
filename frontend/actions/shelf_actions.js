import * as APIUtil from '../util/shelf_api_util';
export const RECEIVE_SHELVES = 'RECEIVE_SHELVES';
export const RECEIVE_SHELF = 'RECEIVE_SHELF';


export const fetchShelves = (id) => dispatch => {
  debugger
  return APIUtil.fetchShelves(id).then(shelfs => (
    dispatch(receiveShelves(shelfs))
  ));
};

export const createShelf = (shelf) => dispatch => {
  debugger
  return APIUtil.createShelf(shelf).then(shelf => (
    dispatch(receiveShelf(shelf))
  ));
};



export const receiveShelves = shelves => ({
  type: RECEIVE_SHELVES,
  shelves
});

export const receiveShelf = shelf => ({
  type: RECEIVE_SHELF,
  shelf
});
