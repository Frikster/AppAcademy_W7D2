Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :todos, only:[:show, :index, :update, :create, :destroy], defaults: {format: :json}
  end

  root to: 'static_pages#root'
end
