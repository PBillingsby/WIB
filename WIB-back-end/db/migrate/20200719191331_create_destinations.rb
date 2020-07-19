class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.belongs_to :user
      t.string :address
      t.string :city
      t.string :country
      t.timestamps
    end
  end
end
