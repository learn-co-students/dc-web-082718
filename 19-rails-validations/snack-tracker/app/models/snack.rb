class Snack < ApplicationRecord

    belongs_to :retailer
    validates :name, presence: true
    validates :calories, presence: true
    validates :deliciousness, presence: true
    
end
