require 'require_all'
require_relative '../config/environment.rb'
require_relative '../lib/author.rb'

Author.find_or_create_by(name: "Mark Twain")
Author.find_or_create_by(name: "Charles Dickens")
Author.find_or_create_by(name: "Maya Angelou")
Author.find_or_create_by(name: "Charlotte Bronte")
Author.find_or_create_by(name: "Shel Silverstein")