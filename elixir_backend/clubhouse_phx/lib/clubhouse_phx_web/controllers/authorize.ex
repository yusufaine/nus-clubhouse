defmodule ClubhousePhxWeb.Authorize do
  @moduledoc """
  Functions to help with authorization.

  See the [Authorization wiki page](https://github.com/riverrun/phauxth/wiki/Authorization)
  for more information and examples about authorization.
  """

  import Plug.Conn
  import Phoenix.Controller

  alias ClubhousePhxWeb.Auth.Token

  @doc """
  Plug to only allow authenticated users to access the resource.

  See the user controller for an example.
  """

  def user_check(conn, _opts) do
    IO.puts("reviewing conn object in user_check plug")
    IO.inspect(conn)
    %{cookies: auth_cookie} = fetch_cookies(conn, encrypted: ~w(auth_cookie))
    case auth_cookie do
      %{"auth_cookie" => %{info: token}} -> 
        case Token.verify(token) do
          {:ok, value} ->
            IO.puts("+++ token verify value +++")
            IO.inspect(value) 
            conn
          {:error, _value} -> error(conn, :error, 400)
        end
      %{} -> 
        headers = conn.req_headers
        {"authorization", auth_token} = headers |> List.keyfind("authorization", 0)
        IO.puts("user not authenticated via auth_cookies...")
        IO.puts("user auth token value: #{auth_token}")
        conn
    end
  end

  @doc """
  Plug to only allow unauthenticated users to access the resource.

  See the session controller for an example.
  """

  def guest_check(conn, _opts) do
    %{cookies: auth_cookie} = fetch_cookies(conn, encrypted: ~w(auth_cookie))
    case auth_cookie do 
      %{"auth_cookie" => %{info: token}} -> 
        conn 
        |> render("logged_in.json", [])
        |> halt()
      %{} ->
        conn
    end
  end

  @doc """
  Plug to only allow authenticated users with the correct id to access the resource.

  See the user controller for an example.
  """
  def id_check(%Plug.Conn{assigns: %{current_user: nil}} = conn, _opts) do
    error(conn, :unauthorized, 401)
  end

  def id_check(%Plug.Conn{params: %{"id" => id}, assigns: %{current_user: current_user}} = conn, _opts) do
    if id == to_string(current_user.id) do
      conn
    else
      error(conn, :forbidden, 403)
    end
  end

  def error(conn, status, code) do
    put_status(conn, status)
    |> put_view(ClubhousePhxWeb.AuthView)
    |> render("#{code}.json", [])
    |> halt()
  end
end
