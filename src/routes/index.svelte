<script context="module" lang="ts">
  /** * @type {import('@sveltejs/kit').Load} */
  import type { LoadEvent } from '@sveltejs/kit';

  type IUser = {
    id: string;
    avatar: string;
    username: string;
    discriminator: string;
  }
  type Event = LoadEvent & { session: { user: IUser } }

  export function load ({ session }: Event) {
    const user = session.user.id ? session.user : false;

    return {
      props: { user },
    };
  }
</script>

<script lang="ts">
  export let user: IUser;
</script>

{#if user}
  <h1>Hello {user.username}#{user.discriminator}</h1>
{:else}
  <a href="api/get-user-or-login">Login</a>
{/if}
