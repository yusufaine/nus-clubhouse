defmodule ClubhousePhxWeb.RoomController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias Phauxth.Log
  alias Clubhouse.{RoomSession, RoomSessionSupervisor, User}
  alias ClubhouseData.{Rooms, Users}
  alias ClubhousePhxWeb.{Auth.Token, Email}

  action_fallback ClubhousePhxWeb.FallbackController

  # the following plugs are defined in the controllers/authorize.ex file
  plug :user_check when action in [:index, :show]
  plug :id_check when action in [:update, :delete]

  def index(conn, _) do
    rooms = Rooms.list_rooms()
    IO.inspect(rooms)
    render(conn, "index.json", rooms: rooms)
  end

  def join(conn, %{"room_id" => room_id, "user_id" => user_id}) do
    room_id = String.to_integer(room_id)
    pid = start_room(room_id, user_id)
    user_data = Users.get_user!(user_id)
    user = User.new(user_data.id, user_data.username, user_data.profileImgUrl, false, true)
    room = RoomSession.add_user(room_id, user)
    roomMap = room_to_map(room)
    conn
    |> render("show.json", room: roomMap)
  end

  defp start_room(room_id, user_id) do
    room_name = RoomSession.room_session_name(room_id)
    case Process.whereis(room_name) do
      nil -> RoomSessionSupervisor.start_room(room_name, user_id)
      pid -> pid
    end
  end

  defp room_to_map(room) do
    roomMap = Map.from_struct(room)
    creator = Map.from_struct(room.creator)
    speakers = Enum.map(room.speakers, fn(speaker) -> Map.from_struct(speaker) end)
    listeners = Enum.map(room.listeners, fn(listener) -> Map.from_struct(listener) end)
    roomMap = Map.put(roomMap, :creator, creator)
    roomMap = Map.put(roomMap, :speakers, speakers)
    roomMap = Map.put(roomMap, :listeners, listeners)
    roomMap
  end

  def create(conn, %{"user_id" => user_id, "room" => %{"name" => room_name, "numUsers" => num_users, "type" => room_type}}) do
    user = Users.get_user!(user_id)
    room_params = %{name: room_name, numUsers: num_users, type: room_type}
    case RoomSessionSupervisor.start_room(room_name, user_id) do
      {:ok, pid} -> 
        IO.puts("created room...")
        state = :sys.get_state(pid)
        roomMap = room_to_map(state)
        conn
        |> render("show.json", room: roomMap)
    end
  end

  def show(conn, %{"id" => id}) do
    room = Rooms.get_room!(id)
    render(conn, "show.json", room: room)
  end

  def update(conn, %{"id" => room_id, "updates" => update_params}) do
    room = Rooms.get_room!(room_id)
    with {:ok, room} <- Rooms.update_room(room, update_params) do
      render(conn, "show.json", room: room)
    end
  end

  def delete(conn, %{"id" => id}) do
    user_id = conn.assigns.user_id
    user = Users.get_user!(user_id)
    {:ok, _user} = Rooms.delete_room_if_creator(user, id)
    send_resp(conn, :no_content, "")
  end
end
