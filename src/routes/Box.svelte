<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let focus = false;
</script>

<div class="box" class:focus>
	<button class="bar" on:click={() => (focus = !focus)}>
		<h2>{title}</h2>
		<h3>{subtitle}</h3>
	</button>
	{#if focus}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>

<style>
	.box {
		background: var(--back-1);
		border-radius: var(--rad);
		box-sizing: border-box;

		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		transition: height var(--trans) ease-in-out;

		position: relative;
	}
	.bar {
		padding: var(--pad);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--pad);
	}
	.box.focus {
		height: 100%;
	}

	h2 {
		margin: 0;
		padding: 0;
	}

	h3 {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		color: var(--text-weak);
		font-weight: 400;
	}

	h3 {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.content {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: relative;
	}
</style>
