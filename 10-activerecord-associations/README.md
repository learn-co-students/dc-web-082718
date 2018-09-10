# ActiveRecord Associations

- ActiveRecord Review (File Structure, Migrations, Base methods)
- ActiveRecord Logger
- Relationships in ActiveRecord

## Review

- Gemfile
- Rakefile
- config/environment.rb
- app/models

## ActiveRecord Modeling Conventions
file called `doctor.rb` defines a class `Doctor`
table is called `doctors`
migration often called `create_doctors`
`belongs_to :doctor`
`has_many :patients`


## Migrations
addition to the database
"version control"
set of changes to the shape of our database


SQL
Querying the database
SELECT
UPDATE
INSERT
DELETE

Changing the structure of our tables
CREATE TABLE
ALTER TABLE ADD COLUMN
DROP TABLE

-> in Ruby, migrations

## Steps
1. create migration
2. run migration
3. create the model


## Relationships
