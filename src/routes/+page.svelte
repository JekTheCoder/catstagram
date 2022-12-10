<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { AppData } from '$lib/models/app-data';
	import { posts } from '$lib/store/posts';
	import { profile } from '$lib/store/profile';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data: AppData;

	onMount(() => {
		posts.set(data.posts);
		profile.set(data.user);
	});
</script>

<Header />
<Main>
	<Timeline slot="center" />
	<Sidebar slot="right" />
</Main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

	:global(i.fas) {
		color: rgb(var(--color-bg-secondary));
	}

	:global(:root) {
		--color-primary: 200 50 200;
		--color-accent: 242, 162, 24;
		--color-warn: 255, 20, 20;
		--color-bg: 250, 250, 250;
		--color-bg-accent: 255, 255, 255;
		--color-text: 0, 0, 0;
		--color-text-secondary: 80, 80, 80;
		--color-bg-secondary: 185, 185, 185;
		--color-bg-contrary: 0, 0, 0;
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

	:global(p, span, .text-secondary) {
		color: rgb(var(--color-text-secondary));
	}
</style>
