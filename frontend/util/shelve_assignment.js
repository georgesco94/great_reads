export const updateAssignment = (assignment,assignmentId) => {
  return $.ajax(
    {
      method: "PATCH",
      url: `api/shelve_assignments/${assignment.book_id}`,
      data: {assignment:assignment,assignmentId:assignmentId}
    }
  );
};
export const deleteAssignment = (id) => {
  return $.ajax(
    {
      method: "DELETE",
      url: `api/shelve_assignments/${id}`,
    }
  );
};
export const fetchAssignments = (userId) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/shelve_assignments`,
      data: {userId:userId}
    }
  );
};
