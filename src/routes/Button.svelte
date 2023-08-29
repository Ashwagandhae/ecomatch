<script lang="ts">
	export let disabled = false;
</script>

<button {disabled} on:click><slot /></button>

<style>
	button {
		padding: var(--pad) calc(var(--pad) * 2);
		border-radius: var(--rad);
		border: none;
		background-color: var(--back-button);
		color: var(--text-button);
		font-size: 1rem;
		cursor: pointer;
		transition: background-color var(--trans) ease-in-out, transform var(--trans) ease-in-out;
	}

	button:hover {
		background-color: var(--back-button-hover);
		transform: scale(1.05) rotate(3deg);
	}

	button:active {
		background-color: var(--back-button-active);
		transform: scale(1);
	}

	button:disabled {
		background-color: var(--back-button);
		color: var(--text-weak);
		cursor: not-allowed;
	}
</style>
