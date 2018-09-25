class AddRetailerToSnacks < ActiveRecord::Migration[5.2]
  def change
    add_column :snacks, :retailer_id, :integer
  end
end
