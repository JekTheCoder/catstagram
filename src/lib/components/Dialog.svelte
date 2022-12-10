<script lang="ts">
	import { fade, scale, type TransitionConfig } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	export let active = true;

	let transitionConfig: TransitionConfig = {
		duration: 250,
		easing: cubicIn
	}
</script>

{#if active}
	<div class="dialog">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="bg" on:click={() => (active = false)} transition:fade={transitionConfig} />
		<div class="card" transition:scale={transitionConfig}>
			<slot />
		</div>
	</div>
{/if}

<style>
	.card {
		padding: 1rem;
	}

	.dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		z-index: 50;
	}

	.bg {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		background-color: rgb(var(--color-bg-contrary));

		transition: opacity 200ms ease-in-out;

		z-index: -10;
	}
</style>
