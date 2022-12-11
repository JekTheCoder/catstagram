<script lang="ts">
	import '$lib/styles/card.css';
	import '$lib/styles/mat-button.css';
	import type { Post } from '$lib/models/post';
	import Comments from './Comments.svelte';
	import { likeCount } from '$lib/store/like-count';

	export let post: Post;
	let marked = false;

	export let onShare: (post: Post) => void;

	function toogleLike() {
		post.like = !post.like;
		let { like } = post;
		let sum = Number(like) - Number(!like);
		likeCount.update(likes => likes + sum);
	}

	function toggleMarked() {
		marked = !marked;
	}
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
		<button class="mat-button">
			<i class="fas fa-ellipsis-h" />
		</button>
	</header>
	<figure on:dblclick={toogleLike}>
		<img src={post.photo} alt={post.username} />
	</figure>
	<div class="icons">
		<div class="">
			<button class="mat-button" on:click={toogleLike}>
				<i class="fas fa-heart" class:red={post.like} />
			</button>
			<button class="mat-button" on:click={() => onShare(post)}>
				<i class="fas fa-paper-plane" />
			</button>
		</div>

		<button class="mat-button" on:click={toggleMarked}>
			<i class="fas fa-bookmark" class:marked />
		</button>
	</div>
	<section class="description">
		<p>{post.postComment}</p>
	</section>
	<Comments comments={post.comments} />
</article>

<style>
	@keyframes bouncing {
		0%, 100%, 30%, 60% {
			transform: translateY(0);
		}

		15% {
			transform: translateY(-25px);
		}

		45% {
			transform: translateY(-15px);
		}

		75% {
			transform: translateY(-5px);
		}
	}

	.red {
		background: linear-gradient(rgb(var(--color-accent)), rgb(var(--color-primary)));
		background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: bouncing .8s linear;
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
		padding: 0 0.5rem;
	}

	.icons > div:first {
		display: flex;
		column-gap: 1rem;
	}

	section {
		padding: 0 0.5rem;
	}

	.marked {
		color: rgb(var(--color-text-secondary));
	}
</style>
