defmodule Clubhouse.RoomSession do
    use GenServer, restart: :transient
    alias Clubhouse.{PubSub}
    alias Clubhouse.{Room,User}
    alias ClubhouseData.{Rooms,Users}

    @save_time 10 * 60 * 1000

    def start_link({room_name, creator_id}) do
        creator_data = Users.get_user!(creator_id)
        creator = User.new(creator_data.id, creator_data.username, creator_data.profileImgUrl, false, true)
        room = Rooms.create_room_with_user(creator_data, %{name: room_name, isLive: true, isScheduled: nil, numUsers: 0, type: "public"})
        name = room_session_name(room.id)
        GenServer.start_link(__MODULE__, {room.id, room_name, creator}, name: name)
    end

    def room_session_name(id), do: :"roomsession:#{id}"

    def add_user(room_id, %{"id" => user_id, "username" => user_username, "profileImgUrl" => user_profileImgUrl}) do
        name = room_session_name(room_id)
        user = User.new_listener(user_id, user_username, user_profileImgUrl)
        GenServer.call(name, {:add_user, user})
    end

    def remove_user(room_id, user_username) do
        name = room_session_name(room_id)
        GenServer.call(name, {:remove_user, user_username})
    end

    def get_room(room_id) do
        name = room_session_name(room_id)
        GenServer.call(name, :get)
    end

    def is_creator?(room_id, user_username) do
        name = room_session_name(room_id)
        GenServer.call(name, {:is_creator, user_username})
    end

    def end_room(room_id) do
        name = room_session_name(room_id)
        GenServer.stop(name, :normal)
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

    defp room_to_map(room) do
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
            isLive: room.isLive,
            isScheduled: room.isScheduled,
            type: room.type,
            creator: creator,
            users: users
        }
        result
    end

    defp user_to_map(user) do
        result = %{
            id: user.id,
            username: user.username,
            profileImgUrl: user.profileImgUrl,
            isMuted: user.isMuted,
            isSpeaker: user.isSpeaker
        }
        result
    end

    def handle_call({:add_user, user}, _from, room) do
        room = Room.add_user(room, user)
        roomMap = room_to_map(room)
        userMap = user_to_map(user)
        PubSub.broadcast_room(room.id, userMap, roomMap, :user_joined)
        {:reply, roomMap, room}
    end

    def handle_call({:remove_user, user_username}, _form, room) do
        room = Room.remove_user(room, user_username)
        roomMap = room_to_map(room)
        PubSub.broadcast_room(room.id, user_username, roomMap, :user_left)
        {:reply, roomMap, room}
    end

    def handle_call(:get, _from, room) do
        roomMap = room_to_map(room)
        {:reply, roomMap, room}
    end

    def handle_call({:is_creator, user_username}, _from, room) do
        isCreator = room.creator.username == user_username
        {:reply, isCreator, room}
    end

    def save_room(room, live_status) do
        IO.puts("saving room with live status #{live_status}")
        room_data = Rooms.get_room!(room.id)
        preloaded_speakers = Enum.map(room.speakers, fn(speaker) -> Users.get_user!(speaker.id) end)
        preloaded_listeners = Enum.map(room.listeners, fn(listener) -> Users.get_user!(listener.id) end)
        total_users = [preloaded_speakers | preloaded_listeners]
        case live_status do
            false ->
                res = Rooms.update_room(room_data, %{users: total_users, numUsers: room.numUsers, isLive: false})
                case res do
                    {:ok, room} ->
                        IO.puts("SAVED room with isLive false state")
                        room
                    {:error, err} ->
                        IO.puts("ERROR failed to update room with isLive false state")
                        IO.inspect(err)
                end
            true ->
                IO.puts("SAVED room with isLive true state")
                Rooms.update_room(room_data, %{users: total_users, numUsers: room.numUsers})
        end
    end

    def schedule_save(), do: Process.send_after(self(), :save, @save_time)

    def handle_info(:save, room) do
        save_room(room, true)
        {:noreply, room}
    end

    def terminate(_reason, room) do
        IO.puts("RoomSession GenServer terminated!")
        save_room(room, false)
        {:ok, room}
    end
end
