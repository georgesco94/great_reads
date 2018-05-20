class Api::UsersController < ApplicationController

  def index
    @users= User.all()
    render :index
  end


  def create
    @user = User.new(user_params)
    if @user.save

      read_shelf = Shelf.create!(name:"read", user_id:@user.id)
      toread = Shelf.create!(name:"To-Read", user_id:@user.id)
      currread = Shelf.create!(name:"currently-reading", user_id:@user.id)

      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def get_recommendation
    @books = current_user.get_recommended_books
    render 'api/books/index'
  end



  def user_params
    params.require(:user).permit(:username, :password, :email, :image)
  end
end
