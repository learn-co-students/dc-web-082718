class Driver

    attr_accessor :name, :car
    # has many rides

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all 
    end

    # hidden methods (by attr_accessor)
    # def car = (car_name)
    #     @car = car_name
    # end

    # def car
    #     @car
    # end

    def clients
        # returns all clients a driver has had
        my_rides = Ride.all.select do |ride|
            ride.driver == self
        end  #[ride1, ride3, ride4]
        my_rides.map {|ride| ride.client}
    end
    
    def rides
        # returns all rides this driver has made
        Ride.all.select do |ride|
            ride.driver == self
        end
    end

    def total_distance
        all_distances = self.rides.map {|ride| ride.distance}
        all_distances.inject(:+)
    end

    def self.mileage_cap(distance)
        # takes an argument of a distance (float) 
        # and returns all drivers who have exceeded
        # that mileage
        Driver.all.select do |driver|
            driver.total_distance > distance
        end
    end

















end