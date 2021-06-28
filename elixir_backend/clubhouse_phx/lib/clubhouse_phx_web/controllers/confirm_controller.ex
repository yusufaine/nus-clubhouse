defmodule ClubhousePhxWeb.ConfirmController do
  use ClubhousePhxWeb, :controller

  import ClubhousePhxWeb.Authorize

  alias Phauxth.Confirm
  alias ClubhouseData.Users
  alias ClubhousePhxWeb.Email

  def index(conn, params) do
    IO.inspect(params)
    case Users.get_by(params) do
      user ->
        Users.confirm_user(user)
        Email.confirm_success(user.email)

        conn
        |> render("info.json", %{info: "Your account has been confirmed"})

      nil ->
        error(conn, :unauthorized, 401)
    end
  end
end
