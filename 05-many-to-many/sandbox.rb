class School

    attr_reader :name

    # def name
    #     @name
    # end

    # def name=(new_name)
    # @name = new_name
    # end

    # school.name 
    # flatiron

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor_object)
        @instructors << instructor_object
    end

    def instructors
        @instructors.each do |instructor|
            puts "#{instructor.name} teaches at #{self.name}"
        end
        @instructors
    end

    # def change_name(new_name)
    #     # puts "I am a custom name method"
    #     # @name == self.name=
    #     self.name = new_name
    # end 

end

class Instructor

    attr_accessor :name

    def initialize(name)
        @name = name
    end

end    

flatiron = School.new("Flatiron")
paul = Instructor.new("Paul Nicholsen")
nicole = Instructor.new("Nicole Dalcin")
bruno = Instructor.new("Bruno Garcia")
flatiron.add_instructor(paul)
flatiron.add_instructor(bruno)
flatiron.add_instructor(nicole)
paul.name = "Paul Nichols"
print flatiron.instructors
# puts flatiron.name
# flatiron.change_name("Super awesome school of code")
# puts flatiron.name
# flatiron.name = "something new"