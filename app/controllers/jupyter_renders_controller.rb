class JupyterRendersController < ApplicationController
  skip_before_action :authenticate_user!

  def show
    @equation = Equation.find(params[:equation_id])
    render layout: "export"
  end
end
