class Api::UsersController < ApplicationController
  before_action :ensure_login

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      debugger
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end



  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
