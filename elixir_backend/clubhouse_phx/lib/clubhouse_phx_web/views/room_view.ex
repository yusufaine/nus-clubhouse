defmodule ClubhousePhxWeb.RoomView do
  use ClubhousePhxWeb, :view
  alias ClubhousePhxWeb.RoomView

  def render("index.json", %{rooms: rooms}) do
    %{data: render_many(rooms, RoomView, "room.json")}
  end

  def render("show.json", %{room: room}) do
    %{data: render_one(room, RoomView, "roomSession.json")}
  end

  def render("roomSession.json", %{room: room}) do
    room
  end

  def render("room.json", %{room: room}) do
    case room.isLive do
      false ->
          %{}
      true ->
        users = for user <- room.users do
          %{
            id: user.id,
            username: user.username,
            profileImgUrl: user.profileImgUrl
          }
        end
        %{
          id: room.id,
          name: room.name,
          isLive: room.isLive,
          isScheduled: room.isScheduled,
          numUsers: room.numUsers,
          type: room.type,
          startTime: room.inserted_at,
          creator: %{
            id: room.creator.id,
            username: room.creator.username,
            profileImgUrl: room.creator.profileImgUrl
          },
          users: users
        }
    end

  end
end
