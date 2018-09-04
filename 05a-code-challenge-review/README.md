## Deliverables
You are building an app for a Lyft/Uber competitor
- your models are clients, drivers, rides
  - a client has a name
  - a driver has a name
  - a driver has a car (stored as a string of make model, e.g. "Toyota Camry")
  - a ride has a distance (as a float)
  - a client has many rides
  - a driver has many rides
  - a ride belongs to a client and a driver
Write out the relationships using has_many, belongs_to and has_many_through. Create the necessary methods to connect these classes.

#### Client
- #drivers
  - returns all drivers a client has ridden with
- #rides
  - returns all rides a client has been on
- .all
  - returns an array of all clients
- #total_distance
  - should calculate the total distance the client has travelled with the service
- .premium_members
  - should find all clients who have travelled over 100 miles with the service

#### Driver
- #clients
  - returns all clients a driver has had
- #rides
  - returns all drives a client has made
- .all
  - returns an array of all drivers
- .mileage_cap(distance)
  - takes an argument of a distance (float) and returns all drivers who have exceeded that mileage

#### Ride
- #client
  - returns the client object for that ride
- #driver
  - returns the driver object for that ride
- .average_distance
  - should find the average distance of all rides