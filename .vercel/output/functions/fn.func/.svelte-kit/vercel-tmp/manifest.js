export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ad4ad778.js","app":"_app/immutable/entry/app.d059be89.js","imports":["_app/immutable/entry/start.ad4ad778.js","_app/immutable/chunks/scheduler.6e6f338d.js","_app/immutable/chunks/singletons.cb0fd2db.js","_app/immutable/chunks/index.918e5616.js","_app/immutable/entry/app.d059be89.js","_app/immutable/chunks/scheduler.6e6f338d.js","_app/immutable/chunks/index.343997e9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/ssx-login",
				pattern: /^\/api\/ssx-login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/ssx-login/_server.ts.js'))
			},
			{
				id: "/api/ssx-logout",
				pattern: /^\/api\/ssx-logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/ssx-logout/_server.ts.js'))
			},
			{
				id: "/api/ssx-nonce",
				pattern: /^\/api\/ssx-nonce\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/ssx-nonce/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
