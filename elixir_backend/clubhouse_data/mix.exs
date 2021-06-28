defmodule ClubhouseData.MixProject do
  use Mix.Project

  def project do
    [
      app: :clubhouse_data,
      version: "0.1.0",
      elixir: "~> 1.11",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {ClubhouseData, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:ecto_sql, "~> 3.6"},
      {:postgrex, "~> 0.15.9"},
      {:argon2_elixir, "~> 2.0"},
      {:jason, "~> 1.2"},
    ]
  end
end
