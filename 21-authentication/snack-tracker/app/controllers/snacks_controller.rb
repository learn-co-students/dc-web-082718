class SnacksController < ApplicationController

  before_action(:find_snack, {only: [:edit, :update, :show, :destroy]})

  # helper_method :hello
  
  # def hello
  #   "hello everyone"
  # end

  def index
    # favorite_id = cookies["favorite"]
    # @my_favorite_snack = Snack.find(favorite_id)
    @snacks = Snack.all
    # render "index"
  end

  def show
    # cookies["favorite"] = @snack.id
  end

  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.create(snack_params)
    if @snack.errors
      render :new
    else
      redirect_to @snack
    end
  end

  def edit

  end

  def update
    @snack.update(snack_params)
    if @snack.errors
      render :edit
    else
      redirect_to @snack
    end
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
