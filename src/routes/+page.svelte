<script>
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<Header />
<Main>
	<Timeline />
</Main>

<style>
	:global(:root) {
		--color-primary: 250, 80, 100;
		--color-accent: 0, 0, 0;
		--color-warn: 255, 20, 20;
		--color-bg: 250, 250, 250;
	}

	:global(body) {
		background-color: rgb(var(--color-bg));
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
