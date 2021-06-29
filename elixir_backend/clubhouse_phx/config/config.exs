# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :clubhouse_phx, ClubhousePhxWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: System.get_env("SECRET_KEY_BASE") || "5QHJbM4GsmjqlE8egGpjnh+q6FttSFuGBfoC3dknZQB+nc9+WGuNnSDCorrPBymB",
  render_errors: [view: ClubhousePhxWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: ClubhousePhx.PubSub,
  live_view: [signing_salt: "VRN5XdoK"]

# Phauxth authentication configuration
config :phauxth,
  user_context: ClubhousePhx.Accounts,
  crypto_module: Argon2,
  token_module: ClubhousePhxWeb.Auth.Token

# Phauxth authentication configuration
config :phauxth,
  user_context: ClubhousePhx.Accounts,
  crypto_module: Argon2,
  token_module: ClubhousePhxWeb.Auth.Token

# Mailer configuration
config :clubhouse_phx, ClubhousePhxWeb.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.gmail.com",
  port: 465,
  username: System.get_env("BACKEND_EMAIL") || "nusclubhouse@gmail.com",
  password: System.get_env("BACKEND_EMAIL_PASSWORD") || "4Tmj@#mH$xB^R#JYC39w!qWN",
  tls: :if_available,
  allowed_tls_versions: [:"tlsv1", :"tlsv1.1", :"tlsv1.2"],
  ssl: true,
  retries: 1,
  no_mx_lookups: false,
  auth: :always

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
