defmodule Clubhouse.Room do
    alias __MODULE__

    defstruct(
        id: nil,
        name: nil,
        type: "public",
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
            creator: creator,
            startTime: DateTime.utc_now()
        }
        room 
        |> add_user(creator)
    end

    defp increment_user(room) do
        numUsers = room.numUsers + 1
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

    defp add_speaker(room, user) do
        speakers = [user | room.speakers]
        room
        |> Map.put(:speakers, speakers)
        |> increment_user()
    end

    defp add_listener(room, user) do
        listeners = [user | room.listeners]
        room
        |> Map.put(:listeners, listeners)
        |> increment_user()
    end

end