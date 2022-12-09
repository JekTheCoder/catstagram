<script>
	import '$lib/styles/card.css';
	import Comments from './Comments.svelte';
</script>

<article class="card">
	<header>
		<div class="label">
			<div class="avatar">
				<img
					src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
					alt=""
				/>
			</div>
			<div class="info">
				<h3>Elmo.pug</h3>
				<span>Bogota colombia</span>
			</div>
		</div>
		<i class="fas fa-ellipsis-h" />
	</header>
	<figure>
		<img
			src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
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
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum.
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
