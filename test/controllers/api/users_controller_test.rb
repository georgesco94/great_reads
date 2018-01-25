require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "should get index" do
    get users_url
    assert_response :success
  end
end
