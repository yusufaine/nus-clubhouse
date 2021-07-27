defmodule ClubhouseData.Repo.Migrations.CreateRooms do
  use Ecto.Migration

  def change do
    create table(:rooms) do
        add :name, :string
        add :numUsers, :integer
        add :type, :string
        add :isLive, :boolean
        add :isScheduled, :boolean
        add :scheduledStart, :string
        add :isEnded, :boolean
        add :creator_id, references(:users)

        timestamps()
    end
  end
end
