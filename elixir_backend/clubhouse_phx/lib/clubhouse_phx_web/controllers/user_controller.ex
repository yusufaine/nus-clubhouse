defmodule ClubhousePhxWeb.UserController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias Phauxth.Log
  alias ClubhouseData.Users
  alias ClubhousePhxWeb.{Auth.Token, Email}

  action_fallback ClubhousePhxWeb.FallbackController

  # the following plugs are defined in the controllers/authorize.ex file
  plug :user_check when action in [:index, :show]
  plug :id_check when action in [:update, :delete]

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
    user = if id == to_string(user.id), do: user, else: Users.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(%Plug.Conn{assigns: %{current_user: user}} = conn, %{"user" => user_params}) do
    with {:ok, user} <- Users.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(%Plug.Conn{assigns: %{current_user: user}} = conn, _) do
    {:ok, _user} = Users.delete_user(user)
    send_resp(conn, :no_content, "")
  end

  def list_following(conn, %{"id" => user_id}) do
    
  end
end
