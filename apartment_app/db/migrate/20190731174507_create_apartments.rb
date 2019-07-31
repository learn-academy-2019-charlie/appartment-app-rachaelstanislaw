class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :street_address
      t.string :city
      t.integer :zip
      t.string :state
      t.integer :user_id

      t.timestamps
    end
  end
end
