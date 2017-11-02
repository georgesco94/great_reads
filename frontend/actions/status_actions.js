import * as APIUtil from '../util/status_api_util';
export const RECEIVE_STATUS = 'RECEIVE_STATUS';



export const createStatus = (status) => dispatch => {
  return APIUtil.createStatus(status).then(status => (
    dispatch(receiveStatus(status))
  )
  );
};


export const receiveStatus = status => ({
  type: RECEIVE_STATUS,
  status
});
