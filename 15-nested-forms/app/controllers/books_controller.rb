class BooksController < ApplicationController

    set :views, 'app/views/books'

    get "/books" do
        # return index page of all books
        @books = Book.all
        erb :index
    end

    get "/books/new" do
        @authors = Author.all
        erb :new
    end

    post "/books" do
        # create the new book
        author_id = params[:author]
        author = Author.find(author_id)
        title = params[:title]
        snippet = params[:snippet]

        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "books/#{book.id}"
    end

    get "/books/:id" do
        @book = Book.find(params[:id])
        erb :show
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :edit
    end

    put "/books/:id" do
        book = Book.find(params[:id])
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]

        book.update(author: author, title: title, snippet: snippet)
        redirect "books/#{book.id}"
    end

    get "/books/:id/delete" do 
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end

end