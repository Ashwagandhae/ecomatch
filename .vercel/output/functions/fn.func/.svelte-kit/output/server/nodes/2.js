

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.57160379.js","_app/immutable/chunks/scheduler.6e6f338d.js","_app/immutable/chunks/index.343997e9.js","_app/immutable/chunks/index.918e5616.js"];
export const stylesheets = ["_app/immutable/assets/2.7b36e0d1.css"];
export const fonts = [];
