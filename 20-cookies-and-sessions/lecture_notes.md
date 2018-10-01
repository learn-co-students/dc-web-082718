- HTTP is "Stateless" - requests don't know about each other
- Cookies! Small pieces of data sent from a website in the headers and stored on the computer while browsing.  (show in "edit this cookie" Chrome Extension)
- Domain Specific - show in different windows
- Add `cookies['favorite'] = "chocolate-chip"` in `SnackController#show`; just a key-value pair (DON'T GO TO SHOW PAGE YET)

- Add `<%= cookies['favorite'] %>` to index page to show cookie.  Go to index page, not there yet.  Then go to show page and back to index page

- Do the same thing with 'session' but show in Edit Cookie that it gets encrypted

- On Github.com or any other website--why don't I have to log in on every page?  If it's stateless, how does it know that I'm logged in?

- Building out sign-in; show on github what happens if you clear all cookies and reload (no longer logged in)
    - Cookies expire

- Create user model in app
    ` rails g model user username `

- Create a user or two in the console

- How should we build our login page?  Doesn't really map to a CRUD action
    -   get '/login', to: 'sessions#new'
    - show in rake routes
    - login_path

- add controller with new action `rails g controller sessions new`

- Add link on index page

- Build `new.html.erb`
    - Using `form_tag` since the form is not tied to a model
```
    <h1>Login</h1>
    <%= form_tag '/login' do %>
        <%= label :username, "Username" %>
        <%= text_field_tag :username %>
        <%= submit_tag 'Login' %>
    <% end %>
```

- Form needs to post somewhere; add `post '/login', to: "sessions#create"` to routes.rb

- Elicit desired behavior of login method, build:

```rb  
def create
        @user = User.find_by(username: params[:username])

        if @user
            session[:user_id] = @user.id
            redirect_to snacks_path
        else
            flash.notice = "No user found with that name"
            render :new
        end
    end
```
- flash - a specific type of cookie that only persists for one request-response cycle; `flash.notice` and `flash.alert` 

- add `<div class="error" > <%= flash.notice %></div>` to sessions/new.html.erb

- Login link doesn't make sense if already logged in.  Change code to:

```rb
    <% if session[:user_id] %>
        <h1>Welcome <%= User.find(session[:user_id]).username %></h1>
    <% else %>
    <%= link_to "Login", login_path %>
    <% end %>
```

- Demonstrate deleting the session

Build logout

routes.rb
- `delete '/logout', to: 'sessions#destroy', as 'logout'`
SessionsController#destroy
```
def destroy
    session.clear
    redirect_to login_path
end
```
`<%= link_to "Logout", "/logout" %>`
won't work because it's a get request
`<%= link_to "Logout", "/logout", method: "DELETE" %>`


- User is going to be necessary all over the place
    - ApplicationController:  All other controllers inherit from it, so stuff there is accessible all over

    This breaks when no session (i.e., logged out):

    ```rb
    def current_user
        @current_user = User.find(session[:user_id]).username
    end
    ```
    - This works (note `find_by`instead of `find`)
    
    ```rb    
    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end
    ```

    - doesn't work until you add `helper_method :current_user`

    - Use `current_user` more than once on a single page

    - SHow repeated sql queries in browser/console
    ```rb
    # memoization
    def current_user
        if @current_user
            @current_user
        else
            @current_user = User.find_by(id: session[:user_id])
        end

    end
    ```

 