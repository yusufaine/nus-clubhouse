defmodule ClubhouseData.Users.User do
    use Ecto.Schema
    import Ecto.Changeset

    alias ClubhouseData.Rooms.Room
    alias ClubhouseData.Followings.Following

    @type t :: %__MODULE__{
        id: integer,
        name: String.t(),
        username: String.t(),
        bio: String.t(),
        email: String.t(),
        profileImgUrl: String.t(),
        isOnline: Boolean.t(),
        password_hash: String.t(),
        confirmed_at: DateTime.t() | nil,
        reset_sent_at: DateTime.t() | nil,
        created_rooms: [Room.t()] | %Ecto.Association.NotLoaded{},
        rooms: [Room.t()] | %Ecto.Association.NotLoaded{},
        following: [__MODULE__.t()] | %Ecto.Association.NotLoaded{},
        followers: [__MODULE__.t()] | %Ecto.Association.NotLoaded{},
        inserted_at: DateTime.t(),
        updated_at: DateTime.t()
    }

    @derive {Jason.Encoder, only: [:id, :name, :username, :email, :bio, :profileImgUrl, :isOnline, :rooms, :created_rooms, :following, :followers]}
    schema "users" do
        field :name, :string
        field :username, :string
        field :email, :string
        field :bio, :string 
        field :profileImgUrl, :string
        field :isOnline, :boolean
        field :password, :string, virtual: true
        field :password_hash, :string
        field :confirmed_at, :utc_datetime
        field :reset_sent_at, :utc_datetime
        has_many :created_rooms, Room, foreign_key: :creator_id
        many_to_many :rooms, Room, join_through: "rooms_users"
        many_to_many :following, __MODULE__, join_through: Following, join_keys: [following_id: :id, follower_id: :id]
        many_to_many :followers, __MODULE__, join_through: Following, join_keys: [follower_id: :id, following_id: :id]

        timestamps()
    end

    def changeset(%__MODULE__{} = user, attrs) do
        user
        |> cast(attrs, [:name, :username, :email, :bio, :profileImgUrl, :isOnline])
        |> validate_required([:email, :username])
        |> unique_email
        |> unique_username
    end

    def create_changeset(%__MODULE__{} = user, attrs) do
        user
        |> cast(attrs, [:name, :email, :password, :username, :bio, :profileImgUrl, :isOnline])
        |> validate_required([:username, :email, :password])
        |> unique_email
        |> unique_username
        |> validate_password(:password)
        |> put_pass_hash
    end

    def confirm_changeset(%__MODULE__{} = user, confirmed_at) do
        change(user, %{confirmed_at: confirmed_at})
    end

    def password_reset_changeset(%__MODULE__{} = user, reset_sent_at) do
        change(user, %{reset_sent_at: reset_sent_at})
    end

    def update_password_changeset(%__MODULE__{} = user, attrs) do
        user
        |> cast(attrs, [:password])
        |> validate_required([:password])
        |> validate_password(:password)
        |> put_pass_hash()
        |> change(%{reset_sent_at: nil})
    end

    defp unique_email(changeset) do
        changeset
        |> validate_format(
        :email,
        ~r/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,}$/
        )
        |> validate_format(
            :email,
            ~r/(@|u.)nus.edu/
        )
        |> validate_length(:email, max: 255)
        |> unique_constraint(:email)
    end

    defp unique_username(changeset) do
        changeset 
        |> validate_length(:username, max: 15)
        |> unique_constraint(:username)
    end

    # In the function below, strong_password? just checks that the password
    # is at least 8 characters long.
    # See the documentation for NotQwerty123.PasswordStrength.strong_password?
    # for a more comprehensive password strength checker.
    defp validate_password(changeset, field, options \\ []) do
        validate_change(changeset, field, fn _, password ->
        case strong_password?(password) do
            {:ok, _} -> []
            {:error, msg} -> [{field, options[:message] || msg}]
        end
        end)
    end

    # If you are using Bcrypt or Pbkdf2, change Argon2 to Bcrypt or Pbkdf2
    defp put_pass_hash(%Ecto.Changeset{valid?: true, changes:
        %{password: password}} = changeset) do
        change(changeset, Argon2.add_hash(password))
    end

    defp put_pass_hash(changeset), do: changeset

    defp strong_password?(password) when byte_size(password) > 7 do
        {:ok, password}
    end

    defp strong_password?(_), do: {:error, "The password is too short"}
end