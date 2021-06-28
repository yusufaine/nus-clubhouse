defmodule ClubhousePhxWeb.RoomChannel do
    use ClubhousePhxWeb, :channel
    require Logger

    alias Clubhouse.PubSub
    alias Clubhouse.RoomSession

    def join("room:" <> room_id, _params, socket) do
        case Integer.parse(room_id) do
            {id, ""} -> 
                IO.puts("user joined room channel")
                socket = assign(socket, :room_id, id)
                PubSub.subscribe_room(id)
                room = RoomSession.get_room(id)
                pid = inspect(self())
                IO.inspect(room)
                {:ok, %{"id" => id, "room" => room, "pid" => pid}, socket}
            _ ->
                {:error, %{reason: "Invalid room"}}
        end
    end

    def handle_info({:room_update, user}, socket) do
        push(socket, "room_update", %{new_user: user})
        {:noreply, socket}
    end

    def handle_info({:msg, msg}, socket) do
        push(socket, "msg", %{msg: msg})
        {:noreply, socket}
    end

    def terminate(_reason, socket) do
        room_id = socket.assigns.room_id
        Logger.info("terminating #{room_id}")
        PubSub.unsubscribe_room(room_id)
    end
end