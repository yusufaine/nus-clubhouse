defmodule ClubhousePhxWeb.AuthenticateTokenCookie do
  use Phauxth.Authenticate.Token

  @impl true
  def authenticate(conn, user_context, opts) do
    %{cookies: %{"auth_cookie" => %{info: token}}} = fetch_cookies(conn, encrypted: ~w(auth_cookie))
    verify_token(token, user_context, opts)
  end
end