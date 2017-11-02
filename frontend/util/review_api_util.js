export const createReview = (review) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/reviews`,
      data: review
    }
  );
};
export const fetchReviews = (reviews) => {
  return $.ajax(
    {
      method: "GET",
      url: `api/reviews`,
      data: reviews
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
