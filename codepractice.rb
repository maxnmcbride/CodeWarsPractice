# 1. Detect Pangram
def panagram?(string)
    ('a'..'z').all? { |x| string.downcase.include? (x) } 
end
# the '..' asks to see if those elements are present in a given string or array
# .all? is asking if all elements between a-z are present
# the block takes in |x| which is the current variable being checked from our .all? statement, then
# .downcases the string and asking if it includes x

# 2.Beginner Series #1 School Paperwork
def paperwork(n, m)
  return 0 if n < 0 || m < 0
  n * m
end

# 3.Find Maximum and Minimum Values of a List
def min(list)
  list.min()
end

def max(list)
  list.max()
end

# 4. Abbreviate a Two Word Name
def abbrev_name(name)
  name.split.map {|word| word[0].upcase()}.join('.')
end

# split turns the string into an array
# then the map method is run over the new array to create a new array of just the 
# first elements in each component of the array [0] to upcase
# then the join method returns the elements of the array as a string with '.'

# 5. Sum Mixed Array
def sum_mix(x)
  x.map{|num| num.to_i}.sum
end

# A more sleek method would be to 
# def sum_mix(x)
#   x.map(&:to_i).sum
# end

# 6. Even or Odd
def even_or_odd(number)
  number % 2 === 0 ? "Even" : "Odd"
end

# however in Ruby its possible just to ask number.even?

# 7. Find the smallest integer in the array
def find_smallest_int(arr)
  arr.sort.first
end

# or arr.min would work 

# 8. Basic Mathematical Operations
def basic_op(operator, value1, value2)
  value1.public_send(operator, value2)
end

# or value1.method(operator).(value2) or value1.send(operator, value2)

# 9.Convert a string to an array
def string_to_array(string)
  string.split.to_a
end

# 10. Fake Binary
def fake_bin(s)
  s.gsub(/[0-4]/,'0').gsub(/[5-9]/, '1')
end

# The way this is operating is by using gsub. g = global, sub = substitution
# then after .gsub() the /[0-4]/ dictates the range, and the '0' describes what is
# to be changed

# 11. Convert a String to a Number!
def string_to_number(s)
  s.to_i
end

# 12. Is it a palindrome?
def is_palindrome str
  str.downcase === str.downcase.reverse ? true : false
end





