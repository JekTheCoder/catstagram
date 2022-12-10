<script lang="ts">
	import type { Comment } from '$lib/models/comment';

	export let comment: Comment;
</script>

<article>
	<h2>{comment.username}</h2>
	<p>{comment.text}</p>
</article>

<style>
	h2 {
		font-size: 14px;
		display: inline;
	}

	p {
		font-size: 13px;
		display: inline;
	}
</style>
