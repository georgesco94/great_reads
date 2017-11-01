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

export const createBook = (book) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/books`,
      contentType: false,
      processData: false,
      data: book
    }
  );
};

export const searchBooks = (searchQuery) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/books`,
      data:{searchQuery:searchQuery}
    }
  );
};


export const fetchRandom = (num) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/books`,
      data:{num:num}
    }
  );
};
