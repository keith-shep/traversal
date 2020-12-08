class EquationsController < ApplicationController
  def create
    @equation = Equation.new(equation_params)
    @user = User.find(params[user_id])

  end

private

def equation_params
  params.require(:equation).permit(:title)
end

end
