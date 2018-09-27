class BloggersController < ApplicationController

  def new
    @blogger = Blogger.new
  end
end
