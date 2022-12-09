<script>
	import Profile from './Profile.svelte';
	import Stories from './Stories.svelte';
</script>

<aside class="card">
	<Profile />
	<Stories />
</aside>

<style>
	aside {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>