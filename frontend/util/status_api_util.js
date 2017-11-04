export const createStatus = (status) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/statuses`,
      data: {status:status}
    }
  );
};

export const updateStatus = (status) => {
  return $.ajax(
    {
      method: "PATCH",
      url: `api/statuses/${status.book_id}`,
      data: {status:status}
    }
  );
};


export const fetchStatuses = (id) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/statuses`,
      data: {id:id}
    }
  );
};
