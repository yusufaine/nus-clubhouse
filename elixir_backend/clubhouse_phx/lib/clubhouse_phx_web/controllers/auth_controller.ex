defmodule ClubhousePhxWeb.AuthController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias Phauxth.Log
  alias ClubhouseData.{Users, Repo}
  alias ClubhousePhxWeb.{Auth.Token, Auth.Login, Email}

  action_fallback ClubhousePhxWeb.FallbackController

  def login(conn, %{"credentials" => credentials}) do
    case Login.authenticate(credentials) do
      {:ok, user} ->
        # The Sessions.create_session function is only needed if you are tracking
        # sessions in the database. If you do not want to store session data in the
        # database, remove this line, the ClubhousePhx.Sessions alias and the
        # ClubhousePhx.Sessions and ClubhousePhx.Sessions.Session modules
        #{:ok, %{id: session_id}} = Sessions.create_session(%{user_id: user.id})
        token = Token.sign(%{"user_email" => user.email})
        conn = conn |> put_resp_cookie("auth_cookie", token, encrypt: true, http_only: true, secure: true) 
        IO.puts("User logged in")
        IO.inspect(user)
        conn
        |> render("user_login.json", %{user: user})
      {:error, message} ->
        IO.puts("error: #{message}")
        error(conn, :unauthorized, 401)
    end
  end

  def register(conn, %{"credentials" => user_params}) do
    case Users.create_user(user_params) do
        {:ok, user} -> 
            user = Repo.preload(user, [:created_rooms, :rooms, :followers, :following])
            key = Token.sign(%{"user_email" => user.email})
            Log.info(%Log{user: user.id, message: "user created"})
            Email.confirm_request(user.email, Routes.confirm_url(conn, :index, key: key))
            conn
            |> render("show.json", user: user)
        {:error, error_changeset} ->
            IO.puts("error creating user")
            IO.inspect(error_changeset.errors)
            error(conn, :unauthorized, 400)
    end
  end

  def me(conn, _params) do
    unencrypted_conn = fetch_cookies(conn, encrypted: ~w(auth_cookie))
    case Map.fetch(unencrypted_conn.cookies, "auth_cookie") do
      {:ok, auth_cookie} -> 
        {:ok, %{"user_email" => user_email}} = Token.verify(auth_cookie)
        IO.puts("user email: #{user_email}")
        user = Users.get_by(%{"email" => user_email})
        conn 
        |> render("user_me.json", %{user: user})
      true ->
        error(conn, :unauthorized, 400)
    end
  end
end
