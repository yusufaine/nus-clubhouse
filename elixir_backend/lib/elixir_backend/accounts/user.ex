defmodule ElixirBackend.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:name, :username, :email, :bio, :profile_img_url]}
  schema "users" do
    field :bio, :string
    field :email, :string
    field :name, :string
    field :profile_img_url, :string
    field :username, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :username, :bio, :profile_img_url])
    |> validate_required([:name, :email, :username, :bio, :profile_img_url])
    |> unique_constraint(:email)
    |> unique_constraint(:username)
  end
end
