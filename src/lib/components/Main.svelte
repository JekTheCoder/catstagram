

<div class="container">
	<main>
		<slot name="center"/>
	</main>
	<div class="right-container">
		<slot name="right"/>
	</div>
</div>

<style>
	.container {
		max-width: 50rem;
		margin: auto;
		padding: 1rem 2rem;
		position: relative;

		display: grid;
		grid-template-columns: minmax(0, 60rem) minmax(15em, 1fr);
		align-items: flex-start;
		column-gap: 1rem;
	}

	.right-container {
		position: sticky;
		top: 1rem;
		right: 0;
	}
</style>
