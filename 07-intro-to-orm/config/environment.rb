require 'bundler'
Bundler.require

DB = SQLite3::Database.new('db/library.db')


require_relative '../lib/book.rb'
require_relative '../lib/author.rb'



# module SQLite3

#     class Database

#         def new
#             # do some new things
#         end

#         def execute

#         end
#     end
# end

# SQLite3::Database.new(whatever)