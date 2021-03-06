import * as APIUtil from '../util/status_api_util';
export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES';



export const createStatus = (status,shelfId) => dispatch => {

  return APIUtil.createStatus(status,shelfId).then(status => (
    dispatch(receiveStatus(status))
  )
  );
};


export const updateStatus = (status) => dispatch => {

  return APIUtil.updateStatus(status).then(status => (
    dispatch(receiveStatus(status))
  )
  );
};

export const deleteStatus = (id) => dispatch => {

  return APIUtil.updateStatus(id).then(statuses => (
    dispatch(receiveStatuses(statuses))
  )
  );
};


export const fetchStatuses = (id) => dispatch => {
  return APIUtil.fetchStatuses(id).then(statuses => (
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
