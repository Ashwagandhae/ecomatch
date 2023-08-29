<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { Benchmark } from './data';
	import { questions } from './data';
	import Button from './Button.svelte';

	export let benchmark: Writable<Benchmark>;

	let questionsIndex = 0;
	$: question = questions[questionsIndex];
	let currentAnswer: number | null = null;

	function next() {
		if (currentAnswer == null) return;
		benchmark.update((b) => {
			b[question.benchmarkKey] = question.transform(currentAnswer as number);
			return b;
		});
		questionsIndex++;
		currentAnswer = null;
	}
</script>

<div class="question">
	{#if question}
		<h4>{question.question}</h4>
		<div class="answers">
			<!-- radio input -->
			{#each question.answers as answer, index}
				<label>
					<input type="radio" name="answer" value={index} bind:group={currentAnswer} />
					{answer}
				</label>
			{/each}
		</div>
		<div class="advance">
			<Button on:click={next} disabled={currentAnswer == null}>Next</Button>
		</div>
	{:else}
		<h4>Done!</h4>
		<div class="advance">
			<Button on:click={() => (questionsIndex = 0)}>Reset</Button>
		</div>
	{/if}
</div>

<style>
	.question {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: calc(var(--pad) * 2);
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	h4 {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-weight: normal;
		font-size: 2rem;
		padding-bottom: var(--pad);
		width: 100%;
		text-align: center;
	}
	.answers {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}
	.advance {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 100%;
	}
	label {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: flex-start;
		gap: var(--pad);
		font-size: 1rem;
		width: 100%;
		padding: var(--pad);
		border-radius: var(--rad);
		box-sizing: border-box;
		transition: background-color var(--trans) ease-in-out, transform var(--trans) ease-in-out;
	}
	label:hover {
		background: var(--back-1-hover);
	}
	label:active {
		background: var(--back-1-active);
	}
</style>
