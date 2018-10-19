class HobbiesController < ApplicationController
  def index
    render json: Hobby.all
  end

  def show
    render json: Hobby.find(params[:id])
  end
end
