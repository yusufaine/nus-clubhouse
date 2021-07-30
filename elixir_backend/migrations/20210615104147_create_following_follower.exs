defmodule ClubhouseData.Repo.Migrations.CreateFollowingFollower do
  use Ecto.Migration

  def change do
    create table(:following) do
      add :following_id, references(:users)
      add :follower_id, references(:users)
      timestamps()
    end

    create index(:following, [:following_id])
    create index(:following, [:follower_id])

    create unique_index(:following, [:following_id, :follower_id], name: :following_following_id_follower_id_index)
    create unique_index(:following, [:follower_id, :following_id], name: :following_follower_id_following_id_index)
  end
end
