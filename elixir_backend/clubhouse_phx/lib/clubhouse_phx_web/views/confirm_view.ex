defmodule ClubhousePhxWeb.ConfirmView do
  use ClubhousePhxWeb, :view

  def render("info.json", %{info: message}) do
    %{info: %{detail: message}}
  end
end
