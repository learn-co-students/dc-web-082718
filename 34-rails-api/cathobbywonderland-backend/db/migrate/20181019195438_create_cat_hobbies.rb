class CreateCatHobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :cat_hobbies do |t|
      t.integer :cat_id
      t.integer :hobby_id
      t.timestamps
    end
  end
end
