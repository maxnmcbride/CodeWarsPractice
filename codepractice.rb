# 1. Detect Pangram
def panagram?(string)
    ('a'..'z').all? { |x| string.downcase.include? (x) } 
end
# the '..' asks to see if those elements are present in a given string or array
# .all? is asking if all elements between a-z are present
# the block takes in |x| which is the current variable being checked from our .all? statement, then
# .downcases the string and asking if it includes x

