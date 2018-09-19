class AuthorsController < ApplicationController

    get "/authors" do
        @authors = Author.all
        erb :"authors/index"
    end

    get "/authors/new" do

        erb :"authors/new"
    end

    post "/authors" do
        # {"first_name"=>"Ray",
        #  "last_name"=>"Bradbury",
        #  "book"=>
        #   [{"title"=>"Fahrenheit 451", "snippet"=>"Heh heh fire"},
        #    {"title"=>"Illustrated Man", "snippet"=>"Tattoos are fun"},
        #    {"title"=>"Dandelion Wine", "snippet"=>"Pretty flowers and alcohol"}]}
        first_name = params[:first_name]
        last_name = params[:last_name]
        author = Author.create(first_name: first_name, last_name: last_name)
        params[:book].each do |book_hash|
            book = Book.new
            book.title = book_hash["title"]
            book.snippet = book_hash["snippet"]
            book.author = author 
            book.save
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/:id" do
        author_id = params[:id]
        @author = Author.find(author_id)
        erb :"authors/show"
    end

    get "/authors/:id/edit" do
        @author = Author.find(params[:id])
        erb :"authors/edit"
    end

    put "/authors/:id" do
        binding.pry
        author = Author.find(params[:id])
        first_name = params[:first_name]
        last_name = params[:last_name]
        author.update(first_name: first_name, last_name: last_name)
        redirect "/authors/#{author.id}"
    end

end