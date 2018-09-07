class RemovePennameFromAuthors < ActiveRecord::Migration[5.2]
  def change
    remove_column :authors, :penname
  end
end
