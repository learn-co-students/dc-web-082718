class Book

    attr_accessor :title, :author_id
    attr_reader :id 

    def initialize(title, author_id, id=nil)
        @title = title
        @author_id = author_id
        @id = id
    end

end