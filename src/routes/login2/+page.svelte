<script lang="ts">
	import { Label, Input, Checkbox, A, Button, Card } from 'flowbite-svelte';
</script>

<form method="POST" action="?/login">
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
