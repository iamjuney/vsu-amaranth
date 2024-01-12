<script lang="ts">
	import '../../app.pcss';

	import { onNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

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

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children, data } = $props();
</script>

<ModeWatcher />
<div
	class="relative bg-background antialiased selection:bg-darker-primary selection:text-darker-primary-foreground"
>
	<Header header_links={data.header_links || []} />

	<main class="relative mt-6 space-y-6">
		{@render children()}
	</main>

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
