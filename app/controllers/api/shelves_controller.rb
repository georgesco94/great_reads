class Api::ShelvesController < ApplicationController
  def index
    @shelves = Shelf.all()
    if (params[:id])
      @shelves = Shelf.where({user_id: (params[:id]).to_i})
    end
    render :index
  end

end
