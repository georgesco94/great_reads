Rails.application.routes.draw do

  root to: "static_pages#root"
  get 'api/users/recommendation', :to => 'api/users#get_recommendation'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show,:create,:index]
    resources :books, only: [:show,:index,:update,:create]
    resource :session, only: [:create, :destroy, :show]
    resources :reviews, only: [:show,:index,:create,:destroy,:update]
    resources :statuses, only: [:show,:create,:index,:update,:destroy]
    resources :shelves, only: [:show,:create,:index,:update]
    resources :shelve_assignments, only: [:index,:update,:destroy]
  end
end
