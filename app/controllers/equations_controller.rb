class EquationsController < ApplicationController

  def create
    # @equation = Equation.new()
    # @equation.title = 'My cool equation'
    @equation = Equation.new()
    @user = current_user
    if @equation.save
      redirect_to equation_path(@equation)
    else
      render :new
    end
  end

  def new
    @equation = Equation.new
  end

  def index
    @equations = Equation.all
    # @equation = Equation.new()
    # @equation.title = 'My cool equation'
    # @equation.user = current_user
  end

  def show
    @equation = Equation.find(params[:id])
    @step = Step.new
  end

  def destroy
    @equation = Equation.find(params[:id])
    @equation.destroy
    redirect_to equations_path(@equation)
  end

  private

  def equation_params
    params.require(:equation).permit(:title)
  end
end
