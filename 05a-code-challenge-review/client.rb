class Client

    attr_accessor :name
    # has many rides

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all 
    end

    def drivers
        # returns all drivers a client has ridden with

        # look through all the rides
        all_rides = Ride.all
        # find the ones that this client has been on
        client_rides = all_rides.select do |ride|
            ride.client == self
        end
        # return those drivers
        client_rides.collect do |ride|
            ride.driver
        end.uniq
    end

    def rides
        # returns all rides a client has been on

        # look over all the rides
        # get the ones this client has taken
        Ride.all.select do |ride|
            ride.client == self
        end
    end

    def total_distance
        # should calculate the total distance the client has travelled with the service
        client_ride_distances = self.rides.map {|ride| ride.distance} # [3.0, 4.0, 4.0]
        client_ride_distances.inject(:+)
    end

    def self.premium_members
    # should find all clients who have travelled over 100 miles with the service
        return_value = []
        Client.all.each do |client|
            if client.total_distance > 100
                return_value << client
            end
        end
        return return_value

    end
end