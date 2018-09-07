require_relative '../config/environment'

class BackupAuthor

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.make_object_from_row(row)
        # [1, "Mark Twain"]
        Author.new(row[1], row[0])
    end
    
    def self.create(name)
        author = Author.new(name)
        author.save
    end

    def self.find_by(name)
        sql = <<-SQL
            SELECT * from authors 
            WHERE name LIKE ?
        SQL
        results = DB.execute(sql, name)[0]
        if results
            Author.make_object_from_row(results)
        else
            return nil
        end
    end

    def self.find_or_create(name:)
        author = Author.find_by(name)
        author ||= Author.create(name)
    end

    def save
        if self.id.nil?  # doesn't exist in the database yet
            sql = <<-SQL
                INSERT INTO authors (name)
                VALUES (?)
            SQL
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            self.id = DB.execute(sql)[0][0]
        else # just update the row in the db
            sql = <<-SQL
                UPDATE authors SET name = ? WHERE id = ?
            SQL
            DB.execute(sql, self.name, self.id)
        end
        self
    end

    def self.find(id)
        sql = <<-SQL
            SELECT * from authors WHERE id = ?
        SQL
        results = DB.execute(sql, id)
        Author.make_object_from_row(results[0])
    end

    def self.all
        sql = <<-SQL
            SELECT * from authors
        SQL
        results = DB.execute(sql)
        results.map do |row|
            Author.make_object_from_row(row)
        end
    end
    
    def delete
        sql = <<-SQL
            DELETE FROM authors WHERE id = ?
        SQL
        DB.execute(sql, self.id)
    end


end