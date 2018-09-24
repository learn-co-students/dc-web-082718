class SnacksController < ApplicationController

  def index
    @snacks = Snack.all
  end

  def show
      @snack = Snack.find(params[:id])
  end

  def new
    @snack = Snack.new

  end

  def create
    # Snack.create(params[:snack])
    @snack = Snack.create(
        params.require(:snack).permit(
            :name,
            :deliciousness,
            :calories))
    redirect_to @snack
  end
end
