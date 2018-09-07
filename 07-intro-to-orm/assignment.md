With a partner/group:

1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

<<-SQL
    CREATE TABLE IF NOT EXISTS books 
        (id integer PRIMARY KEY, title text, author_id INTEGER);
SQL 

<<-SQL
    CREATE TABLE IF NOT EXISTS authors 
        (id integer PRIMARY KEY, name text);
SQL

2.  Write the SQL to get all Books
SELECT * FROM books;

3.  Write the SQL to get all Authors
SELECT * FROM authors;

4.  Write the SQL to create a new book, given the title and author's id

INSERT INTO books (title, author_id) VALUES ("Catch-22", 27);

5.  Write the SQL to create a new author, given the author's name

INSERT INTO authors (name) VALUES ("Mark Twain")

6.  Write the SQL to get all Books by a given author, given the author's id

SELECT * FROM books WHERE author_id = 27

7.  Write the SQL to get all Books by a given author, given the author's name

SELECT * FROM books JOIN authors ON books.author_id = authors.id WHERE authors.name = "Mark TWAIN"

8.  Write the SQL to update a Book's title

UPDATE books
SET title = "New title"
WHERE title = "Old title";


