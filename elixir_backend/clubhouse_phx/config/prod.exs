use Mix.Config

# For production, don't forget to configure the url host
# to something meaningful, Phoenix uses this information
# when generating URLs.
#

# Note we also include the path to a cache manifest
# containing the digested version of static files. This
# manifest is generated by the `mix phx.digest` task,
# which you should run after static files are built and
# before starting your production server.
config :clubhouse_phx, ClubhousePhxWeb.Endpoint,
  url: [host: System.get_env("URL"), port: 443],
  cache_static_manifest: "priv/static/cache_manifest.json",
  https: [
    port: 443,
    cipher_suite: :strong,
    keyfile: System.get_env("SSL_KEY_PATH"),
    certfile: System.get_env("SSL_CERT_PATH")
  ],
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  check_origin: ["https://nusclubhouse.games"]

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

config :clubhouse_data, ClubhouseData.Repo,
  database: "postgres",
  username: System.get_env("DATABASE_USER"),
  password: System.get_env("DATABASE_PASS"),
  hostname: System.get_env("DATABASE_HOST"),
  port: System.get_env("DATABASE_PORT"),
  ssl: true,
  pool_size: 15

config :clubhouse_data,
  ecto_repos: [ClubhouseData.Repo]

# Do not print debug messages in production
config :logger, level: :info

# ## SSL Support
#
# To get SSL working, you will need to add the `https` key
# to the previous section and set your `:url` port to 443:
#
#     config :clubhouse_phx, ClubhousePhxWeb.Endpoint,
#       ...
#       url: [host: "example.com", port: 443],
#       https: [
#         port: 443,
#         cipher_suite: :strong,
#         keyfile: System.get_env("SOME_APP_SSL_KEY_PATH"),
#         certfile: System.get_env("SOME_APP_SSL_CERT_PATH"),
#         transport_options: [socket_opts: [:inet6]]
#       ]
#
# The `cipher_suite` is set to `:strong` to support only the
# latest and more secure SSL ciphers. This means old browsers
# and clients may not be supported. You can set it to
# `:compatible` for wider support.
#
# `:keyfile` and `:certfile` expect an absolute path to the key
# and cert in disk or a relative path inside priv, for example
# "priv/ssl/server.key". For all supported SSL configuration
# options, see https://hexdocs.pm/plug/Plug.SSL.html#configure/1
#
# We also recommend setting `force_ssl` in your endpoint, ensuring
# no data is ever sent via http, always redirecting to https:
#
#     config :clubhouse_phx, ClubhousePhxWeb.Endpoint,
#       force_ssl: [hsts: true]
#
# Check `Plug.SSL` for all available options in `force_ssl`.

# Finally import the config/prod.secret.exs which loads secrets
# and configuration from environment variables.
#import_config "prod.secret.exs"
