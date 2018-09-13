require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        # returns true if word reads the same backwards and forwards, e.g., 'racecar'
        raise ArgumentError if !(word.is_a? String) 
        word = word.downcase # ignore capitalization
        word = word.gsub(" ", "")
        word = word.gsub(/[\W]/, "")
        if word.length <= 1
            return true
        elsif word[0] == word[-1]
            return is_palindrome?(word.slice(1..-2))
        else
            return false
        end
    end
end

# binding.pry
puts "go hang a salami I'm a lasagna hog"