- Have the assignment.md file on projector for students to work on as they settle in

- Map out book / author domain
- In terms of Database architecture, talk about why the foreign key attribute needs to be on the `belongs_to` model (i.e., the reverse would not make sense, and would need to support an array)
- Each Ruby class should correspond to one SQL table
- Each Ruby instance should correspond to a single row in a table
- Each Ruby attribute should correspond to a single column in a table

- Introduce Environment and Gemfile
    - `bundle install` adds Gems in Gemfile and their dependencies
    - Point out Gemfile.lock
    - Bundler.require == requiring all the gems without listing each one at the top
    - DB hash points to instance of a database
    - Just Ruby classes:
    ```
    module SQLite3

        class Database

            def initialize(filename)
            ...
            end
        end

    end
    ```
    - Rake tasks
        - Add Rakefile
        - `rake -T` to list all tasks
        - Build rake task
        ```rb
        desc "Says hello"
        task :hi do
            puts "Hello everyone!"
        end
```
    - `Pry.start` opens a Pry that I can play with 

    - No longer need to do things like a .all method--everything is written to DB
    - HEREDOC:
    ```rb
     <<-SQL
        SQL STATEMENT
    SQL
    ```

- Define `CRUD`

- Build `create_database` rake task (note:  For some reason, the sql create table if not exists commands need to be entered as separate database transactions)

- Build `Author.create`
    - Need to create a Ruby object
    - Need to save to database

- Build `Author#save`
    - (this is an instance method as opposed to the class method Create)
    - play in the console
    - introduce `last_insert_rowid()`

```rb  
    def save
        # save to database
        sql = "INSERT INTO authors (name) values (?)"
        DB.execute(sql, self.name)
        sql = "SELECT last_insert_rowid()"
        @id = DB.execute(sql)[0][0]
    end

    def self.create(name)
        new_author = Author.new(name)
        new_author.save
    end

```  

- Build find method
```rb
    def self.find(id)
        sql = <<-SQL
            SELECT * FROM authors
            WHERE id = ?
        SQL
        row = DB.execute(sql, id)[0]
        Author.create_author_from_row(row)
    end

    def self.create_author_from_row(row)
        # [1, "Mark Twain"]
        Author.new(row[1], row[0])
    end
```

- Build all method
```rb
  def self.all
        sql = "SELECT * FROM authors"
        results = DB.execute(sql)
        results.map {|row| self.create_author_from_row(row)}
    end
```

- Build destroy method
```rb
    def destroy
        sql = "DELETE FROM authors WHERE id = ?"
        DB.execute(sql, self.id)
    end
```

- Update doesn't need a method; Ruby object updated as always, but we need to modify our save method to write to the database

```rb    
def save
        # save to database
        if id.nil?
            sql = "INSERT INTO authors (name) values (?)"
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            @id = DB.execute(sql)[0][0]
        else
            sql = "UPDATE authors set name = ? WHERE id = ?"
            DB.execute(sql, self.name, self.id)
        end
    end
```