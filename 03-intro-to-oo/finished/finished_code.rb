class Cat

  attr_accessor :name, :age, :number_of_legs
  attr_reader :color

  @@all = []

  def initialize(name, color, age, number_of_legs=4)
    @name = name
    @color = color
    @age = age
    @number_of_legs = number_of_legs
    @@all << self
  end



  # def age=(age)
  #   @age = age
  # end

  def age
    if @age <= 5
      puts "You have a kitten"
    else
      puts "You have an adult cat"
    end
  end

  def self.cats_are_great
    puts "Cats are the greatest.  Dogs drool."
  end

  def self.all
    @@all
  end

  def cat_birthday
    self.age += 1
  end
  
end