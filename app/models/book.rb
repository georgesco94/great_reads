# == Schema Information
#
# Table name: books
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text             not null
#  author             :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Book < ApplicationRecord
  validates :title, :description, :author, presence: true

  has_attached_file :image, default_url: "default_user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews,
    foreign_key: :book_id,
    class_name: "Review"

  has_many :shelve_assignmets,
    foreign_key: :book_id,
    class_name: "ShelveAssignment"

  has_many :shelves,
    through: :shelve_assignmets,
    source: :shelf

  has_many :statuses,
    foreign_key: :book_id,
    class_name: "Status"

end
