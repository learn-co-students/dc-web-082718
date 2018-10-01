class PostsController < ApplicationController

  def new
    @post = Post.new
    # byebug
  end

  def create
    @post = Post.create(strong_params)
    @post.update(likes: 0)
    # alternatively:
    # @post.likes = 0
    # @post.save
    redirect_to post_path(@post)
  end

  def show
    @post = Post.find(params[:id])


  end

  def update_likes
    byebug
    @post = Post.find(params[:id])
    updated_likes = @post.likes + 1
    @post.update(likes: updated_likes)
    redirect_to post_path(@post)
  end

  private

  def strong_params
    params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
  end
end
