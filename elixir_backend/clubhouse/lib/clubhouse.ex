defmodule Clubhouse do
  use Application
  alias Clubhouse.RoomSessionSupervisor

  def start(_type, _args) do
    children = [
      RoomSessionSupervisor,
      {Phoenix.PubSub, name: Clubhouse.PubSub.server_name()}
    ]

    opts = [strategy: :one_for_one, name: Clubhouse.Supervisor]
    Supervisor.start_link(children, opts)
  end

end
