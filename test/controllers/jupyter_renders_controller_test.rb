require 'test_helper'

class JupyterRendersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get jupyter_renders_show_url
    assert_response :success
  end

end
