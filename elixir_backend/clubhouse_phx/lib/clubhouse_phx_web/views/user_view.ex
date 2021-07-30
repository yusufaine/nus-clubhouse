defmodule ClubhousePhxWeb.UserView do
  use ClubhousePhxWeb, :view
  alias ClubhousePhxWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("showProfile.json", %{user: user}) do
    %{data: render_one(user, UserView, "userProfile.json")}
  end

  def render("user.json", %{user: user}) do
    user
  end

  def render("userProfile.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      name: user.name,
      username: user.username,
      profileImgUrl: user.profileImgUrl,
      followers: user.followers,
      following: user.following,
      isOnline: user.isOnline
    }
  end
end
