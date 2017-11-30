class Api::ShelvesController < ApplicationController
  def index
    @shelves = Shelf.all()
    if (params[:id])
      @shelves = Shelf.where({user_id: (params[:id]).to_i})
    end
    render :index
  end


  def create
    @shelf = Shelf.new(shelf_params)
    if @shelf.save

      render 'api/shelves/show'
    else
      render json: @status.errors.full_messages, status: 422
    end
  end


  def shelf_params
    params.require(:shelf).permit(:name, :user_id)
  end
end
