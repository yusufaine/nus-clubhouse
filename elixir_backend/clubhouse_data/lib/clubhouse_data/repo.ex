defmodule ClubhouseData.Repo do
  use Ecto.Repo,
    otp_app: :clubhouse_data,
    adapter: Ecto.Adapters.Postgres
end
