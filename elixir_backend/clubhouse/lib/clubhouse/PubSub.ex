defmodule Clubhouse.PubSub do
    alias Phoenix.PubSub

    def room_topic(room_id), do: "room:#{room_id}"

    def server_name(), do: :clubhouse

    def subscribe_room(room_id) do
        topic = room_topic(room_id)
        PubSub.subscribe(server_name(), topic)
    end

    def unsubscribe_room(room_id) do
        topic = room_topic(room_id)
        PubSub.unsubscribe(server_name(), topic)
    end

    def broadcast_room(room_id, user, :user_joined) do
        IO.puts("broadcasting user #{user.username} joined!")
        topic = room_topic(room_id)
        PubSub.broadcast(server_name(), topic, {:user_joined, user})
    end

    def broadcast_room(room_id, user_username, :user_left) do
        IO.puts("broadcasting user #{user_username} left!")
        topic = room_topic(room_id)
        PubSub.broadcast(server_name(), topic, {:user_left, user_username})
    end
end