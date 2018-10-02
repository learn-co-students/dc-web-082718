Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # index, show, new, create, edit, update, delete
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  get "/login", to: 'sessions#new'
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"
end
