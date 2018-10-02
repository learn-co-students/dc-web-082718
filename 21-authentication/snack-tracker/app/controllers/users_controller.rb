class UsersController < ApplicationController
  def new
    # render form for making new user
    @user = User.new
  end

  def create
    # process logic to create the user
    @user = User.new(user_params)

    if @user.valid?
        @user.save
        session[:user_id] = @user.id
        redirect_to snacks_path
    else 
        render :new
    end

  end

  private

    def user_params
        params.require(:user).permit(
            :username, :password, :password_confirmation)
    end
end
