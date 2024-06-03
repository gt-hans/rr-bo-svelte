<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { SignIn } from '$lib';
  import MetaTag from '$lib/utils/MetaTag.svelte';
	let title = 'Sign in to platform';
	export let site = {
		name: 'RRBull',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'RRBull Logo'
	};
	let rememberMe = true;
	let lostPassword = true;
	let createAccount = false;
	let lostPasswordLink = 'forgot-password';
	let loginTitle = 'Login to your account';
	let registerLink = 'sign-up';

	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
		localStorage.setItem('user', JSON.stringify(data));
	};

  const description: string = 'RRBull Backoffice Sign In Page';
	const metaTitle: string = 'RRBull Backoffice - Sign in';
</script>

<MetaTag {description} title={metaTitle} />

<SignIn
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
		<Label for="password" class="mb-2 dark:text-white">Your password</Label>
		<Input
			type="password"
			name="password"
			id="password"
			placeholder="••••••••"
			required
			class="border outline-none dark:border-gray-600 dark:bg-gray-700"
		/>
	</div>
</SignIn>
