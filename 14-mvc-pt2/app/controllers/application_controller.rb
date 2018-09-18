class ApplicationController < Sinatra::Base

    set :views, 'app/views'
    set :method_override, true

    get "/" do
        erb :home
    end

    get "/books" do
        # return index page of all books
        @books = Book.all
        erb :"books/index"
    end

    get "/books/new" do
        erb :"books/new"
    end

    post "/books" do
        # create the new book
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]

        book = Book.create(author: author, title: title, snippet: snippet)

        redirect "books/#{book.id}"
    end

    get "/books/:id" do
        @book = Book.find(params[:id])
        erb :"books/show"
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :"books/edit"
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

    get "/authors" do
        @authors = Author.all
        erb :"authors/index"
    end



end


