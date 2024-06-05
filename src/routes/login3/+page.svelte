<script lang="ts">
  import { writable } from 'svelte/store';
  import { Label, Input, Spinner } from 'flowbite-svelte';
  import { Button_rr, SignIn_rr } from '$lib';
  import MetaTag from '$lib/utils/MetaTag.svelte';
  import { Button, Flex, Space } from '@svelteuidev/core';

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
  let loadingSendCode = false;
  let required = false;
  // const email = writable('');
  let email = '';

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
  const onSendCode = async (emailIn: string) => {
    if (!emailIn) {
      return;
    }
    console.log('send code email: ', emailIn, loadingSendCode);
    loadingSendCode = true;
    const response = await fetch('/api/send-code', {
      method: 'POST',
      body: JSON.stringify({ emailIn }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    const { success, email, id, countdown } = result;
    console.log(result);
    loadingSendCode = false;
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
      bind:value={email}
      type="email"
      name="email"
      id="email"
      placeholder="name@company.com"
      required
      class="border outline-none dark:border-gray-600 dark:bg-gray-700"
    />
  </div>
  <Label for="password" class="mb-2 dark:text-white">Your code</Label>
  <Flex justify="space-between">
    <Input
      type="password"
      name="password"
      id="password"
      placeholder="••••••••"
      {required}
      class="mr-2 w-1/2 flex-grow border outline-none dark:border-gray-600 dark:bg-gray-700"
    />
    <Button size="md" on:click={()=>onSendCode(email)} loading={loadingSendCode}>
      Send Code
    </Button>
  </Flex>
</SignIn_rr>

<!-- <Button
    type="button"
    class="ml-2 w-1/3 flex-grow"
    disabled={loadingSendCode}
    on:click={() => onSendCode(email)}
  >
    {#if loadingSendCode}
      <Spinner class="me-1" size="4" color="white"/>
    {/if}
    Send Code
  </Button> -->
<!-- <Button_rr
    btnType="button"
    btnClass="ml-2 w-1/3 flex-grow"
    loading={loadingSendCode}
    exFn={() => onSendCode(email)}
    spinClass="ml-1.5"
    spinSize="4"
    spinColor="white"
  >
    Send Code
  </Button_rr> -->
