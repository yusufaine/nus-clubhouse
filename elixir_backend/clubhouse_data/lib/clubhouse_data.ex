defmodule ClubhouseData do
  use Application

  def start(_type, _args) do
    children = [
      {ClubhouseData.Repo, []}
    ]

    opts = [strategy: :one_for_one, name: ClubhouseData.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
