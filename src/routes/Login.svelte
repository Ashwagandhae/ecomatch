<script lang="ts">
	import Button from './Button.svelte';

	export let login: () => void;
</script>

<div class="content">
	<h1>Login</h1>
	<Button on:click={login}>Sign in with Ethereum</Button>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	h1 {
		text-align: center;
	}
</style>
