<script>
	import { profile } from '$lib/store/profile';
	import Profile from './Profile.svelte';
	import Stories from './Stories.svelte';

	let _profile = $profile;
</script>

<aside class="card">
	{#if _profile}
		<Profile profile={_profile}/>
	{/if}
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