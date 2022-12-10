export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ fetch }) {
	return fetch('https://kittygram-api.vercel.app/').then(data => data.json());
}
