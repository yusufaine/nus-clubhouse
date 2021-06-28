defmodule ClubhouseData.Rooms do
    alias ClubhouseData.Repo
    alias ClubhouseData.Rooms.Room
    alias ClubhouseData.Users.User

    def create_room(attrs) do
        %Room{}
        |> Room.changeset(attrs)
        |> Repo.insert()
    end

    def create_room_with_user(%User{} = user, attrs) do
        room = Ecto.build_assoc(user, :created_rooms, attrs)
        room = Repo.insert!(room)
        add_user(room, user)
    end

    def update_room(%Room{} = room, attrs) do
        room 
        |> Room.changeset(attrs)
        |> Repo.update()
    end

    def delete_room(%Room{} = room) do
        Repo.delete(room)
    end

    def list_rooms, do: Repo.all(Room)

    def get_room!(id), do: Repo.get!(Room, id)

    def add_user(%Room{} = room, %User{} = user) do
        room = Repo.preload(room, [:creator, :users])
        user = Repo.preload(user, [:created_rooms, :rooms])
        users = [user | room.users]
        room 
        |> Ecto.Changeset.change()
        |> Ecto.Changeset.put_assoc(:users, users)
        |> Repo.insert_or_update()
        |> increment_user()
    end

    defp increment_user({:ok, %Room{} = room}) do
        numUsers = room.numUsers + 1
        update_room(room, %{numUsers: numUsers})
    end

end