** Remind there is a code challenge **

- Build Retailer model
    - Retailer has many snacks
    - Snacks belongs_to retailer

- `rails g model Retailer name year_established:integer`

- add migration for snack retailer_id:integer
    - `rails g migration AddRetailerToSnacks retailer_id:integer`

- seeds.rb

```retailers = Retailer.create([{name: "Hostess", year_established: 1929},
                                {name: "Girl Scouts", year_established: 1944}])

snacks = Snack.create([{name: "Thin Mints", calories: 200, deliciousness: 6, retailer_id: 1},
                       {name: "Chicken fingers", calories: 650, deliciousness: 8, retailer_id: 2}])
```

- `rake db:reset` (drop, migrate, seed) 
    - Caveat:  nukes db, don't use in production

- `rails g controller Retailers index`

- add belongs_to and has_many to models
```belongs_to :retailer```
```has_many :snacks```

- "How should we include retailers on our snack page?" (Elicit dropdown)

```<%= f.collection_select(:retailer_id, Retailer.all, :id, :name, prompt: true) %>```

- Will not create until added to required_params - add in retailer_id

retailer.rb

```
class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks
end
```


```rb
class Retailer < ApplicationController

  def index
    @retailers = Retailer.all
  end

  def new
    @retailer = Retailer.new
    @retailer.snacks.build
  end

  def create
    @retailer = Retailer.create(retailer_params)
    redirect_to snacks_path
  end

  private

  def retailer_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end
end
```

retailers new.html.erb
 - You might be tempted to allow multiple snacks here but form will process the empty ones
```

    <h1>New Retailer</h1>

    <%= form_for @retailer do |r| %>
        <%= r.label :name %>
        <%= r.text_field :name %>
        <%= r.label :year_established %>
        <%= r.number_field :year_established %>

        <h2>Snacks</h2>
            <%= r.fields_for :snacks do |snack| %>
                <%= snack.label :name %>
                <%= snack.text_field :name %>
                <%= snack.label :calories %>
                <%= snack.number_field :calories %>
                <%= snack.label :deliciousness %>
                <%= snack.select :deliciousness, (1..10) %>
            <% end %>
    <% end %>
```
