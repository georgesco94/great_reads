class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all()
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def review_params
    params.require(:review).permit(:review, :book_id, :user_id)
  end
end
