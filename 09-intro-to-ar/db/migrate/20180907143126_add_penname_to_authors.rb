class AddPennameToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :penname, :string
  end
end
