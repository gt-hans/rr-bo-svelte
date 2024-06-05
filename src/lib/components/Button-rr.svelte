<script lang="ts">
  import { Button, Spinner } from 'flowbite-svelte';
  import { ArrowRightOutline, CartSolid } from 'flowbite-svelte-icons';
  export let loading = false;
  export let exFn;
  export let spinClass;
  export let spinSize;
  export let spinColor:
    | 'primary'
    | 'blue'
    | 'gray'
    | 'green'
    | 'red'
    | 'yellow'
    | 'pink'
    | 'purple'
    | 'white'
    | 'custom'
    | undefined;
  export let btnType: 'button' | 'submit' | 'reset' = 'button';
  export let btnClass;
</script>

<Button type={btnType} class={btnClass} disabled={loading} on:click={exFn} size="lg">
  <div class="flex items-center">
    <slot />
    <div class="text-left">
      {#if loading}
        <Spinner class={spinClass} size={spinSize} color={spinColor} />
      {:else}
        <ArrowRightOutline class="h-6 w-6" />
      {/if}
    </div>
    <div class="block">
    </div>
  </div>
</Button>
