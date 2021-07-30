defmodule ClubhousePhxWeb.UserController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias Phauxth.Log
  alias ClubhouseData.Users
  alias ClubhousePhxWeb.{Auth.Token, Email}

  action_fallback ClubhousePhxWeb.FallbackController

  # the following plugs are defined in the controllers/authorize.ex file
  plug :user_check when action in [:update, :delete]

  def index(conn, _) do
    users = Users.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => %{"email" => email} = user_params}) do
    key = Token.sign(%{"email" => email})
    with {:ok, user} <- Users.create_user(user_params) do
      Log.info(%Log{user: user.id, message: "user created"})
      Email.confirm_request(email, Routes.confirm_url(conn, :index, key: key))
      conn
      |> render("show.json", user: user)
    end
  end

  def show(%Plug.Conn{assigns: %{current_user: user}} = conn, %{"id" => id}) do
    user = Users.get_user!(id)
    render(conn, "showProfile.json", user: user)
  end

  def update(conn, %{"user" => user_params}) do
    %{"id" => id, "name" => name, "username" => username, "bio" => bio} = user_params
    update_user_params = %{name: name, username: username, bio: bio}
    user = Users.get_user!(id)
    with {:ok, user} <- Users.update_user(user, update_user_params) do
      IO.puts('successfully updated')
      render(conn, "show.json", user: user)
    end
  end

  def delete(%Plug.Conn{assigns: %{current_user: user}} = conn, _) do
    {:ok, _user} = Users.delete_user(user)
    send_resp(conn, :no_content, "")
  end

  def follow(conn, %{"id" => user_id, "user_to_follow_id" => user_to_follow_id}) do
    user = Users.get_user!(user_id)
    userToFollow = Users.get_user!(user_to_follow_id)
    case Users.follow_user(user, userToFollow) do
      {:ok, user} ->
        render(conn, "showProfile.json", user: user)
    end
  end
end
