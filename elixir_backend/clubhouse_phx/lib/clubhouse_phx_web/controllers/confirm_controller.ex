defmodule ClubhousePhxWeb.ConfirmController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias Phauxth.Confirm
  alias ClubhouseData.Users
  alias ClubhousePhxWeb.Email
  alias ClubhousePhxWeb.Auth.Login
  alias ClubhousePhxWeb.Auth.Token

  def index(conn, _params) do
    %{"key" => key} = conn.query_params
    IO.puts("key value: #{key}")
    case Token.verify(key) do
      {:ok, %{"user_email" => user_email}} ->
        case Users.get_by(%{"email" => user_email}) do
          user ->
            Users.confirm_user(user)
            Email.confirm_success(user.email)

            assign(conn, :user_id, user.id)
            conn
            |> render("info.json", %{info: "Your account has been confirmed"})

          nil ->
            error(conn, :unauthorized, 401)
        end
      {:error, _value} ->
        # token verify failed, INVALID TOKEN 
        error(conn, :error, 400)
    end
  end
end
