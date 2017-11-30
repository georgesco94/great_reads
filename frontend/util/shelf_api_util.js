export const fetchShelves = (id) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/shelves`,
      data: {id:id}
    }
  );
};


export const createShelf = (shelf) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/shelves`,
      data: {shelf:shelf}
    }
  );
};
