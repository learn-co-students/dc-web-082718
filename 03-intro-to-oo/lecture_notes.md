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

```rb
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

# demo here that there is something behind the scenes (in C but whatevs) something like this (good to show that symbols can be part of method name):

class Array

  def [](index)
    # return element of array at index
  end
end
```
# objects complain when they don't know how to respond to messages
# objects complain when they don't know how to execute methods
names.respond_to_undefined_method

# check if an object responds to a message
names.respond_to?("some_method")

- build a Cat hash
- `ella = {"name" => "Ella", "fluffiness" => 10}`
- This is fine but `ella` is just a hash.  We can't extend this to have any behavior we might want a cat to do.  Make an empty Cat class.
- `Cat.new`
```rb
class Cat
    def name=(name)
        @name = name
    end
end
```

- What is the "@"?
    - instance variable
    - accessible throughout the class
    - talk about scope here

- add a getter method
```rb
    def name
        @name
    end
```

- Define getter/setter for name and fluffiness
- custom getter/setters:
```rb
    def fluffiness
        if @fluffiness > 5
            return "Very fluffy"
        else
            return "Not so fluffy"
        end
    end
```

- add initialize method
```rb
    def initialize(name, fluffiness)
        @name = name
        @fluffiness = fluffiness
    end
```

- attr_accessors
- default argument for `number_of_legs`
- Build out stuff
```rb
    def introduction
        "My name is #{self.name}"
    end
```
- `@name vs self.name` -- often the same in practice, but the former accesses the variable 
directly while self.name gets the accessor method
```rb
def introduction
        "My name is #{self.name} and I have a fluffiness score of #{@fluffiness}.  I am #{self.fluffiness}"
end
```
- class variable for @@all
  - it seemed to work to make this an instance method first, and then change it to a class method to demonstrate the difference
- class methods