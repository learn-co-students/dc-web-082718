class Blogger < ApplicationRecord
  ### associations
  has_many :posts
  has_many :destinations, through: :posts

  ### validations
  # Bloggers should have unique names
  

  # and ages above 0


  #and their bio should be over 30 characters long.


end
