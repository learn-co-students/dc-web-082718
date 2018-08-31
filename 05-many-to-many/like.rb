class Like

    attr_reader :user, :tweet

    @@all = []

    def initialize(user, tweet)
        @user, @tweet = user, tweet
        @@all << self
    end

    def self.all
        @@all
    end

    # def user
    #     self.user
    # end

    # def tweet
    #     self.tweet
    # end
end