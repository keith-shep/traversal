class EquationsController < ApplicationController

  def create
    @equation = Equation.new(equation_params)
    @user = User.find(params[:user_id])
    @equation.user = @user
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
  end

  def show
    @equation = Equation.find(params[:id])
    @step = Step.new
  end

  def destroy
    @equation = Equation.find(params[:id])
    @equation.destroy
    redirect_to user_equations_path(@equation.user)
  end


  private

  def equation_params
    params.require(:equation).permit(:title)
  end
end
