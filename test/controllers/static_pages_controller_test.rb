require 'test_helper'

class Api::StaticPagesControllerTest < ActionDispatch::IntegrationTest
  describe "GET index" do
    it "successfully renders the index template" do
      get :root
      expect(response).to be_successful
      expect(response).to render_template(:root)
    end
  end

end
