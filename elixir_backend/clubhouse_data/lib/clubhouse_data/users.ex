defmodule ClubhouseData.Users do
    @moduledoc """
    The Users context.
    """
    import Ecto.Query, warn: false
    alias ClubhouseData.{Users.User, Repo}

    @type changeset_error :: {:error, Ecto.Changeset.t()}

    @doc """
    Returns the list of users.
    """
    @spec list_users() :: [User.t()]
    def list_users() do 
        users = Repo.all(User)
        preloaded_users = Enum.map(users, fn user -> get_by(%{"email" => user.email}) end)
        preloaded_users
    end
    @doc """
    Gets a single user.
    """
    @spec get_user!(integer) :: User.t() | no_return
    def get_user!(id) do
        Repo.preload(Repo.get!(User, id), [:created_rooms, :rooms, :followers, :following])
    end

    @doc """
    Gets a user based on email.

    This is used by Phauxth to get user information.
    """
    @spec get_by(map) :: User.t() | nil
    def get_by(%{"email" => email}) do
        case Repo.get_by(User, email: email) do
            user -> 
                user = Repo.preload(user, [:created_rooms, :rooms, :followers, :following])
                user
            nil ->
                nil
        end
    end

    @doc """
    Creates a user.
    """
    @spec create_user(map) :: {:ok, User.t()} | changeset_error
    def create_user(attrs) do
        %User{}
        |> User.create_changeset(attrs)
        |> Repo.insert()
    end

    @doc """
    Updates a user.
    """
    @spec update_user(User.t(), map) :: {:ok, User.t()} | changeset_error
    def update_user(%User{} = user, attrs) do
        user
        |> User.changeset(attrs)
        |> Repo.update()
    end

    @doc """
    Deletes a user.
    """
    @spec delete_user(User.t()) :: {:ok, User.t()} | changeset_error
    def delete_user(%User{} = user) do
        Repo.delete(user)
    end

    @doc """
    Returns an `%Ecto.Changeset{}` for tracking user changes.
    """
    @spec change_user(User.t()) :: Ecto.Changeset.t()
    def change_user(%User{} = user) do
        User.changeset(user, %{})
    end

    @doc """
    Confirms a user's email.
    """
    @spec confirm_user(User.t()) :: {:ok, User.t()} | changeset_error
    def confirm_user(%User{} = user) do
        user
        |> User.confirm_changeset(DateTime.truncate(DateTime.utc_now(), :second))
        |> Repo.update()
    end

    @doc """
    Makes a password reset request.
    """
    @spec create_password_reset(map) :: {:ok, User.t()} | nil
    def create_password_reset(attrs) do
        with %User{} = user <- get_by(attrs) do
        user
        |> User.password_reset_changeset(DateTime.truncate(DateTime.utc_now(), :second))
        |> Repo.update()
        end
    end

    @doc """
    Updates a user's password.
    """
    @spec update_password(User.t(), map) :: {:ok, User.t()} | changeset_error
    def update_password(%User{} = user, attrs) do
        user
        |> User.update_password_changeset(attrs)
        |> Repo.update()
    end

    @doc """
    Add user to following.
    """
    @spec follow_user(User.t(), User.t()) :: {:ok, User.t()} | changeset_error
    def follow_user(%User{} = user, %User{} = userToFollow) do
        user = Repo.preload(user, [:following, :followers])
        userToFollow = Repo.preload(userToFollow, [:following, :followers])
        following = [userToFollow | user.following]
        user 
        |> Ecto.Changeset.change()
        |> Ecto.Changeset.put_assoc(:following, following)
        |> Repo.insert_or_update()
    end

    @doc """
    Set user online status to true when logged in.
    """
    @spec set_user_online(User.t()) :: {:ok, User.t()} | changeset_error
    def set_user_online(%User{} = user) do
        update_user(user, %{:isOnline: true})
    end
end