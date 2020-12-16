Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/uikit', to: 'pages#uikit'

  get '/demo', to: 'pages#demo'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Equation < User
  resources :users, only: [ ] do
    resources :equations, only: [ :new]
  end

  resources :equations, only: [ :show, :index, :edit, :update]
  post "equations/", to: "equations#create", as: 'equation_create'
  get "equations/:id", to: "equations#show", as: 'equation_show'
  delete "equations/:id", to: "equations#destroy", as: 'delete_equation'

  # Step < Equation
  resources :equations, only: [ ] do
    resources :steps, only: [ :create, :index ]
  end

  resources :steps, only: [ :edit, :update ]
  delete "steps/:id", to: "steps#destroy", as: 'delete_step'

  # Comment < Step
  resources :steps, only: [] do
    resources :comments, only: [ :create, :new, :index ]
  end

  delete "comments/:id", to: "comments#destroy", as: 'delete_comment'

end
