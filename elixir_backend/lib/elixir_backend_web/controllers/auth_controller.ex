defmodule ElixirBackendWeb.AuthController do
    use ElixirBackendWeb, :controller
    plug Ueberauth

    alias ElixirBackend.Accounts

    def callback(%{assigns: response} = conn, params) do

        case response do
            %{ueberauth_auth: auth} ->
                provider = auth.provider
                case provider do 
                    :github ->  
                        user_params = %{
                            name: auth.info.name,
                            username: auth.info.nickname,
                            email: auth.info.email,
                            bio: auth.info.description,
                            profile_img_url: auth.info.image,
                            provider: "github" 
                        }
                        signin(conn, user_params)
                    :discord ->
                        user_params = %{
                            name: auth.info.name,
                            username: auth.info.nickname,
                            email: auth.info.email,
                            bio: auth.info.description,
                            profile_img_url: auth.info.image,
                            provider: "discord" 
                        }
                        signin(conn, user_params)
                end

            %{ueberauth_failure: failure} ->   
                %Ueberauth.Failure{errors: [%Ueberauth.Failure.Error{ message: messageText }]} = failure
                conn
                |> error(messageText)
            
        end
    end

    defp signin(conn, user_params) do
        case Accounts.insert_or_update_user(user_params) do
            {:ok, user} ->
                conn
                |> json(user)

            {:error, reason} ->
                conn
                |> error(reason)
        end
    end

    defp error(conn, reason) do
        conn
        |> json(%{response: "error", reason: reason})
    end
end