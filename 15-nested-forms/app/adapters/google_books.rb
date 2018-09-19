module GoogleBooks

  class Adapter

    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author)
      author_name_split = author.split(" ") # ["Roald", "Dahl"]
      @author = Author.create(first_name: author_name_split[0],
                              last_name: author_name_split[1])
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))

      books['items'].each do |item|
        book = ::Book.new
        book.author = author.full_name
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description'] 
        book.save
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{author_sanitizer(@author.full_name)}&maxResults=#{max_results}"
    end

    def author_sanitizer(author)
      author.gsub(/\W+/, '').downcase
    end
  end
end
