require 'test_helper.rb'

describe WelcomeController do
  it "should get index" do
    get '/'
    assert_response :success
  end
end

