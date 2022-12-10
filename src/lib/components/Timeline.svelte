<script lang="ts">
	import type { Post as PostType } from '$lib/models/post';
	import { posts } from '$lib/store/posts';
	import Dialog from './Dialog.svelte';
	import Post from './Post.svelte';
	import Share from './Share.svelte';

	let active = false;
	let postOnShare: PostType;
	function openDialog(post: PostType) {
		active = true;
		postOnShare = post;
	}
</script>

<Dialog bind:active>
	<Share post={postOnShare} />
</Dialog>
<div class="timeline">
	{#each $posts as post}
		<Post {post} onShare={openDialog} />
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;

		gap: 2rem;
	}
</style>
