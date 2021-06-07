Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      # resources :posts 
      get '/whoami',to: 'sessions#whoami'
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
# access-token: wSvu7nRQryFeseVbBiw9oA
# client: t0gnjQG3go6n2w80lC_jJA
# uid: example@example.com