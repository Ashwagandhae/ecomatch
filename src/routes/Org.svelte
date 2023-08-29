<script lang="ts">
	import type { Org } from './data';

	export let org: Org;
	export let index: number;
</script>

<div class="org">
	<div class="top">
		<div class="rank">{index + 1}</div>
		<h4>
			{org.name}
		</h4>
	</div>
	<img src={org.img} alt={org.name} />
	<div class="text">
		<p class="desc">{org.description}</p>
		<a href={org.url} target="_blank">Website</a>
	</div>
</div>

<style>
	.top {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		gap: var(--pad);
		padding-bottom: var(--pad);
	}
	.org {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: var(--pad);
		width: 100%;
		box-sizing: border-box;
		max-width: 30rem;
	}
	h4 {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		width: 100%;
		font-weight: normal;
	}
	img {
		width: 100%;
		height: auto;
		aspect-ratio: 3/2;
		object-fit: cover;
		border-radius: var(--rad);
	}
	.desc {
		color: var(--text-weak);
	}
	.text {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		width: 100%;
	}
	a {
		text-decoration: none;
		color: var(--text);
	}
	a:hover {
		text-decoration: underline;
	}

	.rank {
		color: var(--text-weak);
		font-size: 1.5rem;
		font-weight: normal;
		padding: var(--pad);
		width: 1rem;
		height: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--back-1-hover);
		border-radius: 50%;
	}
</style>
