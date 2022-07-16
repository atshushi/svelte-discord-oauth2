/// <reference types="@sveltejs/kit" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST: string;
  readonly VITE_DISCORD_URI: string;
  readonly VITE_DISCORD_CLIENT_ID: string;
  readonly VITE_DISCORD_CLIENT_SECRET: string;
  readonly VITE_DISCORD_SCOPES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
