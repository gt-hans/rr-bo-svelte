<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/widgets/Navbar.svelte';
  import Sidebar from '$lib/widgets/Sidebar.svelte';
	import type { LayoutData } from './$types';
  import SignIn from '$lib/widgets/sign-in.svelte';
	let drawerHidden = false;
	export let data: LayoutData;
	console.log(data.login?.result);
	console.log(data.login?.route);
</script>

{#if !data.login?.result}
	<SignIn />
{:else}
<header
	class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar bind:drawerHidden />
</header>
<div class="overflow-hidden lg:flex">
	<Sidebar bind:drawerHidden />
	<div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
		<slot />
		
	</div>
</div>
{/if}
<style></style>
