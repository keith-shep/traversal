class JupyterExportsController < ApplicationController
  def show
    @equation = Equation.find(params[:equation_id])
  end
end
