defmodule ElixirBackend.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:name, :username, :email, :bio, :profile_img_url, :token]}
  schema "users" do
    field :bio, :string
    field :email, :string
    field :name, :string
    field :profile_img_url, :string
    field :username, :string
    field :token, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :username, :bio, :profile_img_url, :token])
    |> validate_required([:email, :username, :profile_img_url, :token])
    |> unique_constraint(:username)
  end
end
