defmodule Clubhouse.Room do
    alias __MODULE__

    defstruct(
        id: nil,
        name: nil,
        type: "public",
        isLive: nil,
        isScheduled: false,
        numUsers: 0,
        speakers: [],
        listeners: [],
        creator: nil,
        startTime: nil
    )

    def new(id, name, creator) do
        room = %Room{
            id: id,
            name: name,
            type: "public",
            isLive: true,
            isScheduled: false,
            numUsers: 0,
            creator: creator,
            speakers: [],
            listeners: [],
            startTime: DateTime.utc_now()
        }
        room
    end

    defp increment_user(room) do
        numUsers = room.numUsers + 1
        Map.put(room, :numUsers, numUsers)
    end

    defp decrement_user(room) do
        numUsers = room.numUsers - 1
        Map.put(room, :numUsers, numUsers)
    end

    def add_user(room, user) do
        cond do
            user.isSpeaker == false ->
                add_listener(room, user)
            user.isSpeaker ->
                add_speaker(room, user)
        end
    end

    def remove_user(room, user_username) do
        remove_listener(room, user_username)
        remove_speaker(room, user_username)
    end

    defp add_speaker(room, user) do
        speakers = [user | room.speakers]
        room
        |> Map.put(:speakers, speakers)
        |> increment_user()
    end

    defp remove_speaker(room, user_username) do
        speakers = Enum.reject(room.speakers, fn speaker -> speaker.username == user_username end)
        case speakers == room.speakers do
            false ->
                room
                |> Map.put(:speakers, speakers)
                |> decrement_user()
            true -> room
        end
    end

    defp add_listener(room, user) do
        listeners = [user | room.listeners]
        room
        |> Map.put(:listeners, listeners)
        |> increment_user()
    end

    defp remove_listener(room, user_username) do
        listeners = Enum.reject(room.listeners, fn listener -> listener.username == user_username end)
        case listeners == room.listeners do
            false ->
                room
                |> Map.put(:listeners, listeners)
                |> decrement_user()
            true -> room
        end
    end
end
