- include `rspec` in Gemfile
- `rspec --init`

- Define TDD

- "DRY" doesn't apply (at least not as much)

- Require the file you're testing

1.  `describe` what you're testing
2.  say what `it` does
3.  write assertion

- First build the palindrome_checker in the first test (add).  When you need to redo it, move it to the top of the describe:

```rb
require_relative "../palindrome.rb"

describe "PalindromeChecker" do

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'dad'" do
        expect(checker.is_palindrome?('dad')).to be(true)
    end

    it "ignores spaces" do
        expect(checker.is_palindrome?('taco cat')).to be(true)
    end

end
```

- point out difference between `to be` (compares object identity equality) to `to eq` (compares value equality)

```rb 
    it "raises ArgumentError if input is not a string" do
        expect{ checker.is_palindrome?(7) }.to raise_error ArgumentError
    end
```
- Notice that we need a block as opposed to an argument for a raises test

```rb
raise ArgumentError if !(word.is_a? String)
```