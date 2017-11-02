# == Schema Information
#
# Table name: shelve_assignments
#
#  id         :integer          not null, primary key
#  book_id    :integer
#  shelf_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShelveAssignment < ApplicationRecord

  belongs_to :book,
    foreign_key: :book_id,
    class_name: "Book"

  belongs_to :shelf,
    foreign_key: :shelf_id,
    class_name: "Shelf"
end
