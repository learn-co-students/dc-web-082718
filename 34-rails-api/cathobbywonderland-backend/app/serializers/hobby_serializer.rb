class HobbySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :cats
end
