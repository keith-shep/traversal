class Equation < ApplicationRecord
  belongs_to :user
  has_many :steps, :dependent => :delete_all
end

