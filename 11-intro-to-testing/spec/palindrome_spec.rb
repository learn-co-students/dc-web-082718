require_relative "../palindrome.rb"

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when word is a palindrome" do
        expect(checker.is_palindrome?("racecar")).to be(true)
    end

    it "ignores capitalization" do
        expect(checker.is_palindrome?("Abba")).to be(true)
    end

    it "ignores spaces" do
        expect(checker.is_palindrome?("taco cat")).to be(true)
    end

    it "ignores punctuation" do
        expect(checker.is_palindrome?("sara's")).to be(true)
    end

    it "raises ArgumentError if input is not a word" do
        expect {checker.is_palindrome?(12345)}.to raise_error ArgumentError
    end
end