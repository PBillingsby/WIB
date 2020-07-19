class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.belongs_to :destination
      t.belongs_to :user
      t.integer :rating
      t.integer :days_in_destination
      t.string :occasion
      t.date :trip_date
    end
  end
end
