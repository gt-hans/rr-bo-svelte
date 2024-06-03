<script lang="ts">
  import { Label, Input, Checkbox, A, Button, Card } from 'flowbite-svelte';
  import type { PageData, ActionData } from './$types';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { enhance } from '$app/forms';

  export let form: ActionData;
  export let data: PageData;
  onMount(() => {
    console.log('form:', form);
    if (data?.id) {
      console.log('data.id=', data.id);
    }
    if (form?.success) {
      localStorage.setItem('user', JSON.stringify(form));
      goto('/');
    }
  });
</script>

{#if form?.success}
  <Card>
    <p>Logged in successfully</p>
  </Card>
{:else}
  <form method="POST">
    <label>
      Email
      <input name="email" type="email" />
    </label>
    <label>
      Password
      <input name="password" type="password" />
    </label>
    <Button type="submit" size="lg">Log In</Button>
  </form>
{/if}
