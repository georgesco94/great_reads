# == Schema Information
#
# Table name: statuses
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  book_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  status     :string
#

class Status < ApplicationRecord
  validates :user_id, :book_id, :status, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :book,
    foreign_key: :book_id,
    class_name: "Book"


end
