defmodule ClubhousePhxWeb.RoomChannel do
    use ClubhousePhxWeb, :channel
    require Logger

    alias Clubhouse.PubSub
    alias Clubhouse.RoomSession

    def join("room:" <> room_id, user_params, socket) do
        case Integer.parse(room_id) do
            {room_id, ""} -> 
                IO.puts("user joined room channel")
                %{"id" => _, "username" => user_username, "profileImgUrl" => _} = user_params
                socket = assign(socket, :room_id, room_id)
                socket = assign(socket, :user_username, user_username)
                room = RoomSession.add_user(room_id, user_params)
                pid = inspect(self())
                PubSub.subscribe_room(room_id)
                {:ok, %{"id" => room_id, "room" => room, "pid" => pid}, socket}
            _ ->
                {:error, %{reason: "Invalid room"}}
        end
    end

    def handle_info({:user_joined, user, room}, socket) do
        push(socket, "user_joined", %{new_user: user, room: room})
        {:noreply, socket}
    end

    def handle_info({:user_left, user_username, room}, socket) do
        push(socket, "user_left", %{user_username: user_username, room: room})
        {:noreply, socket}
    end

    def handle_info({:msg, msg}, socket) do
        push(socket, "msg", %{msg: msg})
        {:noreply, socket}
    end

    def terminate(_reason, socket) do
        room_id = socket.assigns.room_id
        user_username = socket.assigns.user_username
        room = RoomSession.remove_user(room_id, user_username)
        case RoomSession.is_creator?(room_id, user_username) do
            false -> 
                IO.puts("User is not creator of room, displaying room AFTER removing user")
                IO.inspect(room)
                Logger.info("terminating #{room_id} connection")
                PubSub.unsubscribe_room(room_id)
            true ->
                IO.puts("User is creator of room, terminating room session")
                Logger.info("terminating #{room_id} connection")
                PubSub.unsubscribe_room(room_id)
                RoomSession.end_room(room_id)
        end
    end
end