- MVC Architecture
    - Models: Store the data
    - Controllers: Logic of your app
    - Views: Templates to show user

    - Restaurant analogy:
        - User sits down and gives an order to the waiter (controller) who goes into the kitchen where the chef (model) makes the food.  The waiter then brings it out in a fancified arrangement of a view.
        - The user does not talk directly to the model / chef
        - Logic in the view should be kept to a minimum as much as possible

    - These are guidelines, not rules.

- Show structure of new app with MVC folders.

- Create migration for the `books` table.
- Show seed table using Google Books

```
class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :author
      t.string :title
      t.text :snippet
    end
  end
end
```

- Build out controllers



```
class ApplicationController < Sinatra::Base

    get "/" do
        "Hello World"
    end
    
end
```

- `rackup` to run.  Introduce `shotgun` when sufficiently annoyed

- works but violates our MVC architecture
- add `erb :home`

- make a `home.html.erb` file in apps/views.  This will break because Sinatra looks in the controllers view.

- `set :views, 'app/views'` at top of controller

- Review CRUD.  Introduce REST.  "Representational State Transfer".  URL should represent the state of the data we're in.  ESPN.com is a good example.

- Show chart of HTTP Verbs to Paths to Actions
- Some things have two parts--e.g., creating a new object needs a get request for the empty form and a post request to make the thing

- Fill out deliverables with planned routes

- Build index route
`@books = Book.all` Point out `@`

- discuss `<% %>` vs `<%= %>`

## Detail page:

- Put in pry to show params

```
    get '/books/:id' do
        @book = Book.find(params[:id])
        erb :show
    end
```
- Change index page to links

## Create page:


- Build routes for creating a new book.  Add the form to `new.erb`:

    - get `/books/new`
    - post '/books'

```
<form action="/books" method="POST">
    <label for="author">Author</label>
    <input type="text" name="author" >
    <label for="title">Title</label>
    <input type="text" name="title" >
    <label for="snippet">Snippet</label>
    <input type="text" name="snippet" >
    <input type="submit" value="Create book">
</form>
```

- put pry in post to see

- make the long way first, point out we're just recreating params
```
    post '/books' do 
        # author = params[:author]
        # title = params[:title]
        # snippet = params[:snippet]
        Book.create(params)
    end
```

- renders blank page, because it was a post to books
- `redirect "books/#{book.id}"`


## Edit Page

`get /books/:id/edit`
`patch /books/:id`

```
    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch '/books/:id' do
        book = Book.find(params[:id])
        book.update(params)
        redirect "books/#{book.id}"
    end
```
```rb
<form action="/books/<%= @book.id %>" method="patch">
    <label for="author">Author</label>
    <input type="text" name="author" value="<%= @book.author %>">
    <label for="title">Title</label>
    <input type="text" name="title" value="<%= @book.title %>">
    <label for="snippet">Snippet</label>
    <input type="text" name="snippet" value="<%= @book.snippet %>">
    <input type="submit" value="Edit book">
</form>
```

- The URL will be messed up on the submit because the internet doesn't support patch
- Change form method to `POST`
- `<input type="hidden" name="_method" value="patch">`
- `set :method_override, true` at top of controller
- `params` won't work b/c of method attribute; needs to be done manually

## Delete

```rb
    <form action="/books/<%= @book.id %>" method="POST">
        <input type="hidden" value="delete" name="_method">
        <input type="submit" value="Delete this book">
    </form>
```

```rb
    delete "/books/:id" do
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end
```