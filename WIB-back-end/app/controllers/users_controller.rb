class UsersController < ApplicationController
  def create
    byebug
  end

  def show
    byebug
    user = User.find_by(id: params[:id])
    render json: user
  end

  def user_params
    params.require(:user).permit(:username, :email)
  end
end
