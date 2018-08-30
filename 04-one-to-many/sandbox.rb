class School

    attr_reader :name, :instructors

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor_name)
        @instructors << instructor_name
    end
end

flatiron = School.new('Flatiron')
flatiron.add_instructor("Paul")
print flatiron.instructors

