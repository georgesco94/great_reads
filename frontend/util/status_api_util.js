export const createStatus = (status) => {
  debugger
  return $.ajax(
    {
      method: "POST",
      url: `api/statuses`,
      data: {status:status}
    }
  );
};

export const fetchStatuses = () => {
  return $.ajax(
    {
      method: "GET",
      url: `api/statuses`
    }
  );
};
