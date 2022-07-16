/** @type {import('@sveltejs/kit').GetSession} */
import type { RequestEvent } from '@sveltejs/kit';
import { parse } from 'cookie';

const { VITE_HOST: HOST } = import.meta.env;

export async function getSession (event: RequestEvent) {
  const parsedCookies = parse(event.request.headers.get('cookie') as string || '');

  const response = await fetch(`${HOST}/api/get-user-or-login?accesstoken=${parsedCookies.user_access_token}`);
  const responseJSON = await response.json();

  return {
    user: { ...responseJSON },
  };
}
