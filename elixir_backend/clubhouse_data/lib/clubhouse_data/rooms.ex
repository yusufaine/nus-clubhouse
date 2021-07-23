defmodule ClubhouseData.Rooms do
    alias ClubhouseData.Repo
    alias ClubhouseData.Rooms.Room
    alias ClubhouseData.Users
    alias ClubhouseData.Users.User

    import Ecto.Query, only: [from: 2]

    def create_room(attrs) do
        %Room{}
        |> Room.changeset(attrs)
        |> Repo.insert()
    end

    def create_room_with_user(%User{} = user, attrs) do
        room = Ecto.build_assoc(user, :created_rooms, attrs)
        Repo.insert!(room)
    end

    def update_room(%Room{} = room, attrs) do
        room 
        |> Room.changeset(attrs)
        |> Repo.update()
    end

    def list_rooms(live_status) do
        preload_query = from rm in Room, where: rm.isLive == live_status, preload: [:creator, :users]
        Repo.all(preload_query)
    end

    def list_scheduled_rooms() do
        preload_query = from rm in Room, where: rm.isScheduled == true and rm.isEnded == false, preload: [:creator, :users]
        Repo.all(preload_query) 
    end

    def get_room!(id) do 
        Repo.preload(Repo.get!(Room, id), [:creator, :users])
    end

    def get_room_by_name_and_creator!(name, creator_id) do
        creator = Users.get_user!(creator_id)
        case Repo.get_by(Room, [name: name, creator: creator]) do
            room -> 
                Repo.preload(room, [:creator, :users])
            _ ->
                nil
        end
    end

    def add_user(%User{} = user, %Room{} = room) do
        room = Repo.preload(room, [:creator, :users])
        user = Repo.preload(user, [:created_rooms, :rooms])
        users = [user | room.users]
        room 
        |> Ecto.Changeset.change()
        |> Ecto.Changeset.put_assoc(:users, users)
        |> Repo.insert_or_update()
        |> increment_user()
    end

    def remove_user(%User{} = user, %Room{} = room) do
        room = Repo.preload(room, [:creator, :users])
        user = Repo.preload(user, [:created_rooms, :rooms])
        roomUsers = Enum.reject(room.users, fn roomUser -> roomUser.id == user.id end)
        room 
        |> Ecto.Changeset.change()
        |> Ecto.Changeset.put_assoc(:users, roomUsers)
        |> Repo.insert_or_update()
        |> increment_user()
    end

    def delete_room_by_id(room_id) do
        room = get_room!(room_id)
        delete_room(room)
    end

    def delete_room_if_creator(%User{} = user, room_id) do 
        room = get_room!(room_id)
        room = Repo.preload(room, [:creator])
        if room.creator.id == user.id, do: delete_room(room)
    end

    defp delete_room(%Room{} = room) do
        Repo.delete(room)
    end

    defp increment_user({:ok, %Room{} = room}) do
        numUsers = room.numUsers + 1
        update_room(room, %{numUsers: numUsers})
    end

    defp decrement_user({:ok, %Room{} = room}) do
        numUsers = room.numUsers - 1
        update_room(room, %{numUsers: numUsers})
    end
end