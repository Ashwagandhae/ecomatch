

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5126460b.js","_app/immutable/chunks/scheduler.6e6f338d.js","_app/immutable/chunks/index.343997e9.js","_app/immutable/chunks/singletons.cb0fd2db.js","_app/immutable/chunks/index.918e5616.js"];
export const stylesheets = [];
export const fonts = [];
