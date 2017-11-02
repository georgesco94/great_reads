export const createStatus = (status) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/statuses`,
      data: status
    }
  );
};
