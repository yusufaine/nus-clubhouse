defmodule ClubhousePhxWeb.Router do
  use ClubhousePhxWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    #plug Phauxth.AuthenticateToken
    #plug ClubhousePhxWeb.AuthenticateTokenCookie 
  end

  scope "/api", ClubhousePhxWeb do
    pipe_through :api

    post "/sessions", SessionController, :create
    resources "/users", UserController, except: [:create, :edit]
    post "/users/create", UserController, :create
    post "/confirms", ConfirmController, :index
    post "/password_resets", PasswordResetController, :create
    put "/password_resets/update", PasswordResetController, :update
  end

  if Mix.env() == :dev do
    forward "/sent_emails", Bamboo.SentEmailViewerPlug
  end
end
