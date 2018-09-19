require_relative './config/environment'
require_relative './app/controllers/books_controller'
require_relative './app/controllers/authors_controller'

use BooksController
use AuthorsController
run ApplicationController
