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

# 13. Counting sheep...
def countSheeps array
  array.count(true)
end

# the .count method checks for presence of an element in an array and returns an integer

# a less efficient method, but the first one I thought of was
def countSheeps array

  count = 0
    array.each do |ele|
      if ele == true
        count += 1
      end
    end
    return count
  end

# This is setting count to 0 then checking the array to 'do' for each
# element if the element is true to increase the counter, then
# return the increased count

# 14. Count by X
def count_by(x, n)
  (1..n).map { |i| x * i }
end
  
# 15. Jaden Casing Strings
class String
  def toJadenCase
    words = self.split(" ")
    words.map! {|word| word.capitalize }
    jaden_string = words.join(" ")
    return jaden_string
  end
end

# the way that this functions is that the "self" refers to the class String
# therefore, when different components of this method are called
# we are splitting the string adding a " " space in between them.
# Then we are mapping over the words array, and for every word we are capitalizing
# then the new variable jaden_string is returning the words to a string with a space " " between
# each word.
# Finally the variable jaden_string is returned

# Much cleaner
class String
  def toJadenCase
    split.map(&:capitalize).join(' ')
  end
end

# 16. Convert number to reversed array of digits
def digitize(n)
  n.digits
end

# .digits converts string to an array of digits

# 17. Switch it up!
def switch_it_up(number)
  case number
    when 0
      "Zero"
    when 1
      "One"
    when 2
      "Two"
    when 3
      "Three"
    when 4
      "Four"
    when 5
      "Five"
    when 6
      "Six"
    when 7
      "Seven"
    when 8
      "Eight"
    else 
      "Nine"
    end
end

# this is using a switch statement

# a much leaner approach is:
def switch_it_up(number)
  %w(Zero One Two Three Four Five Six Seven Eight Nine)[number]
end

# The method takes an integer argument called number. 
# The method uses the %w() syntax to create an array of strings 
# containing the words for the numbers from 0 to 9. %w() is a 
# shorthand syntax for creating an array of strings, where 
# whitespace is used to separate the elements.

# The method then uses the square bracket notation ([]) to return 
# the element of the array at the index specified by the number 
# argument. Since arrays in Ruby are zero-indexed, the string 
# at index 0 will be "Zero", the string at index 1 will be 
# "One", and so on.

# 18. Century From Year

def century(year)
  ( year / 100.0 ).ceil
end

# this is a clean and elegant solution as it divides the year
# i.e. 1 through 100/100.0 = .01 through 1 .ceil rounds it up to 1
# 101/100.0 =1.01 .ceil rounds up to 2

# 19. List Filtering

def filter_list(l)
  # return a new list with the strings filtered out
  l.select {|item| item.is_a? Integer}
end

# conversely
def filter_list(l)
  l.reject { |x| x.is_a? String }
end
# also works!

# 20. Keep up the hoop
def hoop_count n
  n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
end

# 21. Set the alarm

def set_alarm(employed, vacation)
  # Your code here
  if employed == vacation
    false
  elsif (employed == false) && (vacation == true)
    false
  else
    true
  end
end

# the best option for this would, however be 

def set_alarm(employed, vacation)
  employed && !vacation
end

# 22. Twice as old
def twice_as_old(dad, son)
  (dad - son * 2).abs
end

# 23. Grasshopper - Grade book
def get_grade(s1, s2, s3)
  average = (s1 + s2 + s3)/3
  case average
    when 90..100
    'A'
    when 80...90
    'B'
    when 70...80
    'C'
    when 60...70
    'D'
    else
    'F'
    end
end

# 24. Vowel Count
def get_count(input_str)
  vowels = "aeiou"
  count = 0
  input_str.each_char do |char|
    count += 1 if vowels.include?(char)
  end
  count
end

# and even more sleek version looks like:
def getCount(inputStr)
  inputStr.count("aeiou")
end

# 25. What is between?
def between(a, b)
(a..b).to_a
end