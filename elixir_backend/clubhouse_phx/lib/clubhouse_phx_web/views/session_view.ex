defmodule ClubhousePhxWeb.SessionView do
  use ClubhousePhxWeb, :view

  def render("info.json", %{info: token}) do
    %{access_token: token}
  end
end
