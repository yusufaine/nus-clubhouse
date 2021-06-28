defmodule ClubhousePhxWeb.AuthView do
  use ClubhousePhxWeb, :view
  alias ClubhousePhxWeb.UserView

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user_login.json", %{user: user}) do
    IO.puts("rendering user_login")
    %{data: user}
  end

  def render("user_me.json", %{user: user}) do
    IO.puts("rendering user_me")
    created_room_ids = Enum.map(user.created_rooms, fn(room) -> room.id end)
    room_ids = Enum.map(user.rooms, fn(room) -> room.id end)
    %{data: %{
        id: user.id,
        username: user.username,
        name: user.name,
        bio: user.bio,
        email: user.email,
        profileImgUrl: user.profileImgUrl,
        followers: user.followers,
        following: user.following,
        rooms: room_ids,
        created_rooms: created_room_ids
    }}
  end

  def render("401.json", _assigns) do
    %{errors: %{detail: "You need to login to view this resource"}}
  end

  def render("403.json", _assigns) do
    %{errors: %{detail: "You are not authorized to view this resource"}}
  end

  def render("logged_in.json", _assigns) do
    %{errors: %{detail: "You are already logged in"}}
  end

  def render("400.json", _assigns) do
    %{errors: %{detail: "Invalid username or password. Failed to log in"}}
  end
end
