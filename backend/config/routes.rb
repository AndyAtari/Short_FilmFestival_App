Rails.application.routes.draw do
  resources :answers, only: [:index]
  resources :questions, only: [:index]
  resources :movies, only: [:index]
end
