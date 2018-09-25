class SnacksController < ApplicationController

  before_action(:find_snack, {only: [:edit, :update, :show, :destroy]})

  def index
    @snacks = Snack.all
  end

  def show
  end

  def new
    @snack = Snack.new
  end

  def create
    # Snack.create(params[:snack])
    @snack = Snack.create(snack_params)
    redirect_to @snack
  end

  def edit
  end

  def update
    @snack.update(snack_params)
    redirect_to @snack
  end

  def destroy
    @snack.destroy
    redirect_to snacks_path
  end

  private

  def snack_params
    params.require(:snack).permit(
        :name,
        :deliciousness,
        :calories,
        :retailer_id)
  end

  def find_snack
    @snack = Snack.find(params[:id])
  end

end
