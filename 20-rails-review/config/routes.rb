Rails.application.routes.draw do
  resources :bloggers
  resources :posts, only: [:new,:create, :index, :show]
  get "/posts/:id/update_likes", to: 'posts#update_likes'

  HTTP_VERB "string of url path", to: 'controller_name#controller_action'
  post "/login", to: 'users#signin'
end
