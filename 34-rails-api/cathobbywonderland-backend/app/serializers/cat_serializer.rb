class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :breed, :quote
  has_many :hobbies
end
