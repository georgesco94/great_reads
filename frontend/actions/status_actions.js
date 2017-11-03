import * as APIUtil from '../util/status_api_util';
export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES';



export const createStatus = (status) => dispatch => {

  return APIUtil.createStatus(status).then(status => (
    dispatch(receiveStatus(status))
  )
  );
};


export const fetchStatuses = () => dispatch => {

  return APIUtil.fetchStatuses().then(statuses => (
    dispatch(receiveStatuses(statuses))
  )
  );
};


export const receiveStatus = status => ({
  type: RECEIVE_STATUS,
  status
});

export const receiveStatuses = statuses => ({
  type: RECEIVE_STATUSES,
  statuses
});
