class CreateBooksTable < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
        t.string :title
        t.datetime :year_published
        t.integer :author_id
    end
  end
end
