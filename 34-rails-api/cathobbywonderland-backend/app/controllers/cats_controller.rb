class CatsController < ApplicationController
  def index
    render json: Cat.all
  end

  def show
    render json: Cat.find(params[:id])
  end

  def create
    render json: Cat.create(cat_params)
  end

  def cat_params
    params.require(:cat).permit(:name, :picture, :breed, :quote)
  end

  def update
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id])
  end

  def destroy
    render json: Cat.find(params[:id]).destroy
  end

end
