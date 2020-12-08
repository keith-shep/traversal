Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/uikit', to: 'pages#uikit'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :equations, only: [ ] do
    resources :steps, only: [ :create, :index]
  end

  resources :steps, only: [ :destroy, :edit, :update ]

  resources :users, only: [ ] do
    resources :equations, only: [ :create, :new, :index]
  end

  resources :equations, only: [:show ]
  delete "equations/:id", to: "equations#destroy", as: 'delete_equation'

end
