defmodule ClubhousePhxWeb.SessionController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias ClubhousePhxWeb.Auth.Login
  alias ClubhousePhxWeb.Auth.Token

  # the following plug is defined in the controllers/authorize.ex file
  plug :guest_check when action in [:create]

  def create(conn, %{"session" => params}) do
    IO.puts("+++ session POST received +++")
    IO.inspect(params)
    case Login.verify(params) do
      {:ok, user} ->
        # The Sessions.create_session function is only needed if you are tracking
        # sessions in the database. If you do not want to store session data in the
        # database, remove this line, the ClubhousePhx.Sessions alias and the
        # ClubhousePhx.Sessions and ClubhousePhx.Sessions.Session modules
        #{:ok, %{id: session_id}} = Sessions.create_session(%{user_id: user.id})
        token = Token.sign(%{"user_id" => user.id})
        conn
        |> put_resp_cookie("auth_cookie", %{info: token}, encrypt: true, http_only: true, secure: true, same_site: "none")
        |> render("info.json", %{info: token})
      {:error, message} ->
        IO.puts("error: #{message}")
        error(conn, :unauthorized, 401)
    end
  end
end
