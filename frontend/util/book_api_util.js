export const fetchBooks = (offset) => (
  $.ajax(
    {
      method: "GET",
      url: "api/books",
      data: {offset:offset}
    }
  )
);

export const fetchBook = (id) => (
  $.ajax(
    {
      method: "GET",
      url: `api/books/${id}`,
    }
  )
);
