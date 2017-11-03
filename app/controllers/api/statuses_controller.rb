class Api::StatusesController < ApplicationController

  def index
    @statuses = Status.all()
  end

  def create

    @status = Status.new(status_params)
    if @status.save
      if @status.status == "read"

        Review.create(user_id: status_params[:user_id] , book_id: status_params[:book_id], review: "")
      end
      render 'api/statuses/show'
    else
      render json: @status.errors.full_messages, status: 422
    end
  end

  def update
    @status = Status.where( { book_id: status_params[:book_id] , user_id: status_params[:user_id] } ).first
    if @status.update(status_params)
      render 'api/statuses/show'
    else
      render json: @status.errors.full_messages, status: 422
    end
  end

  def status_params
    params.require(:status).permit(:user_id, :book_id, :status)
  end

end
