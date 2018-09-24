# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all

Snack.create(name: "Twinkies", calories: 500, deliciousness: 6)
Snack.create(name: "Ring Dings", calories: 600, deliciousness: 5)
Snack.create(name: "Carrot Sticks", calories: 100, deliciousness: 5)