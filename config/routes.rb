Rails.application.routes.draw do
  namespace :api do
    get 'books/index'
  end

  namespace :api do
    get 'books/create'
  end

  namespace :api do
    get 'books/show'
  end

  namespace :api do
    get 'books/update'
  end

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show,:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
