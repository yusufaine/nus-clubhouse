defmodule Clubhouse.RoomSession do
    use GenServer
    alias Clubhouse.{PubSub}
    alias Clubhouse.{Room,User}
    alias ClubhouseData.{Rooms,Users}

    @save_time 10 * 60 * 1000

    def start_link({room_name, creator_id}) do
        creator_data = Users.get_user!(creator_id)
        creator = User.new(creator_data.id, creator_data.username, creator_data.profileImgUrl, false, true)
        {:ok, room} = Rooms.create_room_with_user(creator_data, %{name: room_name, isLive: true, numUsers: 0, type: "public"})
        name = room_session_name(room.id)
        GenServer.start_link(__MODULE__, {room.id, room_name, creator}, name: name)
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
        schedule_save()
        room = init_room(id, name, creator)
        {:ok, room}
    end

    defp init_room(room_id, name, creator) do
        Room.new(room_id, name, creator)
    end

    def handle_call({:add_user, user}, _from, room) do
        room = Room.add_user(room, user)
        PubSub.broadcast_room(room.id, user)
        {:reply, room, room}
    end

    def handle_call(:get, _from, room) do
        creator = room.creator |> Map.from_struct()
        speakers =
            for speaker <- room.speakers do
                speaker
                |> Map.from_struct()
            end
        listeners =
            for listener <- room.listeners do
                listener
                |> Map.from_struct()
            end
        users = speakers ++ listeners
        result = %{
            id: room.id,
            name: room.name,
            isLive: room.isLive
            type: room.type,
            creator: creator,
            users: users
        }
        {:reply, result, room}
    end

    def save_room(room) do
        room_data = Rooms.get_room!(room.id)
        preloaded_speakers = Enum.map(room.speakers, fn(speaker) -> Users.get_user!(speaker.id) end)
        preloaded_listeners = Enum.map(room.listeners, fn(listener) -> Users.get_user!(listener.id) end)
        total_users = [preloaded_speakers | preloaded_listeners]
        Rooms.update_room(room_data, %{users: total_users, numUsers: room.numUsers})
    end

    def schedule_save(), do: Process.send_after(self(), :save, @save_time)

    def handle_info(:save, room) do
        save_room(room)

        schedule_save()
        {:noreply, room}
    end

    def terminate(_reason, room), do: save_room(room)
end
