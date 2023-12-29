<script lang="ts">
	import logo from '$lib/images/amaranth_logo.png';
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-primary" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-12">
		<div class="lg:grid lg:grid-cols-3 lg:gap-8">
			<div class="space-y-8 lg:col-span-1">
				<a href="/" class="">
					<span class="sr-only">Workflow</span>
					<img class="h-10 w-auto md:h-20" src={logo} alt="" />
				</a>
				<p class="text-sm text-white">
					Amaranth is the official publication network of Visayas State University.
				</p>
				<div class="flex space-x-6">
					<a href="/" class="text-white hover:text-gray-500">
						<span class="sr-only">Facebook</span>
						<Facebook class="h-6 w-6" />
					</a>

					<a href="/" class="text-white hover:text-gray-500">
						<span class="sr-only">Instagram</span>
						<Instagram class="h-6 w-6" />
					</a>

					<a href="/" class="text-white hover:text-gray-500">
						<span class="sr-only">Twitter</span>
						<Twitter class="h-6 w-6" />
					</a>
				</div>
			</div>
			<div class="mt-12 grid grid-cols-2 content-center gap-8 lg:col-span-2 lg:mt-0">
				<div class="flex flex-col space-y-4">
					<h3 class="text-xs font-medium uppercase tracking-wider text-white">About us</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-white">Our Staff</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-white">
						How to Submit an Article/Story
					</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-white">
						Ethics & Guidelines
					</h3>
					<h3 class="text-xs font-medium uppercase tracking-wider text-white">Contact us</h3>
				</div>
				<div class="">
					<p class="text-xs text-white">
						Terms of use • Privacy Policy • <br />Cookie Policy • Advertise • Help • Feedback
					</p>
					<p class="pt-4 text-xs text-white">
						<a href="https://vsu-amaranth.sanity.studio/">Author Login</a>
					</p>
				</div>
			</div>
		</div>
		<div class="mt-12 border-t border-white pt-8">
			<p class="text-xs text-white lg:text-right">&copy; 2023 VSU Amaranth. All rights reserved.</p>
		</div>
	</div>
</footer>
