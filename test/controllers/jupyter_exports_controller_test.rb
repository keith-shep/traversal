require 'test_helper'

class JupyterExportsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get jupyter_exports_show_url
    assert_response :success
  end

end
