# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  name       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

  has_many :shelve_assignmets,
    foreign_key: :shelf_id,
    class_name: "ShelveAssignment",
    dependent: :destroy

  has_many :books,
    through: :shelve_assignmets,
    source: :book,
    dependent: :destroy

end
