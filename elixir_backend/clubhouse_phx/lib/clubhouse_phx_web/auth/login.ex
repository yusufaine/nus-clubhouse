defmodule ClubhousePhxWeb.Auth.Login do
  @moduledoc """
  Custom login module that checks if the user is confirmed before
  allowing the user to log in.
  """

  use Phauxth.Login.Base

  alias ClubhouseData.Users

  @impl true
  def authenticate(%{"password" => password} = params, opts \\ []) do
    case Users.get_by(params) do
      nil -> {:error, "no user found"}
      %{confirmed_at: nil} -> {:error, "account unconfirmed"}
      user -> Argon2.check_pass(user, password, opts)
    end
  end
end
