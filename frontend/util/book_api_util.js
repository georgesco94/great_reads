export const fetchBooks = (offset) => (
  $.ajax(
    {
      method: "GET",
      url: "api/books",
      data: {offset:offset}
    }
  )
);

export const fetchBook = (id) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/books/${id}`,
    }
  );
};
