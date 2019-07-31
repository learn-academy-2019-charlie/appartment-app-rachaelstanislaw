Rails.application.routes.draw do
  devise_for :users
  resources :apartments
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: "pages#root"

end
