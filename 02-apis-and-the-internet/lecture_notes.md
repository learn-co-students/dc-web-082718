### Intro

In hasketball couldn't we just have done this instead of going deep into `map`

```ruby
  def get_players
  # game_hash.values.map do |team_info|
  #   team_info[:players]
  # end.flatten
  game_hash[:home][:players] + game_hash[:away][:players]
end
```

> **Q:** Anyone have a reason why we wouldn't just do that?  
> **A:** If our data ever changed, we had info about all teams in the league, all games in a season.

But... Currently we don't have a way to dynamically get data, all data comes from the specs \(like in Deli Counter interview\) and is made-up.

So we know a bunch about Ruby _What do we know about Ruby?_

* Methods
* Return Values
* Data Structures

... but who cares? this is all with made up data, can we use what we know to interact with real data

### How the internet works

Students may not yet understand these concepts:

* GET requests
* Server responses
* Developer console
* APIs
* JSON \(string formatted as a hash/object\)
* Ruby Gems

Navigate to "reddit.com" in the browser. What happens? What do we see? How is what we see described in code? It's HTML. The HTML is sent from another computer \(server\) to my browser and my browser reads it, interprets it, and displays it for me.

Navigate to "reddit.com/.json". What type of information am I getting here? Does it look like anything we've seen before? Similar to a hash.

Define JSON: a language-agnostic data format that we can get from websites. It's a convention of the internet.

Recommend downloading a JSON viewer Chrome extension.

We could imagine writing ruby code to do this programmtically

Pseudo-code:

```ruby
response = make_request('www.reddit.com/.json')

reddit_hash = parse_into_hash(response)
```

### Ruby gems for working with APIs

Gems are just code that other people have written that we can download and use in our own programs.

Gems have dependencies \(required other programs\).

`rest-client` is a gem that allows us to make HTTP requests.

`json` is a module in the Ruby standard library that allows us to parse and create JSON.

Popular Gems have documentation that have instructions as well as examples. You can also always look at the source code of the Gem if you're feeling very daring.

Look at the documentation for `rest-client` to show the example of how to make a request.

```bash
gem install rest-client
gem install pry
```

```ruby
require 'pry'
require 'rest-client'
require 'json'
```

```rb
url = "https://www.reddit.com/.json"
response = RestClient.get(url)
json = JSON.parse(response)
```

### Making requests to Google Books API

- define API (application programming interface)

[Google Books API](https://www.googleapis.com/books/v1/volumes?q=ruby+programming)

Hard code in a search term and show the response from google books api `"https://www.googleapis.com/books/v1/volumes?q=ruby+programming"` Code along, every step of the way checking what each subsequent method call returns with `.class`. Ask what's the type, what's the type, what's the type?

Keys as strings instead of symbols with JSON.

Start writing all the code all in one big block. It will get messy as you start having to check for edge cases such as authors being not an Array, but `nil` or description being `nil`

Getting back `nil` is fine, but trying to do something to `nil` is an issue. `nil` doesn't respond to the message `join`, etc.

```ruby
if  book["volumeInfo"]["authors"]
 authors = book["volumeInfo"]["authors"].join(" and ")
else
 authors = "No authors found"
end
```

```ruby
if  book["volumeInfo"]["description"]
 description  = book["volumeInfo"]["description"][0..140]
else
 description = "No description available"
end
```

All this logic in one big block will get messy and the code is not great.

> **Q:** What principle did we mention yesterday that we are breaking?  
> **A:** Single responsibility

### Student Exercise

```bash
# Deliverables
# 1. Write an application that takes a search term from a user
# 2. Make a Request to the GoogleBooks API and get back some results
# 3. Display the titles, author names, and description for each book
```

### Refactoring with Single Responsibility Principle

Build out methods like `get_authors` or `get_title` Ask students to detemrine what are good candidates for further _Encapsulation_ \(&lt;- define\)

end with code like this:

```ruby
require 'pry'
require 'rest-client'
require 'json'


# write an application that takes in some user input
def welcome
  puts "Welcome to the BookSearcher"
  puts "Please enter a term:"
end

def get_user_input
  gets.chomp
end


# make a request to the google books api using term

def fetch_books(term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{term}")

  JSON.parse(response.body)
end


def get_title(book)
 title = book["volumeInfo"]["title"]
end

def get_author(book)
  if  book["volumeInfo"]["authors"]
   book["volumeInfo"]["authors"].join(" and ")
  else
   "No authors found"
  end
end

def get_description(book)
  if  book["volumeInfo"]["description"]
    book["volumeInfo"]["description"][0..140] + "..."
  else
    "No description available"
  end
end

def print_book(title, authors, description)
  puts "*" * 30
  puts "Title: #{title}"
  puts "Authors: #{authors}"
  puts "Description: #{description}"
end


def run
  welcome
  search_term = get_user_input

  fetch_books(search_term)["items"].each do |book|
    title = get_title(book)
    authors = get_author(book)
    description = get_description(book)

    print_book(title, authors, description)
  end
end

# and display a list of books, including title, author and description, that are found
run
```
