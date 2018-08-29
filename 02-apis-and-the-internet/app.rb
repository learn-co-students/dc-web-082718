require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

# query_parameter = "ruby+programming"
# url = GOOGLE_BOOKS_API_BASE_URL + query_parameter
# response = RestClient.get(url)
# json = JSON.parse(response)


def welcome
    # welcome my user 
    puts "Welcome to the book search database\n"
end

def get_user_input
    # get user search terms
    puts "What would you like to search for?\n"
    user_input = gets.chomp
    # format input (change spaces to plus signs)
    user_input.gsub!(" ", "+")
end

def get_book_data(search_terms)
    # make request to google books
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms
    book_data = RestClient.get(url)
end

def get_title(book_json)
    book_json["volumeInfo"]["title"]
end

def get_authors(book_json)
    authors = book_json["volumeInfo"]["authors"]
    authors.join(", ")
end

def format_book_data(book_data)
    # format the response into an array of hashes
    # [{"author": "someone", "title": something}]
    json = JSON.parse(book_data)
    books = json["items"][0...10]
    books.map do |book|
        title = get_title(book)
        authors = get_authors(book)
        {"title": title, "authors": authors}
    end
end

def display_results(book_data)
    # display the results to user
    book_data.each do |book|
        puts "#{book[:title]} by #{book[:authors]}"
        puts "*****************\n\n"
    end
end

def main
    welcome
    search_terms = get_user_input
    book_data = get_book_data(search_terms)
    book_hash = format_book_data(book_data)
    display_results(book_hash)

end

main