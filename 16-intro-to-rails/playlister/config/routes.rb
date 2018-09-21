Rails.application.routes.draw do
  resources :songs, only: %i[show index]
  resources :artists

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

# get '/songs' do
#   @songs = Song.all
#   erb :index
# end
