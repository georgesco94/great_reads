Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show,:create,:index]
    resources :books, only: [:show,:index,:update,:create]
    resource :session, only: [:create, :destroy, :show]
    resources :reviews, only: [:show,:index,:create,:destroy,:update]
    resources :statuses, only: [:show,:create,:index,:update]
  end
end
