<script>
	import favicon from '$lib/assets/favicon.svg';
	import "$lib/styles/stylesheet.css";
	import '$lib/styles/effects.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
