class WelcomeController < ApplicationController
  def index
    # test
    Rollbar.info('Access index')
  end
end

