# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Garfield', picture: 'https://vignette.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg/revision/latest/scale-to-width-down/321?cb=20180421131132', breed: 'Tabby', quote: 'Go away', lives: 4)
Cat.create(name: 'Meowsie', picture: 'http://www.icanbc.com/wp-content/uploads/2018/07/Meowsie-06-29-18-e1530882966746-246x300.jpg', breed: 'Siamese', quote: "Don't touch mah cookie", lives: 9)
Cat.create(name: 'CreamBoi', picture: 'https://cdn.bulbagarden.net/upload/thumb/d/dc/Meowzie.png/240px-Meowzie.png', breed:'Calico', quote: 'boooi', lives: 1)

Hobby.create(name: 'Sleep', description: 'zzzzz')
Hobby.create(name: 'Scratch', description: 'OW! Buy am new sofa')
Hobby.create(name: 'Fly Fishing', description: 'krrrrr')
Hobby.create(name: 'Eat', description: 'om nom nom')

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 4)
CatHobby.create(cat_id: 2, hobby_id: 3)
CatHobby.create(cat_id: 3, hobby_id: 2)
CatHobby.create(cat_id: 3, hobby_id: 3)
