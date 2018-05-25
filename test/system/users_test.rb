require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase

  test "form exist on front page" do
    visit '/'
    assert_selector "form"
  end

  test "can sign up user properly" do
    visit '/'
    within ('.signup-form-box') do
      fill_in 'Username', with:'userp'
      fill_in "Email Address", with: "t!"
      fill_in "Password", with: "12345679"
      click_on "Sign Up"
      assert_current_path '/books'
    end
  end

end
