# == Schema Information
#
# Table name: genre_book_assignments
#
#  id         :integer          not null, primary key
#  book_id    :integer
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GenreBookAssignment < ApplicationRecord
  belongs_to :book,
    foreign_key: :book_id,
    class_name: "Book",
    optional: true

  belongs_to :genre,
    foreign_key: :book_id,
    class_name: "Genre",
    optional: true
end
