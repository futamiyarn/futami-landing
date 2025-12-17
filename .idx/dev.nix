# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages.pnpm   # Menambahkan pnpm ke environment
    pkgs.nodePackages.firebase-tools
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "astro-build.astro-vscode"
      "bradlc.vscode-tailwindcss"
      "rangav.vscode-thunder-client"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Menggunakan pnpm run dev
          command = ["pnpm" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"];
          manager = "web";
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Menginstall dependencies menggunakan pnpm saat workspace dibuat
        install-dependencies = "pnpm install";
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Opsional: Pastikan deps terupdate setiap restart
        # update-deps = "pnpm install";
      };
    };
  };
}
