<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import type { HeaderLink } from '$lib/utils/types';
	import { MenuIcon, SearchIcon } from 'lucide-svelte';

	let { header_links } = $props<{ header_links: HeaderLink[] }>();
	let pathname = $derived($page.url.pathname);
</script>

<header class="relative py-4 [view-transition-name:header]">
	<div class="container mx-auto max-w-6xl">
		<div class="hidden items-center justify-between py-2 md:flex">
			<div class="flex items-center space-x-4">
				<MenuIcon size="24" />
				<div class="relative flex items-center">
					<form action="">
						<input
							class="flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							name="search"
							placeholder="Search"
						/>
					</form>
					<SearchIcon class="absolute right-2 top-2 text-gray-500" size="24" />
				</div>
			</div>
			<a href="/" class="text-3xl font-bold tracking-tighter text-gray-800">.amaranth</a>
			<div class="flex items-center space-x-2">
				<Button
					class="inline-flex"
					variant="ghost"
					href="https://vsu-amaranth.sanity.studio/"
					target="_blank">Author Login</Button
				>
				<Button class="inline-flex">Subscribe Now</Button>
			</div>
		</div>
		<div class="flex items-center justify-between md:hidden">
			<MenuIcon size="24" />
			<a href="/" class="text-3xl font-bold tracking-tighter text-gray-800">.amaranth</a>
			<SearchIcon size="24" />
		</div>
	</div>

	<div class="container mx-auto mt-4 max-w-6xl">
		<nav aria-label="Main navigation">
			<ul
				class="no-scrollbar flex w-full snap-x snap-mandatory items-center space-x-8 overflow-x-scroll border-b md:justify-center"
			>
				{#each header_links as link}
					{#if pathname === `/${link.slug}`}
						<li aria-current="page" class="snap-start snap-always border-b-4 border-primary pb-4">
							<a class="text-foreground" href="/{link.slug}" data-sveltekit-preload-data>
								{link.title}
							</a>
						</li>
					{:else}
						<li class="snap-start snap-always pb-4">
							<a
								class="text-gray-500 hover:text-foreground"
								href="/{link.slug}"
								data-sveltekit-preload-data
								>{link.title}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	li[aria-current='page']::before {
		view-transition-name: active-page;
	}
</style>
