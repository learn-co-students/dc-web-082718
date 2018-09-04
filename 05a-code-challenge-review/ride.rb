class Ride

    attr_reader :distance, :driver, :client
    # belongs to driver
    # belongs to client

    @@all = []

    def initialize(distance, driver, client)
        @distance = distance.to_f
        @driver = driver
        @client = client
        @@all << self
    end

    # get all the rides
    def self.all
        @@all
    end

    def self.average_distance
        # returns average distance of all rides
        all_distances = Ride.all.map {|ride| ride.distance}
        number_of_rides = Ride.all.length
        sum_of_distances = all_distances.inject(:+)
        sum_of_distances / number_of_rides

    end
end