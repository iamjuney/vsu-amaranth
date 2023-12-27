<script lang="ts">
	import '../app.pcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NewsLetter from '$lib/components/NewsLetter.svelte';

	let { children, data } = $props();
</script>

<div class="relative h-full bg-background antialiased">
	<Header links={data.categories || []} />

	<main class="relative mt-4 space-y-8">
		{@render children()}
	</main>

	<NewsLetter />
	<Footer />
</div>
