defmodule Clubhouse.User do
    alias __MODULE__

    defstruct(
        id: nil,
        username: nil,
        profileImgUrl: nil,
        isMuted: nil,
        isSpeaker: nil,
        isOnline: false
    )

    def new(id, username, profileImgUrl, isMuted, isSpeaker, isOnline) do
        %User{
            id: id,
            username: username,
            profileImgUrl: profileImgUrl,
            isMuted: isMuted,
            isSpeaker: isSpeaker,
            isOnline: isOnline
        }
    end

    def new_speaker(id, username, profileImgUrl) do
        %User{
            id: id,
            username: username,
            profileImgUrl: profileImgUrl,
            isMuted: false,
            isSpeaker: true,
            isOnline: true
        }
    end

    def new_listener(id, username, profileImgUrl) do
        %User{
            id: id,
            username: username,
            profileImgUrl: profileImgUrl,
            isMuted: false,
            isSpeaker: false,
            isOnline: true
        }
    end

    def mute_user(user) do
        Map.put(user, :isMuted, true)
    end

    def unmute_user(user) do
        Map.put(user, :isMuted, false)
    end

    def set_speaker(user) do
        Map.put(user, :isSpeaker, true)
    end

    def remove_speaker(user) do
        Map.put(user, :isSpeaker, false)
    end
end
