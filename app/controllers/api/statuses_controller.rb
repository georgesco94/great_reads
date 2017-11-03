class Api::StatusesController < ApplicationController

  def index
    @statuses = Status.all()
  end

  def create
    @status = Status.new(status_params)
    if @status.save
      render 'api/statuses/show'
    else
      render json: @status.errors.full_messages, status: 422
    end
  end


  def status_params
    params.require(:status).permit(:user_id, :book_id, :status)
  end

end
