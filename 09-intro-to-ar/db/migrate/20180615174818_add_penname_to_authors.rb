class AddPennameToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :pen_name, :string
  end
end
