<script lang="ts">
	import Button from './Button.svelte';
	import { fade } from 'svelte/transition';

	export let showPrelude = true;
</script>

<div class="content" out:fade={{ duration: 800 }}>
	<h1 in:fade|global={{ duration: 400, delay: 0 }}>
		<span class="accent">Eco</span><span class="accent-1">match</span>
	</h1>
	<h2 in:fade|global={{ duration: 400, delay: 400 }}>An app that finds your volunteer passion</h2>
	<p in:fade|global={{ duration: 400, delay: 800 }}>
		EcoMatch stores your personal data in SpruceID's private credential verification system,
		delivering customized results to maximize your volunteer experience.
	</p>
	<div in:fade|global={{ duration: 400, delay: 1200 }}>
		<Button
			on:click={() => {
				showPrelude = false;
			}}>Start</Button
		>
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		padding: var(--pad);
		box-sizing: border-box;
		gap: var(--pad);
		position: absolute;
		z-index: 10000;
		background: var(--back);
	}
	h1 {
		text-align: center;
		font-size: 4rem;
	}
	p {
		color: var(--text-weak);
		font: 1rem;
		line-height: 1.5rem;
		text-align: center;
		max-width: 40rem;
	}
</style>
