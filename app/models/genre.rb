# == Schema Information
#
# Table name: genres
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Genre < ApplicationRecord
  has_many :genre_book_assignments,
    foreign_key: :genre_id,
    class_name: "GenreBookAssignment"


  has_many :books,
    through: :genre_book_assignments,
    source: :book
    
end
