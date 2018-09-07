class CreateGenreTable < ActiveRecord::Migration[5.2]
  def change

    create_table :genre do |t|
        t.string :name
    end
  end
end
