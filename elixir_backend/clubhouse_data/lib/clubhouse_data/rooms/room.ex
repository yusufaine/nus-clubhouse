defmodule ClubhouseData.Rooms.Room do
    use Ecto.Schema
    import Ecto.Changeset

    @derive {Jason.Encoder, only: [:name, :numUsers, :type, :isLive, :creator, :users]}
    schema "rooms" do
        field :name, :string
        field :numUsers, :integer
        field :type, :string
        field :isLive, :boolean
        field :isScheduled, :boolean
        field :scheduledStart :string
        field :isEnded, :boolean
        belongs_to :creator, ClubhouseData.Users.User
        many_to_many :users, ClubhouseData.Users.User, join_through: "rooms_users"

        timestamps()
    end

    def changeset(user, attrs) do
        user
        |> cast(attrs, [:name, :numUsers, :type, :isLive, :isScheduled, :scheduledStart, :isEnded])
        |> validate_required([:name, :numUsers, :type, :isLive, :isScheduled, :scheduledStart, :isEnded])
    end
end
