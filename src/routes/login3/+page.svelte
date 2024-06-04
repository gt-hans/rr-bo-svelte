<script lang="ts">
  import { Label, Input, Button } from 'flowbite-svelte';
  import { SignIn_rr } from '$lib';
  import MetaTag from '$lib/utils/MetaTag.svelte';
  let title = 'Sign in to platform';
  export let site = {
    name: 'RRBull',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'RRBull Logo'
  };
  let rememberMe = true;
  let lostPassword = false;
  let createAccount = false;
  let lostPasswordLink = 'forgot-password';
  let loginTitle = 'Login to your account';
  let registerLink = 'sign-up';
  let loading = false;
  let required = false;

  const onSubmit = async (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement);

    const data: Record<string, string | File> = {};
    for (const field of formData.entries()) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
    const response = await fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    const { success, email, id } = result;
    console.log(result, success, email, id);
  };
  const onSendCode = async () => {
    console.log('send code');
    return;
    const response = await fetch('/api/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(result);
  };

  const description: string = 'RRBull Backoffice Sign In Page';
  const metaTitle: string = 'RRBull Backoffice - Sign in';
</script>

<MetaTag {description} title={metaTitle} />

<SignIn_rr
  {title}
  {site}
  {rememberMe}
  {lostPassword}
  {createAccount}
  {lostPasswordLink}
  {loginTitle}
  {registerLink}
  on:submit={onSubmit}
>
  <div>
    <Label for="email" class="mb-2 dark:text-white">Your email</Label>
    <Input
      type="email"
      name="email"
      id="email"
      placeholder="name@company.com"
      required
      class="border outline-none dark:border-gray-600 dark:bg-gray-700"
    />
  </div>
  <div>
    <Label for="password" class="mb-2 dark:text-white">Your code</Label>
    <div class="flex justify-between">
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        {required}
        class="mr-2 w-1/2 flex-grow border outline-none dark:border-gray-600 dark:bg-gray-700"
      />
      <Button type="button" class="ml-2 w-1/3 flex-grow" on:click={onSendCode} disabled={true}>Send Code</Button>
    </div>
  </div>
</SignIn_rr>
