defmodule ElixirBackendWeb.UserController do
  use ElixirBackendWeb, :controller

  alias ElixirBackend.Accounts
  alias ElixirBackend.Accounts.User

  action_fallback ElixirBackendWeb.FallbackController

  def me(conn, _params) do 
    IO.puts(conn.fetch_query_params)
    user_token = get_session(conn, :token)
    case Accounts.get_user_by_token(user_token) do
      {:ok, user} -> 
        conn
        |> put_session(:token, user.token)
        |> json(user)
      {:error, reason} ->
        conn
        |> json(%{error: "Error", reason: reason})
    end
  end

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Accounts.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
