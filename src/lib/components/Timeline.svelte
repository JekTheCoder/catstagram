<script lang="ts">
	import { posts } from '$lib/store/posts';
	import Post from './Post.svelte';
</script>

<div class="timeline">
	{#each $posts as post}
		<Post {post}/>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;

		gap: 2rem;
	}
</style>