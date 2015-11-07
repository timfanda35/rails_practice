class WelcomeController < ApplicationController
  def index
    Rollbar.info('Access index')
  end
end

