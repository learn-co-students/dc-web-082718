# JWT Auth in Rails and React (an introduction...)

## Authentication vs. Authorization

### Authentication
- Confirming who you are (Identity)
- Some kind of proof

### Authorization
- Permission
- Based on who you are, what are you allowed to do?

### Business logic
 - if you are an admin, you can create a page
 - if you are a user, you can post a comment
 - not signed in, you can view a page, but nothing else

[React-Rails auth flow](goo.gl/wamL2x)
- When a user logs-in via a React front end, make a fetch to the Rails back end
- Authenticate via a basic controller action in Rails
- Store user data in state on login/signup
- Store token in localStorage
- React app will include the token with future requests to prove that it's still the user
- Rails checks the token and authorizes based on that info



## Rails Authentication Review

### bcrypt
We don't want plain text passwords in your database
- column `password_digest` instead of password
- password storage (hashed, salted passwords)
  - _hashed_ ('one way' function, can't recover the original value)
  - _salted_ - add random string to the password 'password123' + 'aslkdfjalskdfjkasjdf'
  - `has_secure_password` macro

### /login (auth_controller)
- route accepts the username and password
- _authenticate_ - check the username and password
- start a 'session'
- send back a _cookie_ with the session info
- cookie can be used instead of username / password in the future


## Introduce the App
- Only logged in users can see their profile

## What's Changed?
- Single Page app
- Instead of a form submit, we use `fetch`
- Cookies not automatically included/managed
- How do we include our authentication when we're using fetch?

## Token Auth
- Instead of a session cookie
- send back a 'token' as data
- Plays the same role - authenticate who we are

1 How do we generate the token?
 - in rails back end using JWT.encode and JWT.decode

2 How do we send it to the client?
- in the log in controller, call our method and return that as json

3 How do we store it on the client?
4 How do we send it back and read it?

## Token
- identifies user
- _Cryptographically Secure_
  - protection from eavesdropping - no one can read the data
  - protection from tampering - signed, no one can forge a signature (JWT)

## [JWT](https://jwt.io/)
 - encode?
 - decode?
 - [Documentation](https://github.com/jwt/ruby-jwt)
 - Not the same as encrypting

## Options for storing the token
  - React state - cleared out every time we refresh
  - Url in react-router
    - don't do this!!!
    - sharing a link shares someone's identity!
  - Cookies (how we did it in rails)
  - localStorage
      - clear it - on sign out `localStorage.clear()`
      - maybe expire tokens after a set amount of time


## User Experience

### Logout
- Button in Navbar
- clear localStorage
- update the state so that it reflects that we are logged out

### Sign up / Login
- error messages for invalid email / password, failed token
- Redirect on login

## In rails...
1. JWT token in Rails -> encode some data and send it to react app (when the react app sends the username and password)
2. React app stores user data and sends token back in future  requests
3. Rails checks validity

## In React...
### Sign In
1. Login Form
2. Send the username and password
3. Store the token (and user info)
4. Send the token on future requests

### Already Signed In
1. On mount, check if there is a token
2. If so, fetch user info
3. If not... handle that error


[Want to know more?](https://github.com/learn-co-curriculum/jwt-auth-rails)
[Cookies vs localStorage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
