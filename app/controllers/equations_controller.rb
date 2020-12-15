class EquationsController < ApplicationController

  def create
    @equation = Equation.new()
    @user = current_user
    @equation.user = @user
    @equation.title = "Untitled Equation"
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
    @equations = Equation.order(:created_at)
  end

  def show
    @equation = Equation.find(params[:id])
    @step = Step.new
  end

  def edit
    @equation = Equation.find(params[:id])
  end

  def update
    @equation = Equation.find(params[:id])
    @equation.update(equation_params)
    redirect_to equations_path(@equation)
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
