<script lang="ts">
	import type { Post } from '$lib/models/post';

	export let post: Post;
</script>

<div class="share">
	<header>
		<span class="title">Compartir</span>
		<button class="mat-button">
			<i class="fas fa-times-circle" />
		</button>
	</header>
	<div class="content">
		<a href="https://www.facebook.com/sharer/sharer.php?u=https://jeshuahinostroza.com?id={post.username}">
			<i class="fab fa-facebook-square" />
			<span>Facebook</span>
		</a>
	</div>
</div>

<style>
	.title {
		font-weight: 600;
	}

	.content {
		padding: 1rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		width: 12rem;
		display: block;
	}

	a > i {
		margin-right: 0.2rem;
	}
</style>
