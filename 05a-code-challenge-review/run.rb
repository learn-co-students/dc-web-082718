require_relative "./client.rb"
require_relative "./driver.rb"
require_relative "./ride.rb"
# require_relative "./dummy_folder/dummy_file.rb"

require "pry"

client1 = Client.new("Bob")
client2 = Client.new("Mary")
client3 = Client.new("Jebediah")

driver1 = Driver.new("Curly")
driver1.car = "Toyota Camry"
driver2 = Driver.new("Judd")
michelle = Driver.new("Michelle")

ride1 = Ride.new(3.0, driver1, client1)
ride2 = Ride.new(5.0, driver1, client2)
ride3 = Ride.new(4.0, driver2, client1)
ride4 = Ride.new(4.0, driver2, client1)
ride5 = Ride.new(150, driver1, client3)
ride6 = Ride.new(97.0, driver2, client1)
ride7 = Ride.new(10.0, michelle, client1)
ride8 = Ride.new(10.0, michelle, client2)
puts "client1.drivers returns all of drivers for a client"
puts client1.drivers == [driver1, driver2, michelle]

puts "returns all clients rides"
puts client1.rides == [ride1, ride3, ride4, ride6, ride7]

puts "returns total distance traveled by client"
puts client1.total_distance == 118.0

puts "returns all members who have travelled over 100 miles"
puts Client.premium_members == [client1, client3]

puts "returns all clients of a driver"
puts michelle.clients == [client1, client2]

puts "returns all rides a driver has made"
puts michelle.rides == [ride7, ride8]

puts "returns all drivers who have driven more than X miles"
puts Driver.mileage_cap(100.0) == [driver1, driver2]

puts "returns average distance of all rides" # 283.0 / 8
puts Ride.average_distance == 35.375
binding.pry
puts "I love code challenges!"