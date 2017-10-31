class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :review, null: false
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.timestamps
    end
  end
end
