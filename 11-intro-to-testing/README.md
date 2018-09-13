# ruby-tdd

## SWBATs

* Integrate testing into their current projects using RSpec
* Set up testing in a new project
* Define Test-Driven development
* Describe what a testing framework is and what the RSpec framework does
* Write tests for a basic function while considering entire problem space
* Describe the difference between failing, passing, and pending test cases
* Define assertions and matchers in the context of test cases
* Use output from a testing framework to guide their development
* Explain the need for testing in general

## Resources

* [Software Testing](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/)
* [RSpec documentation](http://rspec.info/documentation/)
* [Rspec-Rails Documentation](https://github.com/rspec/rspec-rails)


```

### Intro Code

We'll start off by setting up a project with a Gemfile. Our Gemfile should list the `rspec` gem and likely also the `pry` gem to debug. Once we've got the Gemfile set up, we'll run `bundle install` to install all of our dependencies, then run `rspec --init`.

> Gems can come in many sizes and while some can be very focused on one tasks, generally as they help to solve larger and larger problems, or they become a _set_ of tools instead of just _one_ tool, we can start to call them frameworks. You'll be constantly redefining these words, so just keep in mind that they reference tools written in Ruby by other people.

This last command adds a few new files to our directory: `.rspec` which is some configuration for RSpec in the command line, and `spec/spec_helper.rb` which is configuration for when tests are run in the context of Ruby.

Peek into the `spec/spec_helper.rb` to get a better sense of what each of these files are doing and why they're here. The [RSpec Configuration documentation](http://rubydoc.info/gems/rspec-core/RSpec/Core/Configuration) also provides some helpful tips on configuring RSpec how you'd like it.

Next, we will want to add a file for our program. We've cleverly named ours `palindrome.rb` and it will hold all of our application code. We can start by writing a class in here called `PalindromeChecker`.

```ruby
# palindrome.rb

class PalindromeChecker
end
```

Test-driven development \(TDD\) is all about **tests being the real fuel that helps you write your code**. The general rule here is called "red, green, refactor", which means that you'll:

1. Write your test, run your test suite, and **look for the failure**
2. Implement a **naive, passing solution** to your failing test
3. **Rewrite your original solution** to optimize it or make it more readable

We'll break down the technique a little bit more in the following sections, but for now, we've got a program with no tests, so let's write our first two tests.

Tests go into the `spec` folder created by the `rspec --init` command. The pattern for naming tests is usually `<some feature>_spec.rb` when using RSpec. When using other testing frameworks for other languages, there may be other conventions, so be sure to read the documentation before writing tests.

We'll create a file called `palindrome_spec.rb` and place it in our `spec` folder. Our file structure should look like this now:

* palindrome.rb
* Gemfile
* .rspec
* spec/
  * spec\_helper.rb
  * palindrome_spec.rb

Spec files are composed of a few pieces. First, you have to require the file that you want to test. This may seem obvious, but it's not done for you automatically.

Second, you will want to give some context to your set of tests, and this part of the spec is called the `describe` block. Usually, this will just say which part of the program you're testing, so here, we can just use `"is_palindrome?"` as the description.

Third, you'll want to write your actual test cases. These live in `it` blocks, where the string after the `it` method describes the conditions or the case the test is running.

And lastly, you will need to write your actual assertion which is in the form `expect(<some executable code>).to be <some value>`. There are a few pieces to this, but we will just use this pattern for the first few tests.

```ruby
# spec/calculator_spec.rb

# first
require_relative "../calculator.rb"

# second
describe "Calculator" do

  # third
  it "adds two numbers" do
    calculator = Calculator.new
    # fourth
    expect(calculator.add(2, 3)).to be 5
  end
end
```

Nothing left to do but run the tests. You should see a similar output to what's below.

```bash
F

Failures:

  1) is_palindrome? returns true for dad
     Failure/Error: expect(is_palindrome? "dad").to be true

       expected true
            got nil
     # ./spec/is_palindrome_spec.rb:8:in `block (2 levels) in <top (required)>'

Finished in 0.01401 seconds (files took 0.09962 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/is_palindrome_spec.rb:5 # is_palindrome? returns true for dad
```

Break down each line for the students so they can become familiar with reading tests, and then start to solve the test with them in a very basic manner first, and eventually getting this test to pass. Ask students if there is an opportunity to refactor this code?

### Testing Strategy

We've already given the students the basic rules to TDD: red, green, refactor. They've written their base case or happy-path, they've gotten their test to pass, and they've thought a little about how they could refactor this.

If students say something along the lines of "What if someone puts in a number?" or "What if there are spaces or punctuation?" this is a great sign and brings us to the topic of being mindful about writing our tests. We want to call the conditions that they brought up in their questions "cases" which we can write tests for. These are the kinds of cases that we want to catch at the beginning of our program:

* the base case or the happy path; behavior that we expect to work
* the sad path; behavior that we expect to break
* extreme edge cases; things like bad inputs or system errors

Get the class to go through the process of thinking through coverage in small groups, then go over it all together. Work with students to get more test cases to include in your test suite that fall under these buckets. When students are thinking about the cases, also have them map the possible inputs and expected outputs for each case \(define the problem space\).

```ruby
# spec/is_palindrome_spec.rb

# ...
  it "should return false if input is 'father'"           # "father" -> false
  it "should return false if input is empty string"       # "" -> false
  it "should return true if input is a single character"  # "z" -> true
  it "should not care about case"                         # "Dad" -> true
  it "should not care about spaces"                       # "d ad  " -> true
  it "should not care about punctuation"                  # ".!d @a $d" -> true
  it "should not care about accents"                      # "mømdådmøm" -> true
end
```

The last big question of this section is usually when to we write tests. It may depend on the instructor, but we should at least say to try to write them:

* before/after adding a feature
* before/after fixing a bug that didn't have tests

### Writing Tests

All of our test cases are described up until this point \(only a few from above are necessary for demonstration\), so begin to write out the blocks for each test case.

> **Note:** You may choose to write all of your test cases as pending upfront like above or go through them one by one. The most important part is that you're breaking down what you're doing: describing the test case, asserting the execution of some code with some input matches expected output.

Here, we want to point out that you can write the description of the test without actually having it run. The executable code for the test suite is in the block that is passed to the `it` method.

Look at your first test case and point out where the input and the expected output goes:

```ruby
# spec/is_palindrome_spec.rb

# ...

  it "should return true if input is dad" do
    expect(is_palindrome? "dad").to be true
  end

# ...
```

Now's a good point to bring up assertions and matchers. The assertion is the entire line beginning with `expect`; it's just the thing that you statement that you believe to be true. The matcher is the piece after the `expect`, which will compare the return value of the argument to `expect` with some other value or condition that you expect to be true.

> **Note:** Go through the process of learning about new "Expectations/Matchers" by reading the [RSpec Documentation](http://rspec.info/documentation/). Try to write tests that make assertions on values, arrays, exceptions, and types.

At this point, after writing out the body of one test case, run `rspec` in the command line. We should see the test fail \(red\), and then have the students help you out in finding a solution \(green\).

Write out the blocks for the rest of the test cases one by one, running RSpec in between, and writing code that makes the test pass.

Be sure to talk about edge cases like the following. It will give you an opportunity to introduce another matcher like "raise\_error" and show a different type of assertion syntax which takes a block instead of a value.

```ruby
# spec/is_palindrome_spec.rb

# ...

  it "should raise an error if input is a number" do
    expect { is_palindrome? 4 }.to raise_error ArgumentError
  end

# ...
```

Here's a valid solution to the problem:

```ruby
# program.rb

def is_palindrome?(word)
  raise ArgumentError if !word.is_a?(String)
  return false if word.empty?

  downcased_word = word.downcase.gsub(/[^a-zA-ZÀ-ÿ0-9]/, "")
  downcased_word == downcased_word.reverse
end
```

### Writing Testable Code

Discuss what makes code testable or not. Does the code rely on a lot of side effects that touch other parts of the codebase? Here is a good time to bring up encapsulation and isolation in the context of testability. Students may also not yet understand what side effects are, but this can be explained by changing a variable in a different scope than the local scope.

### Student Exercise

Add a new function to the `program.rb` called `factorial`.

```ruby
# program.rb

# ...

def factorial(num)
  # factorial(4)        ->    4 * 3 * 2 * 1     ->    24
  # factorial(0)        ->    1
  # factorial('hello')  ->    ArgumentError
end
```

Have students go through the process again on their own for coming up with test cases using the framework that we lined out above \(happy path, sad path, edge cases\). Some students may not know what a factorial is and if that's the case, explain it.
