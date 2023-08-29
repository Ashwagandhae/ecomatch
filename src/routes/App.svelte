<script lang="ts">
	import Ask from './Ask.svelte';
	import Box from './Box.svelte';
	import Button from './Button.svelte';
	import Recommend from './Recommend.svelte';
	import Prelude from './Prelude.svelte';
	import type { Benchmark } from './data';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';
	import type { SSX } from '@spruceid/ssx';
	import { onMount } from 'svelte';

	export let logout: () => void;
	export let address: string;
	export let ssx: SSX;

	let benchmark: Writable<Benchmark> = writable({
		age: 3,
		mobility: 3,
		location: 3,
		involvement: 3
	});

	let showPrelude = true;

	const handlePostContent = async (key: string, value: string) => {
		if (!key || !value) {
			alert('Invalid key or value');
			return;
		}
		const formatedKey = 'content/' + key.replace(/\ /g, '_');
		await ssx.storage.put(formatedKey, value);
	};

	let loading = true;

	const handleGetContent = async (content: string) => {
		const contentName = content.replace('my-app/', '');
		const { data } = await ssx.storage.get(contentName);
		return data;
	};

	onMount(async () => {
		const benchmarkData = await handleGetContent('content/benchmark');
		const benchmarkParsed = JSON.parse(benchmarkData);
		if (benchmarkParsed) {
			benchmark.set(benchmarkParsed);
			showPrelude = false;
		}
		loading = false;
	});

	function clearData() {
		handlePostContent('benchmark', JSON.stringify(null));
	}

	benchmark.subscribe((b) => {
		handlePostContent('benchmark', JSON.stringify(b));
	});
</script>

{#if loading}
	<div
		class="loading"
		in:fade={{ duration: 800 }}
		out:fly={{
			y: -100,
			duration: 400
		}}
	>
		Loading...
	</div>
{:else}
	<main transition:fade={{ duration: 800 }}>
		<div class="topbar">
			<div class="buttons">
				<div class="logo">
					<span class="accent">Eco</span><span class="accent-1">match</span>
				</div>
				<div class="address">ETH Address: {address || 'no address'}</div>
			</div>
			<div class="buttons">
				<Button on:click={clearData}>Clear Data</Button>
				<Button on:click={logout}>Logout</Button>
			</div>
		</div>
		<div class="content">
			{#if showPrelude}
				<Prelude bind:showPrelude />
			{:else}
				<Box title={'Questions'} subtitle={'Improve our knowledge about you'} focus={true}
					><Ask {benchmark} /></Box
				>
				<Box
					title={'Recommendations'}
					subtitle={'Organizations that might interest you'}
					focus={true}><Recommend {benchmark} /></Box
				>
			{/if}
		</div>
	</main>
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100vh;
		width: 100vw;
		box-sizing: border-box;
		background: var(--back);
		position: relative;
	}
	.loading {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 1rem;
	}
	.topbar {
		display: flex;
		justify-content: space-between;

		padding: var(--pad);
		width: 100vw;
		box-sizing: border-box;
		background: var(--back);
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.address {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	/* .contentScroll {
		height: 100vh;
		box-sizing: border-box;
		padding-top: calc(var(--pad) * 4 + 1rem);
		padding-bottom: var(--pad);
	} */
	.content {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: var(--pad);
		padding-top: 0;
		height: 100%;
		width: 100%;
		gap: var(--pad);
		box-sizing: border-box;
		position: relative;
	}

	@media (max-width: 800px) {
		.content {
			flex-direction: column;
		}
	}

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		gap: var(--pad);
	}
</style>
