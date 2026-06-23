{
  description = "Personal Site Flake";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };

    in
    {
      packages.${system}.default = pkgs.buildNpmPackage {
        pname = "Mnemosyne";
        version = "0.1.0";

        src = ./.;
        npmDepsHash = "sha256-IWHZZHrh0gKK/evTZy/SWvZ7lqQKMH3ZCjGkiL5MKe0=";

        buildPhase = ''
          npx astro build
        '';

        installPhase = ''
          cp -r dist $out
        '';
      };
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24
        ];
      };
    };
}
