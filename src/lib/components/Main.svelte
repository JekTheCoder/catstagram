<main>
	<slot />
</main>

<style>
	main {
		max-width: 80rem;
		margin: auto;
		padding: 1rem 2rem;

		display: grid;
		grid-template-columns: minmax(0, 60rem) 1fr;
		column-gap: 2rem;
	}
</style>
