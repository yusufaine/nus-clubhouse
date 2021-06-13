defmodule Clubhouse.RoomSession do
    use GenServer
    alias Clubhouse.Room

    def start_link({room_id, room_name, room_creator}) do
        name = room_session_name(room_id)
        GenServer.start_link(__MODULE__, {room_id, room_name, room_creator}, name: name)
    end

    def room_session_name(id), do: :"roomsession:#{id}"

    def add_user(room_id, user) do
        name = room_session_name(room_id)
        GenServer.call(name, {:add_user, user})
    end

    def get_room(room_id) do
        name = room_session_name(room_id)
        GenServer.call(name, :get)
    end

    # Callbacks

    def init(_room_details = {id, name, creator}) do
        room = Room.new(id, name, creator)
        {:ok, room}
    end

    def handle_call({:add_user, user}, _from, room) do
        room = Room.add_user(room, user)
        {:reply, room, room}
    end

    def handle_call(:get, _from, room) do
        {:reply, room, room}
    end
end