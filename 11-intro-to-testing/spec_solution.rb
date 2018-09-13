require_relative "../palindrome.rb"

describe "PalindromeChecker" do

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'dad'" do
        expect(checker.is_palindrome?('dad')).to be(true)
    end

    it "ignores spaces" do
        expect(checker.is_palindrome?('taco cat')).to be(true)
    end

    it "raises ArgumentError if input is not a string" do
        expect{ checker.is_palindrome?(7) }.to raise_error ArgumentError
    end

    it "ignores capitalization" do 
        expect(checker.is_palindrome?("Abba")).to be(true)
    end

    it "ignores punctuation" do
        expect(checker.is_palindrome?("Sara's")).to be(true)
    end
end