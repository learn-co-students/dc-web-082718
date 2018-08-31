class Tweet

    attr_reader :message, :user

    @@all_tweets = []

    def initialize(message, user_object)
        @message = message
        @user = user_object
        @@all_tweets << self
    end

    def self.all
        @@all_tweets
    end

    def username
        self.user.username
    end

    def self.get_tweets_by_same_user_as(tweet)
        # takes a tweet
        # returns all tweets with same user as input tweet
        user_to_match = tweet.user
        user_to_match.tweets
    end

    def likers
        # returns all users who have liked this tweet

        # get all the likes
        all_likes = Like.all
        # see which likes match with this tweet
        people_who_like_this = all_likes.collect do |like|
            if like.tweet == self
                # get the users who made that like
                like.user
            end
        end
        people_who_like_this.compact
    end

end