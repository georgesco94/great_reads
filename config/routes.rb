Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show,:create]
    resources :books, only: [:show,:index,:update,:create]
    resource :session, only: [:create, :destroy, :show]
    resources :reviews, only: [:show,:index,:create,:destroy]
  end
end
