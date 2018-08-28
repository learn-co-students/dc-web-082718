require 'rest-client'
require 'json'
require 'pry'


def get_book_info(url)
    response = RestClient.get(url)
    json = JSON.parse(response)
    items = json["items"]
end

def quote_title(title)
    "\"#{title}\""
end

def print_books(items)
    items.each do |book| 
        puts quote_title(book["volumeInfo"]["title"])
        puts book["volumeInfo"]["authors"].join(" & ")
        puts "*" * 20
    end
end

def get_input
    puts "What would you like to search for?"
    input = gets.chomp
    binding.pry
end

def main
    url = "https://www.googleapis.com/books/v1/volumes?q="

    # if input is blank then ask again
    # input = "Ruby Programming" "RubyProgramming"
    input = get_input
    while input.gsub(" ", "") == ""
        puts "You must enter a search term, dummy."
        input = get_input
    end
    query_parameters = input.sub(" ", "+")
    url += query_parameters
    items = get_book_info(url)
    print_books(items)
end

main