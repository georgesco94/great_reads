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
#  rating     :integer
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
