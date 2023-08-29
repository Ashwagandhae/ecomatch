<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Org from './Org.svelte';
	import { orgs, benchmarkDifference } from './data';
	import type { Benchmark } from './data';
	import { flip } from 'svelte/animate';
	import { send, receive } from './transition';

	export let benchmark: Writable<Benchmark>;

	$: sortedOrgs = orgs.sort((a, b) => {
		console.log(sortedOrgs);
		return (
			benchmarkDifference(a.benchmark, $benchmark) - benchmarkDifference(b.benchmark, $benchmark)
		);
	});
</script>

<div class="contentScroll">
	<div class="content">
		{#each sortedOrgs as org, index (org.name)}
			<div
				in:receive={{ key: org.name }}
				out:send={{ key: org.name }}
				animate:flip={{ duration: 600 }}
			>
				<Org {org} {index} />
			</div>
		{/each}
	</div>
</div>

<style>
	.contentScroll {
		height: inherit;
		display: block;
		box-sizing: border-box;

		overflow: auto;
		position: relative;
	}
	.content {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
