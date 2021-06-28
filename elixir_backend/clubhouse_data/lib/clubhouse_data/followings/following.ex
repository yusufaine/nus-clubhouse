defmodule ClubhouseData.Followings.Following do
    use Ecto.Schema

    alias Ecto.Changeset

    schema "following" do
        field :following_id, :id
        field :follower_id, :id
        timestamps()
    end

    @attrs [:following_id, :follower_id]

    def changeset(struct, params \\ %{}) do
        struct
        |> Changeset.cast(params, @attrs)
        |> Changeset.unique_constraint(
            [:following_id, :follower_id],
            name: :following_following_id_follower_id_index
        )
        |> Changeset.unique_constraint(
            [:follower_id, :following_id],
            name: :following_follower_id_following_id_index
        )
    end
end