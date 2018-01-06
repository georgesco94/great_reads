class Api::StatusesController < ApplicationController

  def index
    @statuses = Status.all()
    if (params[:id])
      @statuses = Status.where({user_id: (params[:id]).to_i})
    end

  end

  def create
    @status = Status.new(status_params)
    if @status.save
      shelfId = params[:shelfId].to_i
      ShelveAssignment.create!(shelf_id: shelfId, book_id: @status.book_id)
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


  def destroy
    Status.find(params[:id]).destroy
    @statuses = Status.all()
    render 'api/statuses/index'
  end

  def status_params
    params.require(:status).permit(:user_id, :book_id, :status, :shelfId)
  end

end
