

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e734946e.js","_app/immutable/chunks/scheduler.6e6f338d.js","_app/immutable/chunks/index.343997e9.js","_app/immutable/chunks/singletons.a829c096.js","_app/immutable/chunks/index.918e5616.js"];
export const stylesheets = [];
export const fonts = [];
