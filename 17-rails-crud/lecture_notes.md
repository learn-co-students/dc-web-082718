lecture_notes.md

- `rails new snack-tracker`
- `cd snack-tracker`
- `rails g model Snack name calories:integer deliciousness:integer`
    - Look at what it's built
        -model
        -migration
        -test file
        -fixtures 
-`rails db:migrate`
    - show schema
        - null: false
        - point out `created_at`, `updated_at`
- build some seed data
- Review RESTful routes (index, show, edit, create, new, update, destroy)
- in config/routes.rb:
    -`  resources :snacks, only: [:index]`
- Build a controller
- `rails g controller Snacks index`
    - Build this in the wrong directory and show the `rails destroy controller Snacks` command
- app/controller/snacks_controller.rb

```rb
class SnacksController < ApplicationController

        def index
            @snacks = Snack.all
            
        end

end
```

- Build the view in the snacks folder
    - Point out extension `.html.erb`
- Go to localhost:3000/index, which is wrong.  Show `rails routes`
    - localhost:3000/snacks

- add show route, controller, view.  Will work without restarting.  App folder can change without restart; routes need restart (but I guess not if just changing the only?)
    - show traditional way of building links, then show `rails routes` again as well as go into `rails c` and show the `app.snacks_path` and other routes
    - `<%= link_to snack.name, snack_path(snack) %>`
    - add some css somewhere on the page to introduce
        - external stylesheets
        - classes and ids
        - basic css syntax

- add `:new :create`
    - `@snack = Snack.new`
    - new.html.erb
    - **`form_for` vs `form_tag`**
        -`form_for` represents an ActiveRecord model
        -`form_tag` doesn't, and should be used for custom forms
        - both include csrf validation.  Before defining fields, show the form (with all hidden fields) in the inspector

```html
<h1>New Snack:</h1>
<%= form_for @snack do |f| %>
    <%= f.label :name %>
    <%= f.text_field :name %>
    <%= f.label :calories %>
    <%= f.number_field :calories %>
    <%= f.label :deliciousness %>
    <%= f.select :deliciousness, (1..10) %>
    <%= f.submit "Snackify" %>
<% end %>
```

- put byebug in Create
- Show params
- Show `Snack.create(params)` and `Snack.create(params[:snack])` give same error.
    - Security risk
        - Mass assignment, can put in bad code
```rb
    def create
        @snack = Snack.create(params.require(:snack).permit(:name, :deliciousness, :calories))
        redirect_to @snack
    end
```

- add :update and :edit to routes
- edit.html.erb matches new.html.erb
    - move form into `_snack_form.html.erb`
    - `<%= render "snack_form" %>`
- add link from detail page to edit page
    - `<%= link_to "Edit", edit_snack_url(@snack) %>`
- add link on index page to show page
    - `<%= link_to snack.name, snack_url(snack) %>`
- SnackController#update matches create.  Move `allowed_params` into private method
- Destroy method
    - can remove `only:` now since we're doing them all
- add form_tag (custom form so not form_for) to edit page

```rb
    <%= form_tag @snack, method: "DELETE" do %>
        <%= submit_tag "Delete" %>
    <% end %>
```

```rb
    def destroy
        Snack.destroy(params[:id])
        redirect_to snacks_path
    end
```

- `before_action :find_snack, only: [:edit, :update, :show]`
```rb
def find_snack
        @snack = snack.find(params[:id])
    end
```