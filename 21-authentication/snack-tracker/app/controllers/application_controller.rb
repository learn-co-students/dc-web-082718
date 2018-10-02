class ApplicationController < ActionController::Base

    helper_method :current_user

  # memoization
    def current_user
        if @current_user
            @current_user
        elsif session[:user_id]
            @current_user = User.find_by(id: session[:user_id])
        else
            redirect_to login_path and return
        end
    end
end
