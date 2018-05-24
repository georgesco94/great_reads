# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "shouldnt save user without attr" do
    user = User.new
    assert_not user.save
  end

  test "shouldnt save user with <6 char password" do
    user = User.new({username:"George", email:"s", password:'12345' })
    assert_not user.save
  end

  test "isPassword returns true on real password" do
    user = User.new({username:"George", email:"s", password:'1234567' })
    assert user.is_password?('1234567')
  end
  test "isPassword returns false on false password" do
    user = User.new({username:"George", email:"s", password:'1234567' })
    assert_not user.is_password?('123456')
  end


end
