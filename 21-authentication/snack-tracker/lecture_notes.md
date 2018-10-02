- uncomment bcrypt in Gemfile

- add `has_secure_password` to User model

- add password_digest in a migration
`rails g migration AddPasswordDigestToUsers password_digest:string
`

- create user in console
- `user = User.create(username: "paul", password: "password")`
- `user.authenticate("password")` returns User object
- `user.authenticate("something_else")` returns `False`

- `user = User.create(username: "someone", password: "something", password_confirmation, "something_elsxe")` does not get saved

- `user.valid?` is False
- `user.errors.full_messages`

- Build create user page

- routes for user new/create
- `resources :users, only: [:new, :create]`

- `rails g controller Users new` (Why am I not including create?)

new.html.erb

```rb
<h1>Create a new user or <%= link_to "login", login_path %></h1>

<%= form_for @user do |f| %>
    <%= f.label :username %>
    <%= f.text_field :username %>
    <%= f.label :password %>
    <%= f.password_field :password %>
    <%= f.label :password_confirmation %>
    <%= f.password_field :password_confirmation %>
    <%= f.submit %>
<% end %>
```

```rb
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.valid?
        @user.save
        redirect_to snacks_path
    else
        render :new
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
```
Demo creating a user.  Should log in upon user-creation:

users_controller.rb
```rb
  def create
    @user = User.new(user_params)

    if @user.valid?
        @user.save
        ** session['user_id'] = @user.id **
        redirect_to snacks_path
    else
        render :new
    end
  end
``` 

add to login view:

# sessions/new.html.erb
```rb
  <%= label_tag "Password" %>
  <%= password_field_tag :password %>
```

Try to login with byebug in SessionsController#create

```rb
class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:username])

    if @user.authenticate 
        session[:user_id] = @user.id 
        redirect_to snacks_path
    else 
        flash.notice = "No user found with that name"
        render :new
    end
  end
```

This will break if `user` is undefined--check for `@user && @user.authenticate...`

OR 

```rb
  def create
  @user = User.find_by(username: params[:username])

  if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id 
      redirect_to snacks_path
  else
      flash.notice = "Username and password do not match"
      render :new
  end
end
```
