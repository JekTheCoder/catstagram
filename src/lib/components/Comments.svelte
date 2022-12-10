<script lang="ts">
	import type { Comment } from '$lib/models/comment';
	import CommentCmp from './Comment.svelte';

	export let comments: Comment[];
</script>

<section>
	<div class="comments">
		{#each comments as comment}
			<CommentCmp {comment} />
		{/each}
	</div>
	<footer>
		<input type="text" placeholder="Something awesome"/>
		<button>Post!</button>
	</footer>
</section>

<style>
	section {
		padding-top: 0.2rem;
	}

	.comments {
		margin: 0 .5rem;
		display: grid;
		gap: 0.2em;
		padding-bottom: 0.2rem;

		border-bottom: 1px rgb(var(--color-bg-secondary), .6) solid;
	}

	input {
		outline: none;
		border: none;
		border-bottom: 1px transparent solid;
  	transition: border-color 200ms ease-in;
	}

	input:focus {
		border-bottom: 1px rgb(var(--color-text), .8) solid;
	}

	footer {
		padding: .5rem .5rem;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr min-content;
		gap: 1rem;
	}

	footer>button {
		background: transparent;
		border: none;
		color: rgb(var(--color-accent));
		padding: .2rem .5rem;
		transition: background-color 200ms ease-in;
		border-radius: .8rem;
	}

	footer>button:active {
	background-color: rgb(var(--color-accent), .2);
	}
</style>
