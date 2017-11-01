export const createReview = (review) => {
  return $.ajax(
    {
      method: "POST",
      url: `api/reviews`,
      data: review
    }
  );
};
export const updateReview = (review) => {
  return $.ajax(
    {
      method: "PATCH",
      url: `api/reviews`,
      data: review
    }
  );
};
