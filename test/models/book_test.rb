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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
