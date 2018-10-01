class Post < ApplicationRecord
  belongs_to :blogger
  belongs_to :destination
end
