class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def save
        # writes object to database
        if self.id # update existing object
            sql = "UPDATE authors set name = ? where id = ?"
            DB.execute(sql, self.name, self.id)
        else
            sql = "INSERT INTO authors (name) values (?)"
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            id = DB.execute(sql)[0][0]
            self.id = id
        end
        self
    end

    def self.create(name) # "C of CRUD"
        new_author = Author.new(name)
        new_author.save
        new_author
    end

    def self.find(id) # "R of CRUD"
        # Author.find(2)
        # returns for Author with ID=2 [2, "Mark Twain"]
        sql = "SELECT * FROM authors WHERE id = ?"
        row = DB.execute(sql, id)[0]
        make_author_from_row(row)
    end

    def self.find_by_name(name)
        sql = "SELECT * FROM authors WHERE name = ?"
        row = DB.execute(sql, name)[0]
        make_author_from_row(row)
    end

    def self.make_author_from_row(row)
        # [2, "Mark Twain"]
        Author.new(row[1], row[0])
    end

    def self.all
        sql = "SELECT * FROM authors"
        rows = DB.execute(sql)
        rows.collect do |row|
            self.make_author_from_row(row)
        end
    end

    def destroy
        sql = "DELETE FROM authors WHERE id = ?"
        DB.execute(sql, id)
    end

end