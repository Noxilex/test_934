require "test_helper"

class PizzeriasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pizzerias_index_url
    assert_response :success
  end
end
