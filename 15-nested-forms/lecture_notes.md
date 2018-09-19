- Continue with code from yesterday's lecture (14-sinatra-forms-pt2)
- Draw out one-to-many relationship from author to books.  Who should be responsible for holding FK? (Book)
- Begin with changing application to:
    - Have a separate Author table
    - 
    ```rb
    rake db:create_migration NAME=create_author_table
    ```

```rb
class CreateAuthorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
        t.string :name
    endr
  end
end
```
    - Add FK relationship from Book to Author
    - `rake db:create_migration NAME=add_author_id_to_books`

```rb
class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_id, :integer 
  end
end
```
    - show results of `db:migrate:status` and schema table
    - Remove author string from Book schema
    - `rake db:create_migration NAME=remove_author_from_books`
    - Make an Author model (discuss need to make Author in both the database and a Ruby model).  
    - Update GoogleBooks::Adapter to populate Author table and correctly store Author name while preserving author_url / slug capabilities.  Move the methods from the adapter to the model. 
            - What methods go where?  Things that act directly on an Author object should go on the models.
            - new migrations to add author table, add author_id to column to books, remove author column from books
            - create author.rb
            - move slug method into author class
            - update googlebooks adapter to use author.slug in author_url
            - update googlebooks adapter to find_or_create an author
            - add relationship to Book and Author classes
    - create AuthorsController and BooksController (**PLURAL**).  Move book routes into BooksController.  Move the views directory into subdirectory `/books` Specify views at top: `set :views, 'app/views/books'`.  
    - In `config.ru`:
        ```rb
        require_relative './config/environment'

        require_relative './app/controllers/authors_controller'
        require_relative './app/controllers/books_controller'

        use AuthorsController
        use BooksController
        run ApplicationController
        ```
        * can have multiple `use`
        * only one `run`
    - move books views into folder

    - Build `index` and `show` pages for Author
    - Alter book create page to use `book[attribute]` syntax, explicitly entering the author_id
    - Alter Book create pages to have an author dropdown
    ```
    <select name="book[author_id]">
        <% @authors.each do |author| %>
          <option value="<%= author.id %>">
            <%= author.name %>
          </option>
        <% end %>
    </select>
    ```

    - When creating a new author we should be able to simultaneously create books.
        - First add to the form a single book:
        ```
            <input type="text" name="book[title]" placeholder="Title">
            <input type="textarea" name="book[][snippet]" placeholder="Snippet"> 
        ```
        - Show `params` in pry
        - Then multiple books (note the `[]`) and show in pry
        - ```
        <input type="text" name="book[][title]" placeholder="Title">
        <input type="textarea" name="book[][snippet]" placeholder="Snippet">
        ```
```rb
post "/authors" do 
    author_name = params[:name]
    author = Author.create(name: author_name)
    binding.pry
    params[:book].each do |book_info|
        Book.create(author: author,
                    title: book_info[:title],
                    snippet: book_info[:snippet])
    end
    redirect "/authors/#{author.id}"
end
```