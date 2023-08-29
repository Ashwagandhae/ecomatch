import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 600),

	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 1800,
			easing: quintOut,
			css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
		};
	}
});
