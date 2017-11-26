export const fetchShelves = (id) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/shelves`,
      data: {id:id}
    }
  );
};
