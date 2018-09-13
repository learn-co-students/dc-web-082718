require 'pry'
class PalindromeChecker

    def is_palindrome?(word)
        raise ArgumentError if !(word.is_a? String)
        word.gsub!(" ", "")
        word.gsub!(/\W/, "")
        word.downcase!
        if word.length <= 1
            return true
        elsif word[0] == word[-1]
            return is_palindrome?(word.slice(1..-2))
        else
            return false
        end
    end
end