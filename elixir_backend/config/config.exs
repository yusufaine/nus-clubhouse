# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :elixir_backend,
  ecto_repos: [ElixirBackend.Repo]

# Configures the endpoint
config :elixir_backend, ElixirBackendWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "tMADFgOUrzVrS5Ws2OtJYp0G9hhwSgHmyihUrc1wB/6/LFx+TfPtF8ow2QeU2ayc",
  render_errors: [view: ElixirBackendWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ElixirBackend.PubSub,
  live_view: [signing_salt: "83XI1Sv0"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"

config :ueberauth, Ueberauth,
  providers: [
    github: {Ueberauth.Strategy.Github, []},
    discord: {Ueberauth.Strategy.Discord, []}
  ]

config :ueberauth, Ueberauth.Strategy.Discord.OAuth,
  client_id: System.get_env("DISCORD_CLIENT_ID"),
  client_secret: System.get_env("DISCORD_CLIENT_SECRET")

config :ueberauth, Ueberauth.Strategy.Github.OAuth,
  client_id: System.get_env("GITHUB_CLIENT_ID"),
  client_secret: System.get_env("GITHUB_CLIENT_SECRET")