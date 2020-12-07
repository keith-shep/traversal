Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :equations do
    resources :steps, only: [ :index]
  end

  resources :steps, only: [ :destroy, :edit, :update ]

  resources :users do
    resources :equations, only: [ :create, :index, ]
  end

  resources :equations, only: [ :destroy ]

end
