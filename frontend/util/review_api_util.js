export const createReview = (review) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/reviews`,
      data: {review: review}
    }
  );
};
export const fetchReviews = (id) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/reviews`,
      data: {id:id}
    }
  );
};
export const updateReview = (review) => {
  return $.ajax(
    {
      method: "PATCH",
      url: `api/reviews/${review.book_id}`,
      data: {review: review}
    }
  );
};
