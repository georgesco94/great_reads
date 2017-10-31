# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  review     :text             not null
#  user_id    :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :review, :user_id, :book_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :book,
    foreign_key: :book_id,
    class_name: "Book"
end
