<script lang="ts">
  import { Section, Register } from 'flowbite-svelte-blocks';
  import { Label, Input, Checkbox, A, Button, Card } from 'flowbite-svelte';
  import type { PageData, ActionData } from './$types';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { enhance } from '$app/forms';
  import SignInRr from '$lib/authentication/SignIn-rr.svelte';

  export let form: ActionData;
  export let data: PageData;
  let loading = false;
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

<!-- <SignInRr
  title="Sign in to platform"
  site={{
    name: 'RRBull',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'RRBull Logo'
  }}
  rememberMe={true}
  lostPassword={true}
  createAccount={false}
  lostPasswordLink="forgot-password"
  loginTitle="Login to your account"
  registerLink="sign-up"
  formUrl="?/login"
  formCallback={() => {
    console.log('here 1');
    loading = true;
    return async ({ update, formData, form }) => {
      await update();
      loading = false;
      console.log('here 2', formData, form);
    };
  }}
/> -->
<Card>
  <form
    method="POST"
    action="?/login"
    use:enhance={() => {
      console.log('here 1');
      loading = true;
      return async (evt) => {
        await evt.update();
        loading = false;
        console.log('here 2', evt.formData.get('password'));
      };
    }}
  >
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
</Card>
