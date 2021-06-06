
class Api::V1::SessionsController < ApplicationController

  def whoami
    render json: current_api_v1_user, status: :ok
  end
end
