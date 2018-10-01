class CreateBloggers < ActiveRecord::Migration[5.1]
  def change
    create_table :bloggers do |t|
      t.string :name
      t.string :bio
      t.integer :age

      t.timestamps
    end
  end
end
