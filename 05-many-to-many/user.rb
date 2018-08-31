class User

    attr_accessor :username

    def initialize(username)
        @username = username
        
    end

    def tweets
        # return all the User's tweets
        # loop over all the tweets
        user_tweets = Tweet.all.collect do |tweet|
            # check each tweet for desired user
            # and collect the tweets that belong to this user
            if tweet.user == self
                tweet
            end
        end
        # return the collected Tweets
        return user_tweets.compact

    end

    def post_tweet(message)
        # create a new Tweet
        Tweet.new(message, self)
    end

end