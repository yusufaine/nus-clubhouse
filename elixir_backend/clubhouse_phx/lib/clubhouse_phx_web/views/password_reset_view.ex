defmodule ClubhousePhxWeb.PasswordResetView do
  use ClubhousePhxWeb, :view

  def render("error.json", %{error: message}) do
    %{errors: %{detail: message}}
  end

  def render("info.json", %{info: message}) do
    %{info: %{detail: message}}
  end
end
