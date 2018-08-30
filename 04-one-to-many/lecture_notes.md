- Make a note of blog presentations next week
- Optional review tomorrow (Morgan - OO Person)

 ## Review so far
    - We can create a class, which is a blueprint for a "model", which represents an object.
    -We can create, or instantiate, an "instance" of the object
    -We can write an initialize method with instructions on what to do when creating a brand new object
        ex:  `flatiron = School.new(name="Flatiron")`
    -We can control how attributes of the object are accessed
        `attr_accessor :name`

    Build an `add_instructor` method that takes a string of a name
        NOTE:  This is a good time to make sure they don't have the misconception that instance variables without setter methods are static.  The `add_instructor` method can change the `instructors` array without a problem:  we just can't call `flatiron.instructors=` without the setter method (which we don't want here--people shouldn't be able to access it directly)

    But Instructor should be a class {IS A BLUEPRINT--INSTRUCTIONS / RECIPES}. When it's just a string, can't really do much.  If they're objects, they have their own methods.

    flatiron.instructors.map { |instructor| instructor.favorite_food }

    Also, what happens when something changes about an instructor?  If I decide to change my name, how many places do I have to remember to update it?  

    Show objectives

    Describe one to many relationship, using school/instructor relationship (could this be m2m?  Yes.  Depends on context and _domain modeling_.)  

    Demonstrate modeling with Song / Artist / Genre on whiteboard
        Artist has many songs
        Song belongs to artist
        Genre has many songs
        Song belongs to genre

    Let's build Twitter.  Concept of Minimal Viable Product.  What do we need?  

    Skateboard image:  https://i.pinimg.com/originals/18/11/c7/1811c7266a60cf87b8765de2a4c99edc.jpg

    Just need a User and a Tweet.  What's the relationship?

        User

        Tweets

    Single Source of Entry
    run.rb
    tweet.rb
    user.rb
 ```rb
    require_relative "./tweet.rb"
    require_relative "./user.rb"
```

    Show coffee dad twitter.com/coffee_dad

    User gets initialized with a name (read_only)

    Tweet gets message (attr_accessor) and user (attr_reader)
    define user_name method

    instantiate user and a few tweets in run.rb

    What happens if Coffee Dad changes his name?  If we use objects, we're good.  Single Source of Truth means there's only one place to get a user's name.  Demonstrate.

    Build the rest of the deliverables

    Makes more sense for a tweet to remember its user than a user to remember all their tweets


user.rb
```rb
class User

    attr_reader :username

    

    def initialize(username)
        @username = username
        my_tweets = []
    end

    def tweets
        tweets = Tweet.all.collect do |tweet|
            if tweet.user == self
                tweet
            end
        end
        tweets.compact
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end
end
```

tweet.rb
```rb
class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        @@all << self
    end

    def username
        self.user.username
    end

    def self.all
        @@all
    end

end
```