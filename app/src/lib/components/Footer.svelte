<script lang="ts">
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mt-6 lg:mt-12" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="container mx-auto max-w-6xl py-6 lg:py-12">
		<div class="h-1 w-full bg-primary/50"></div>
		<div class="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
			<div class="space-y-8 lg:col-span-1">
				<a
					href="/"
					class="text-2xl font-bold tracking-tighter text-foreground"
					data-sveltekit-preload-data>.amaranth</a
				>
				<p class="text-sm text-foreground">
					Amaranth is the official publication network of Visayas State University.
				</p>
				<div class="flex space-x-6">
					<a href="/" class="text-foreground hover:text-gray-500">
						<span class="sr-only">Facebook</span>
						<Facebook class="h-6 w-6" />
					</a>

					<a href="/" class="text-foreground hover:text-gray-500">
						<span class="sr-only">Instagram</span>
						<Instagram class="h-6 w-6" />
					</a>

					<a href="/" class="text-foreground hover:text-gray-500">
						<span class="sr-only">Twitter</span>
						<Twitter class="h-6 w-6" />
					</a>
				</div>
			</div>
			<div class="mt-12 grid grid-cols-2 content-center gap-8 lg:col-span-2 lg:mt-0">
				<div class="flex flex-col space-y-4">
					<h3 class="text-xs font-medium uppercase tracking-wider text-foreground">About us</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-foreground">Our Staff</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-foreground">
						How to Submit an Article/Story
					</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-foreground">
						Ethics & Guidelines
					</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-foreground">Contact us</h3>
				</div>
				<div class="">
					<p class="text-xs text-foreground">
						Terms of use • Privacy Policy • <br />Cookie Policy • Advertise • Help • Feedback
					</p>
					<p class="mt-4 text-xs text-foreground">
						<a href="https://vsu-amaranth.sanity.studio/" target="_blank">Author Login</a>
					</p>
					<p class="mt-12 text-xs text-foreground">
						&copy; {year} VSU Amaranth. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
