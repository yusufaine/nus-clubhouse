defmodule ElixirBackend.AccountTest do
  use ElixirBackend.DataCase

  alias ElixirBackend.Account

  describe "users" do
    alias ElixirBackend.Account.User

    @valid_attrs %{bio: "some bio", email: "some email", name: "some name", profile_img_url: "some profile_img_url", username: "some username"}
    @update_attrs %{bio: "some updated bio", email: "some updated email", name: "some updated name", profile_img_url: "some updated profile_img_url", username: "some updated username"}
    @invalid_attrs %{bio: nil, email: nil, name: nil, profile_img_url: nil, username: nil}

    @valid_attrs %{
      bio: "some bio", 
      email: "some email", 
      name: "some name", 
      profile_img_url: "some profile_img_url", 
      username: "some username", 
      password: "some password"
    }
    @update_attrs %{
      bio: "some updated bio", 
      email: "some updated email", 
      name: "some updated name", 
      profile_img_url: "some updated profile_img_url", 
      username: "some updated username", 
      password: "some updated password"
    }
    @invalid_attrs %{
      bio: nil, 
      email: nil, 
      name: nil, 
      profile_img_url: nil, 
      username: nil, 
      password: nil
    }


    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Account.create_user()

      user
    end

    def user_without_password(attrs \\ %{}) do
      %{user_fixture(attrs) | password: nil}
    end

    test "list_users/0 returns all users" do
      user = user_without_password()
      assert Account.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_without_password()
      assert Account.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Account.create_user(@valid_attrs)
      assert user.bio == "some bio"
      assert user.email == "some email"
      assert user.name == "some name"
      assert user.profile_img_url == "some profile_img_url"
      assert user.username == "some username"
      assert Bcrypt.verify_pass("some password", user.password_hash)
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Account.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, %User{} = user} = Account.update_user(user, @update_attrs)
      assert user.bio == "some updated bio"
      assert user.email == "some updated email"
      assert user.name == "some updated name"
      assert user.profile_img_url == "some updated profile_img_url"
      assert user.username == "some updated username"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_without_password()
      assert {:error, %Ecto.Changeset{}} = Account.update_user(user, @invalid_attrs)
      assert user == Account.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Account.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Account.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Account.change_user(user)
    end
  end
end
