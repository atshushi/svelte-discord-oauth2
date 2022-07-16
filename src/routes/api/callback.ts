/** @type {import('@sveltejs/kit').RequestHandler} */
import type { RequestEvent } from '@sveltejs/kit';

const {
  VITE_DISCORD_CLIENT_ID: DISCORD_CLIENT_ID,
  VITE_DISCORD_CLIENT_SECRET: DISCORD_CLIENT_SECRET,
  VITE_HOST: HOST,
} = import.meta.env;

export async function get (event: RequestEvent) {
  const authCode = event.url.searchParams.get('code');

  const requestToken = await fetch(
    'https://discord.com/api/v10/oauth2/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code: authCode as string,
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        redirect_uri: `${HOST}/api/callback`,
        grant_type: 'authorization_code',
      }),
    },
  );

  const requestTokenJSON = await requestToken.json();
  return {
    status: 303,
    headers: {
      location: '/',
      'set-cookie': [
        `user_access_token=${requestTokenJSON.access_token}; Path=/; HttpOnly; SameSite=Strict; Expires=${requestTokenJSON.expires_in}}`,
      ],
    },
  };
}
