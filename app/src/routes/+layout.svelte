<script lang="ts">
	import '../app.pcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="relative h-full">
	<Header />

	<main class="relative mt-4 space-y-8">
		{@render children()}
	</main>

	<Footer />
</div>
