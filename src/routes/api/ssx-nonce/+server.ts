import ssx from '../_ssx';
import { json } from '@sveltejs/kit';

export async function GET({ request, cookies }) {
	const nonce = ssx.generateNonce();
	return new Response(nonce, {
		status: 200,
		headers: { 'Set-Cookie': `nonce=${nonce}` }
	});
}
