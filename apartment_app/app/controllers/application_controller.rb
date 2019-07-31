class ApplicationController < ActionController::Base
  before_action :config_permit_param, if: :devise_controller?

  def config_permit_param
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :phone, :hours])
  end

end
