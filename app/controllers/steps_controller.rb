class StepsController < ApplicationController
  def index
    @equation = Equation.find(params[:equation_id])
  end

  def new

  end

  def create
    @equation = Equation.find(params[:equation_id])
    @step = Step.new(step_params)
    @step.equation = @equation
    @step.save
  end

  def edit
    @edit = Edit.find(params[:id])
  end

  def update
    @edit = Edit.find(params[:id])
    @edit.update(step_params)
    # routing?
  end

  def destroy
    @step = Step.find(params[:id])
    @Step.destroy
    # redirect_to user_equations_path(@equation.user)?
  end

  private

  def step_params
    params.require(:step).permit(:latex)
  end

end
