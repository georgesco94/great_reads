import * as APIUtil from '../util/shelve_assignment';

export const RECEIVE_ASSIGNMENT = 'RECEIVE_ASSIGNMENT';
export const RECEIVE_ASSIGNMENTS = 'RECEIVE_ASSIGNMENTS';


export const updateAssignment = (assignment,id) => dispatch => {

  return APIUtil.updateAssignment(assignment,id).then(assignment => (
    dispatch(receiveAssignment(assignment))
  )
  );
};
export const fetchAssignments = (userId) => dispatch => {

  return APIUtil.fetchAssignments(userId).then(assignments => (
    dispatch(receiveAssignments(assignments))
  )
  );
};


export const receiveAssignment = assignment => ({
  type: RECEIVE_ASSIGNMENT,
  assignment
});

export const receiveAssignments = assignments => ({
  type: RECEIVE_ASSIGNMENTS,
  assignments
});
