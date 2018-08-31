require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = coffee_dad.post_tweet("tweet1")
tweet3 = coffee_dad.post_tweet("tweet3")
tweet4 = coffee_dad.post_tweet("tweet4")
tweet5 = coffee_dad.post_tweet("Where is coffee?")
tweet7 = coffee_dad.post_tweet("Life is a meaningless void")

tweet2 = tea_uncle.post_tweet("tweet2")
tea_uncle.post_tweet("Life is a bunch of flowers")
tea_uncle.post_tweet("I need coffee")

# tweet1 = Tweet.all[0]

# t coffee_dad.tweets 
# return all coffee dad tweets

tea_uncle.like_tweet(tweet1)
tea_uncle.like_tweet(tweet3)
tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)

tea_uncle.like_tweet(tweet4)

tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)
tea_uncle.like_tweet(tweet4)
print tea_uncle.like_tweet(tweet4)


# print tea_uncle.liked_tweets
# tea_uncle.unlike_tweet(tweet4)
# print tweet4.likers

tea_uncle.like_tweet(tweet2)
print tea_uncle.liked_tweets