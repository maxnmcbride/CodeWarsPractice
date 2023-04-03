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
