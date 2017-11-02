class Api::ShelvesController < ApplicationController
  def index
    @shelves = Shelf.all()
    render :index
  end

end
