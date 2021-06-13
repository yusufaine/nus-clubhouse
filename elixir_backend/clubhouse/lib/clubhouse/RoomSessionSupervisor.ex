defmodule Clubhouse.RoomSessionSupervisor do
    use DynamicSupervisor
    alias Clubhouse.RoomSession

    def start_link(args) do
        DynamicSupervisor.start_link(__MODULE__, args, name: __MODULE__)
    end

    def start_room(room_id, room_name, room_creator) do
        spec = {RoomSession, {room_id, room_name, room_creator}}
        DynamicSupervisor.start_child(__MODULE__, spec)
    end

    # callbacks

    def init(_args), do: DynamicSupervisor.init(strategy: :one_for_one)
end