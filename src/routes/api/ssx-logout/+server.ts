import ssx from '../_ssx';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	return json(
		{
			success: (await ssx.logout()) ?? true
		},
		{
			status: 200
		}
	);
}
