class CreateGenreBookAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :genre_book_assignments do |t|
      t.integer :book_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
