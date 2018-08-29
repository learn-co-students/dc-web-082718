require "pry"

class Cat 

  attr_accessor :name, :favorite_toy
  attr_writer :fluffiness
    # def fluffiness=(fluffiness) # setter
    #     @fluffiness = fluffiness
    # end
  attr_reader :number_of_legs
    # def number_of_legs # getter
      #   @number_of_legs
      # end

  @@all_cats = [] # class variable

  def initialize(my_name, fluffiness, number_of_legs=4)
    puts "I am creating a new cat"
    @name = my_name
    @fluffiness = fluffiness
    @number_of_legs = number_of_legs

    @@all_cats << self # cat instance, i.e. <Cat Ellax0495ui45uo324u90>
  end

  def self.all_cats # self means class Cat
    # binding.pry 
    @@all_cats 
  end


  # def name=(cat_name)
  #   # setter method 
  #   @name = cat_name
  # end

  # def name
  #   @name
  # end

  # def fluffiness=(fluffiness_rating)
  #   # setter
  #   @fluffiness = fluffiness_rating
  # end

  def fluffiness
    # getter
    if @fluffiness > 6
        puts "I am a very floofy kitty"
    else
        puts "I am not so floofy but still great"
    end
  end

  # def number_of_legs=(number_of_legs)
  #   @number_of_legs = number_of_legs
  # end

  # def number_of_legs
  #   @number_of_legs
  # end

  # def favorite_toy=(favorite_toy)
  #   @favorite_toy = favorite_toy
  # end

  # def favorite_toy
  #   @favorite_toy
  # end

  def introduce
    puts "Hi my name is #{@name}"
  end

end

ella = Cat.new("Ella", 10)
lexi = Cat.new("Lexi", 8, 3)

# ella.get_all_cats
# lexi.get_all_cats
# [<object Ella>, <object Lexi>]

# all_cats = Cat.get_all_cats

print Cat.all_cats
# print Cat.fluffiness # instance variable won't work here
# print Cat.name