
puts ""

puts 'Cleaning db...'

User.destroy_all

puts 'db cleaned!'
puts ""

puts 'Creating test user...'

user1 = User.new(
  email:'test@test.com',
  password: "123123",
  username: "test",
  first_name: "test",
  last_name: "test",
)


user1.save
puts 'Test user created!'

puts ""

########################


puts 'Creating eq1...'
eq1 = Equation.new(
  title: "addition",
)
eq1.user = user1
eq1.save


s1 = Step.new(latex: "x + 1 = 3")
s2 = Step.new(latex: "x = 2")

s1.equation = eq1
s2.equation = eq1

s1.save
s2.save

puts 'Created eq1!'

########################

puts 'Creating eq2...'
eq2 = Equation.new(
  title: "multiplication",
)
eq2.user = user1
eq2.save

s1 = Step.new(latex:"2x = 4")
s2 = Step.new(latex:"x = 2")

s1.equation = eq2
s2.equation = eq2

s1.save
s2.save

puts 'Created eq2!'

########################


puts 'Creating eq3...'
eq3 = Equation.new(
  title: "indices, pg 52, eg 2, (ii)",
)
eq3.user = user1
eq3.save

s1 = Step.new(latex:"3^{2n}\\times 15^{3n}\\div 5^n")
s2 = Step.new(latex:"3^{2n}\\times 3^{3n}\\times 5^{3n}\\div 5^n")
s3 = Step.new(latex:"3^{5n}\\times 5^{2n}")

s1.equation = eq3
s2.equation = eq3
s3.equation = eq3


s1.save
s2.save
s3.save

puts 'Created eq3!'

########################

puts 'Creating eq4...'
eq4 = Equation.new(
  title: "square root, pg 52, eg 3",
)
eq4.user = user1
eq4.save

s1 = Step.new(latex:"\\sqrt{8}\\div \\sqrt{2}")
s2 = Step.new(latex:"\\sqrt{\\frac{8}{2}}")
s3 = Step.new(latex:"\\sqrt{4}")
s4 = Step.new(latex:"2")

s1.equation = eq4
s2.equation = eq4
s3.equation = eq4
s4.equation = eq4

s1.save
s2.save
s3.save
s4.save

puts 'Created eq4!'

########################

puts 'Creating eq5...'
eq5 = Equation.new(
  title: "surds, pg 55, eg 5",
)
eq5.user = user1
eq5.save


s1 = Step.new(latex:"\\left(\\sqrt{3}+3\\sqrt{2}\\right)\\left(\\sqrt{3}-3\\sqrt{2}\\right)")
s2 = Step.new(latex:"\\left(\\sqrt{3}\\right)^2-9\\left(\\sqrt{2}\\right)^2")
s3 = Step.new(latex:"3-9\\left(2\\right)")
s4 = Step.new(latex:"-19")

s1.equation = eq5
s2.equation = eq5
s3.equation = eq5
s4.equation = eq5

s1.save
s2.save
s3.save
s4.save


puts 'Created eq5!'

puts ""

puts "done seeding!"
