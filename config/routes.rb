Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/uikit', to: 'pages#uikit'
<<<<<<< HEAD
  # get '/equation', to: 'pages#equation'
=======
  get '/demo', to: 'pages#demo'
>>>>>>> origin

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :equations, only: [ ] do
    resources :steps, only: [ :create, :index]
  end


  resources :equations, only: [:index]


  resources :steps, only: [ :edit, :update ]
  delete "steps/:id", to: "steps#destroy", as: 'delete_step'


  resources :users, only: [ ] do
    resources :equations, only: [ :create, :new]
  end

  resources :equations, only: [ :show ]
  get "equations/:id", to: "equations#show", as: 'equation_show'
  delete "equations/:id", to: "equations#destroy", as: 'delete_equation'

end
