<script lang="ts">
	import spruceid from '@spruceid/ssx';
	import Login from './Login.svelte';
	import App from './App.svelte';

	let ssxProvider: spruceid.SSX | null = null;

	const ssxHandler = async () => {
		const ssx = new spruceid.SSX({
			providers: {
				server: {
					host: '/api'
				}
			},
			modules: {
				storage: {
					prefix: 'my-app',
					hosts: ['https://kepler.spruceid.xyz'],
					autoCreateNewOrbit: true
				},
				credentials: true
			}
		});
		await ssx.signIn();
		ssxProvider = ssx;
	};

	const ssxLogoutHandler = async () => {
		ssxProvider?.signOut();
		ssxProvider = null;
	};

	$: address = ssxProvider?.address() || '';
</script>

{#if ssxProvider == null}
	<!-- {#if false} -->
	<Login login={ssxHandler} />
{:else}
	<App logout={ssxLogoutHandler} {address} ssx={ssxProvider} />
{/if}
