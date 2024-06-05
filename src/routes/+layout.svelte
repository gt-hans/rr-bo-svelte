<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Navbar from '$lib/widgets/Navbar.svelte';
  import Sidebar from '$lib/widgets/Sidebar.svelte';
  import type { LayoutData } from './$types';
  import { SvelteUIProvider, colorScheme } from '@svelteuidev/core';
	import { getTheme, applyTheme } from '$lib/utils/UtilFunctions';

	let bReady = false;
	applyTheme();
  let drawerHidden = false;
  export let data: LayoutData;
  console.log(data.login?.result);
  console.log(data.login?.route);
  // Apply the theme when the component mounts
  onMount(() => {
		bReady = true;
  });
</script>

{#if bReady}
<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
  {#if !data.login?.result}
    <slot />
  {:else}
    <header
      class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
    >
      <Navbar bind:drawerHidden />
    </header>
    <div class="overflow-hidden lg:flex">
      <Sidebar bind:drawerHidden />
      <div class="relative h-full w-full overflow-y-auto pt-[70px] lg:ml-64">
        <slot />
      </div>
    </div>
  {/if}

  <style></style>
</SvelteUIProvider>
{/if}
