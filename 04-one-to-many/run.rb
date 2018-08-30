require_relative "./tweet.rb"
require_relative "./user.rb"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

coffee_dad.post_tweet("I need coffee")
coffee_dad.post_tweet("I want coffee")
coffee_dad.post_tweet("I am drinking coffee")
coffee_dad.post_tweet("Where is coffee?")
coffee_dad.post_tweet("Life is a meaningless void")
tea_uncle.post_tweet("I like tea")
tea_uncle.post_tweet("Life is a bunch of flowers")
tweet1 = Tweet.all[0]

# t coffee_dad.tweets 
# return all coffee dad tweets

print tweet1.username

print Tweet.all

Tweet.new

tweet1.correct_spelling