

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a6d351d4.js","_app/immutable/chunks/scheduler.6e6f338d.js","_app/immutable/chunks/index.343997e9.js"];
export const stylesheets = ["_app/immutable/assets/0.ddc2bd4c.css"];
export const fonts = [];
