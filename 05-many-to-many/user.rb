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

    def like_tweet(tweet)
        if tweet.user == self
            puts "Delete your account"
        else
            Like.all.each do |like|
                if like.user == self && like.tweet == tweet
                    puts "You already like that dummy"
                    return
                end
            end
            Like.new(self, tweet)
        end
    end

    def unlike_tweet(tweet)
        Like.all.each do |like|
            if like.user === self && like.tweet === tweet
                Like.all.delete(like)
            end
        end
    end

    def liked_tweets
        # returns a collection of all the tweets this user has liked

        # liked_tweets = []
        # go through all likes
        all_likes = Like.all
        all_likes.collect do |like|
        # see if user of like is self
            if like.user == self
                like.tweet
            end
        end 
    end
end