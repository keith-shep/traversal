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
    if @step.save
      redirect_to equation_path(@equation)
    else
      render :new # should render error message
    end
  end

  def edit
    @step = Step.find([params(:id)])
  end

  def update
    @step = Step.find(params[:id])
    @step.update(step_params)
    redirect_to equation_path(@equation)
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
