
## SWBATs

* Define `object` in programming domain
* Create a class and instantiate an instance of the class
* Explain the difference between a class and an instance
* Pass arguments to `new` by defining an initialize method in class
* Create instance methods
* Call methods on the implicit or explicit `self`
* Define attribute readers and writers using `attr_` macros
* Explain the need for variable scope and why it's important to not utilize global variables

## Outline

```text
15m Everything is an Object in Ruby
10m What is an object?
35m Creating our own Objects
===
 1h Total
```

### Everything is an Object in Ruby

_"Everything in Ruby is an object."_ What does that mean? Go through some example code, and ask students to break down what's happening at each level:

```ruby
# what is the data type of x?
# what is the value of x?
x = 3
puts x.class
puts x

# what happens when we run this code?
# what is split and where does it come from?
# how does x know what to do with split?
# what's happening when we run this code?
x = "hello how are you"
x.split
```
  
Methods, on a lower level, are known as "messages" in object-oriented programming. Methods are called _on_ objects and messages are sent _to_ objects. Objects respond to messages by doing some work. The exact work that it should do is _defined_ on the object's class.

[https://ruby-doc.org/core-2.5.0/Object.html\#method-i-send](https://ruby-doc.org/core-2.5.0/Object.html#method-i-send)

```ruby
x = 3

# what does message name mean here?
message_name = :+

# what does send do?
# what does the argument to send specify?
# what other arguments does send take?
x.send(message_name, 1) == x + 1

# most operators in Ruby are just messages sent to objects
names = [
  "Ian",
  "Sophie",
  "JJ",
  "Rishi",
  "Johann",
  "Esmery",
  "Terrance"
]
names[0]
names.[](0)
names.send(:[], 0)

# objects complain when they don't know how to respond to messages
# objects complain when they don't know how to execute methods
names.respond_to_undefined_method

# check if an object responds to a message
names.responds_to? message_name
```

Why is it important to remember everything is an object in ruby? Because everything can respond to a message. If you have a background in C or Java, 1.odd? seems bizarre; know that not all languages have this functionality but we get to use it in ruby.

### What is an object?

Generally, an object is a copy of some class template. We can make generic objects with `Object.new()` and Ruby assigns this object an `id` to this object in the computer's memory. Ask the students to reason through uniqueness and why each object would have an `id`.

```ruby
o = Object.new # <Object:0x007f870d02d550>
o.object_id # 70109007801000

# Where does object ID come from?
# https://stackoverflow.com/questions/2818602/in-ruby-why-does-inspect-print-out-some-kind-of-object-id-which-is-different
(o.object_id * 2).to_s(16) # 7f870d02d550
"%x" % (o.object_id << 1) # 7f870d02d550
```

Objects keep track of and define how to update their personal state. Objects have their own scope rules.

### Creating our own Objects

Why do we want to do this? Give examples of cases where you want to repeat specific functionality about an entity, but you don't want to write your code over and over again.

_Remember, programming is about removing simple, repetitive decisions so that we can focus on harder, higher-order problems. Whenever you have to do something more than once, you should probably automate it._

Let's make an object. This is a fun way to let the class give you input. For this example, we'll use `BankAccount`. First, try storing all of that metadata in a hash.

```ruby
bank_account = {"user_id": 3, "balance": 100}
```

Why is this inefficient?

* You might have typos, which breaks the schema.
* Changing properties on the hash requires accessing attributes using `[]` syntax.

Build up to a more full bank account model following the example below. Keep in mind, many students may not have seen `attr_` macros, class methods, `initialize`, and class and instance variables. Define each of these through your steps leading up to the following code.

```rb
class BankAccount
  attr_reader :user_id, :balance

  @@all = []

  def initialize(user_id, balance)
    @user_id = user_id
    @balance = balance

    @@all << self
  end

  def deposit(amount)
    @balance = @balance+amount
  end

  def withdraw(amount)
    @balance = @balance-amount
  end

  def self.all
    @@all
  end
end
```

Here is a recommended order to go over each of these concepts:

1. `initialize` with `@user_id` and `@balance` as instance variables _You should discuss how scoping works and how instance variables live in the scope of the class. Demo this by accessing this variable in another method like _`deposit`_._
2. Create custom getters and setters for instance properties. Then show `attr_accessor` macro to add getters and setters to your instance variables, and `attr_reader` and `attr_writer` to be more specfic.
3. Add `@@all` as a class variable that lives outside each instance. This is an opportunity to hold on to all of the created instances of this class in memory in a place that is separate from each of the instances themselves. When adding new instances add `@@all << self` to `initialize`.
4. Adding a method that interacts with one of the instance methods. This showcases implicit `self`. This is a good chance to use defined getters and setters inside of other methods to understand how Ruby interprets variables / method calls more deeply.
5. What is `self` in each context? Use `binding.pry` to show that `self` is the class outside of any method, and use that intuition to write `BankAccount.all`. You can show that `BankAccount.new` is also a class method.

Once you've got some fun objects to play with, you can do array operations on `BankAccount.all`! Have the students do some `map`, `select`, `find`, and `each` commands with you.
