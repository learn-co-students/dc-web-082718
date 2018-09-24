Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # index, show, new, create, edit, update, delete

  resources :snacks, only: [:index, :show, :new, :create]
end
