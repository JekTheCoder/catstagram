<script lang="ts">
	import '$lib/styles/card.css';
	import type { Post } from '$lib/models/post';
	import Comments from './Comments.svelte';

	export let post: Post;
</script>

<article class="card">
	<header>
		<div class="label">
			<div class="avatar">
				<img src={post.avatar} alt={post.username} />
			</div>
			<div class="info">
				<h2 class="primary">{post.username}</h2>
				<span class="secondary">{post.location}</span>
			</div>
		</div>
		<i class="fas fa-ellipsis-h" />
	</header>
	<figure>
		<img src={post.photo} alt={post.username} />
	</figure>
	<div class="icons">
		<div class="">
			<i class="fas fa-heart" class:red={post.like} />
			<i class="fas fa-paper-plane" />
		</div>

		<i class="fas fa-bookmark" />
	</div>
	<section class="description">
		<p>{post.postComment}</p>
	</section>
	<Comments comments={post.comments} />
</article>

<style>
	.red {
		background: linear-gradient(rgb(var(--color-accent)), rgb(var(--color-primary)));
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	header {
		padding: 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 100%;
	}

	.icons {
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 0.5rem;
	}

	.icons > div:first {
		display: flex;
		column-gap: 1rem;
	}

	section {
		padding: 0 0.5rem;
	}
</style>
