<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { AppData } from '$lib/models/app-data';
	import { posts } from '$lib/store/posts';
	import { profile } from '$lib/store/profile';

	fetch('https://kittygram-api.vercel.app/')
		.then((data) => data.json())
		.then(({ posts: _posts, user }: AppData) => {
			posts.set(_posts);
			profile.set(user);
		});
</script>

<Header />
<Main>
	<Timeline />
	<Sidebar />
</Main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

	:global(:root) {
		--color-primary: 200 50 200;
		--color-accent: 242, 162, 24;
		--color-warn: 255, 20, 20;
		--color-bg: 250, 250, 250;
		--color-bg-accent: 255, 255, 255;
		--color-text: 0, 0, 0;
		--color-bg-secondary: 235, 235, 235;
	}

	:global(body) {
		background-color: rgb(var(--color-bg));
		color: rgb(var(--color-text));
		font-family: 'Lato', sans-serif;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
