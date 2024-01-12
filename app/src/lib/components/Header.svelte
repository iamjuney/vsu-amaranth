<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import type { HeaderLink } from '$lib/utils/types';
	import { MenuIcon, SearchIcon } from 'lucide-svelte';
	import { Moon, Sun } from 'radix-icons-svelte';
	import { goto } from '$app/navigation';
	import { toggleMode } from 'mode-watcher';
	import Input from './ui/input/input.svelte';

	let { header_links } = $props<{ header_links: HeaderLink[] }>();
	let pathname = $derived($page.url.pathname);

	function onsubmit(event: Event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget as HTMLFormElement);
		const search = formData.get('search') as string;
		goto(`/search?q=${search}`);
	}
</script>

<header class="relative py-4 [view-transition-name:header]">
	<div class="container mx-auto max-w-6xl">
		<div class="hidden items-center justify-between py-2 md:flex">
			<div class="flex items-center space-x-4">
				<Button on:click={toggleMode} variant="outline" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
				<form {onsubmit} class="relative flex items-center">
					<Input type="search" name="search" placeholder="Search" />
					<button title="Search" class="search-btn"
						><SearchIcon class="absolute right-2 top-2 text-gray-500" size="24" /></button
					>
				</form>
			</div>
			<a
				href="/"
				class="text-2xl font-bold tracking-tighter text-foreground"
				data-sveltekit-preload-data>.amaranth</a
			>
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
			<a
				href="/"
				class="text-2xl font-bold tracking-tighter text-foreground"
				data-sveltekit-preload-data>.amaranth</a
			>
			<div class="flex space-x-2">
				<div class="relative flex items-center">
					<form action="">
						<Input type="text" name="search" placeholder="Search" />
					</form>
					<SearchIcon class="absolute right-2 top-2 text-gray-500" size="24" />
				</div>
			</div>
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
							<a class="text-darker-primary" href="/{link.slug}" data-sveltekit-preload-data>
								{link.title}
							</a>
						</li>
					{:else}
						<li class="snap-start snap-always pb-4">
							<a
								class="text-muted-foreground hover:text-foreground"
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

<div class="fixed bottom-2 z-50 w-full md:hidden">
	<div class="container mx-auto">
		<div class="relative flex justify-center">
			<div
				class="relative flex max-w-fit flex-col border-8 border-primary/60 bg-darker-primary px-5 py-4"
			>
				<div class="relative flex items-center justify-center space-x-2">
					<div class="font-medium text-darker-primary-foreground">home</div>
					<MenuIcon class="text-darker-primary-foreground" size="24" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	li[aria-current='page']::before {
		view-transition-name: active-page;
	}
</style>
