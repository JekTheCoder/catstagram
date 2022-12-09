<main>
	<slot />
</main>

<style>
	main {
		max-width: 120rem;
		margin: auto;
		padding: 0 2rem;

		display: grid;
		grid-template-columns: minmax(0, 100%) 1fr;
		column-gap: 2rem;
	}
</style>
