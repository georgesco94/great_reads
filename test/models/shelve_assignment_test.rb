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

require 'test_helper'

class ShelveAssignmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
