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
				<img
					src={post.avatar}
					alt=""
				/>
			</div>
			<div class="info">
				<h2 class="primary">{post.username}</h2>
				<span class="secondary">{post.location}</span>
			</div>
		</div>
		<i class="fas fa-ellipsis-h" />
	</header>
	<figure>
		<img
			src={post.photo}
			alt=""
		/>
	</figure>
	<div class="icons">
		<div class="">
			<i class="fas fa-heart" />
			<i class="fas fa-paper-plane" />
		</div>

		<i class="fas fa-bookmark" />
	</div>
	<section class="description">
		<p>{post.postComment}</p>
	</section>
	<div class="border-top">
		<Comments />
	</div>
</article>

<style>
	.border-top {
		border-top: 1px solid rgb(var(--color-bg-secondary));
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
