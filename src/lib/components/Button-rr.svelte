<script lang="ts">
  import { Button, Spinner } from 'flowbite-svelte';
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

<Button type={btnType} class={btnClass} disabled={loading} on:click={exFn}>
  {#if loading}
    <Spinner class={spinClass} size={spinSize} color={spinColor} />
  {/if}
  <slot />
</Button>
