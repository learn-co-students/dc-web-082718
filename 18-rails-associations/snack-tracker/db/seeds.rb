# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all
Retailer.destroy_all

hostess = Retailer.create(name: "Hostess", year_established: 1924)
girl_scouts = Retailer.create(name: "Girl Scouts", year_established: 1902)
Snack.create(name: "Twinkies", calories: 500, deliciousness: 6, retailer_id: hostess.id)
Snack.create(name: "Ring Dings", calories: 600, deliciousness: 5, retailer_id: hostess.id)
Snack.create(name: "Tagalongs", calories: 100, deliciousness: 5, retailer_id: girl_scouts.id)