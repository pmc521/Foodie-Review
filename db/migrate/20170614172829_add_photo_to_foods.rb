class AddPhotoToFoods < ActiveRecord::Migration[5.1]
  def change
    add_column :foods, :photo, :string, null: false
  end
end
