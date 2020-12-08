class Equation < ApplicationRecord
  belongs_to :user
  has_many :steps

  # def create
  #   @equation =
  # end

end

