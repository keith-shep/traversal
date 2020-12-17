class Step < ApplicationRecord
  belongs_to :equation
  has_many :comments, dependent: :destroy

  validates :latex, presence: true
end
