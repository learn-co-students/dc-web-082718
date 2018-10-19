class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :picture
      t.string :breed
      t.string :quote
      t.integer :lives
      t.timestamps
    end
  end
end
