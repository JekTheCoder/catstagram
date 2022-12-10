<script lang="ts">
	import { likeCount } from '$lib/store/like-count';
</script>

<header>
	<h1>Catstagram</h1>
	<nav>
		<ul>
			<li>
				<i class="fas fa-heart" />
				{#if $likeCount}
					<span>{$likeCount}</span>
				{/if}
			</li>
			<li><i class="fas fa-user" /></li>
		</ul>
	</nav>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

	h1 {
		font-family: 'Pacifico';
		background: linear-gradient(rgb(var(--color-accent)), rgb(var(--color-primary)));
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	header {
		background-color: rgb(var(--color-bg-accent));
		padding: 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		box-shadow: 0 0 10px -5px rgba(var(--color-text), 0.63);
	}

	nav {
		padding: 0 1rem;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
	}
</style>
