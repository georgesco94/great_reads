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

require 'test_helper'

class GenreBookAssignmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
