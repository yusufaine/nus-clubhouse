import Config

# dev
config :clubhouse_data, ClubhouseData.Repo,
  database: "clubhouse_data_repo",
  username: "postgres",
  password: "postgres",
  hostname: "localhost"

# production
# config :clubhouse_data, ClubhouseData.Repo,
#   database: "postgres",
#   username: System.get_env("DATABASE_USER"),
#   password: System.get_env("DATABASE_PASS"),
#   hostname: System.get_env("DATABASE_HOST"),
#   port: System.get_env("DATABASE_PORT"),
#   ssl: true,
#   pool_size: 15

config :clubhouse_data,
  ecto_repos: [ClubhouseData.Repo]