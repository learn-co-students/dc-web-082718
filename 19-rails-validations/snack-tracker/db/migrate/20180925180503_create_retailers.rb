class CreateRetailers < ActiveRecord::Migration[5.2]
  def change
    create_table :retailers do |t|
      t.string :name
      t.integer :year_established

      t.timestamps
    end
  end
end
