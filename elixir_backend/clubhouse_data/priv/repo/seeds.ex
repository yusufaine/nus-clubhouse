# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# It is also run when you use `mix ecto.setup` or `mix ecto.reset`
#

users = [
    %{
      email: "user1@example.com", 
      username: "username1", 
      name: "name1", 
      bio: "bio1", 
      profileImgUrl: "http://user1/img/", 
      password: "password1"
    },
    %{
        email: "user2@example.com", 
        username: "username2", 
        name: "name2", 
        bio: "bio2", 
        profileImgUrl: "http://user2/img/", 
        password: "password2"
    }
]

for user <- users do
  {:ok, user} = ClubhouseData.Users.create_user(user)
  ClubhouseData.Users.confirm_user(user)
end
