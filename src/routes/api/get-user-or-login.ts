/** @type {import('@sveltejs/kit').RequestHandler} */
import type { RequestEvent } from '@sveltejs/kit';

const { VITE_DISCORD_URI: DISCORD_URI } = import.meta.env;

export async function get (event: RequestEvent) {
  const accessToken = event.url.searchParams.get('accesstoken');
  if (!accessToken) {
    return {
      status: 303,
      headers: {
        location: DISCORD_URI,
      },
    };
  }

  const response = await fetch(
    'https://discordapp.com/api/users/@me',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const responseJSON = await response.json();
  return {
    status: 200,
    body: JSON.stringify(responseJSON),
  };
}
