<script lang="ts">
	import '../app.pcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NewsLetter from '$lib/components/NewsLetter.svelte';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
		showSpinner: false
	});

	$effect(() => {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	});

	let { children, data } = $props();
</script>

<div
	class="relative bg-background antialiased selection:bg-darker-primary selection:text-darker-primary-foreground"
>
	<Header links={data.categories || []} />

	<main class="relative mt-4 space-y-8">
		{@render children()}
	</main>

	<NewsLetter />
	<Footer />
</div>

<style>
	:global(#nprogress .bar) {
		height: 3px !important;
		background: linear-gradient(
			90deg,
			hsl(122 96% 37%) 0%,
			hsl(122 96% 32%) 50%,
			hsl(122, 96%, 27%) 100%
		) !important;
	}
</style>
