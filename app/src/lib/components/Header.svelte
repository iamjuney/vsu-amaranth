<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Search, ChevronDown, SearchIcon } from 'lucide-svelte';
	import logo from '$lib/images/amaranth_logo.png';
	import type { HeaderLink } from '$lib/utils/types';
	import { page } from '$app/stores';

	let { header_links } = $props<{ header_links: HeaderLink[] }>();
	let pathname = $derived($page.url.pathname);
</script>

<!-- <header class="sticky top-0 z-40 bg-white/60 shadow-sm ">
	<nav class="mx-auto max-w-6xl" aria-label="Top">
		<div
			class="flex w-full items-center justify-between border-b border-white bg-primary px-4 py-2 md:bg-transparent md:px-6 md:py-4 lg:border-none lg:px-8"
		>
			<div class="relative flex items-center">
				<a
					href="/"
					class="z-50 md:absolute md:top-0 md:bg-darker-primary"
					data-sveltekit-preload-data="hover"
				>
					<span class="sr-only">Amaranth</span>
					<img class="h-14 w-auto md:h-16" src={logo} alt="Amaranth Logo" />
				</a>

				<div class="relative ml-56 hidden space-x-6 uppercase md:block">
					{#each links.slice(0, 4) as link}
						<a
							href="/{link.slug}"
							class="text-xs font-bold text-foreground hover:text-accent-foreground"
							data-sveltekit-preload-data="hover"
						>
							{link.title}
						</a>
					{/each}

					<DropdownMenu.Root>
						<DropdownMenu.Trigger
							><span
								class="flex text-xs font-bold uppercase text-foreground hover:text-accent-foreground"
								>More <ChevronDown size="12" class="ml-1" /></span
							></DropdownMenu.Trigger
						>
						<DropdownMenu.Content>
							<DropdownMenu.Group class="uppercase">
								{#each links.slice(4) as link}
									<DropdownMenu.Item href="/{link.slug}" data-sveltekit-preload-data="hover"
										>{link.title}</DropdownMenu.Item
									>
								{/each}
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
			<div class="ml-10 flex space-x-2">
				<Button class="text-xs">Subscribe</Button>
				<Button variant="ghost" size="icon" onclick={() => (open = !open)} class="bg-transparent"
					><Search size="16" /></Button
				>
				<Command.Dialog bind:open>
					<Command.Input placeholder="Type a command or search..." />
					<Command.List>
						<Command.Empty>No results found.</Command.Empty>
						<Command.Group heading="Suggestions">
							<Command.Item>Calendar</Command.Item>
							<Command.Item>Search Emoji</Command.Item>
							<Command.Item>Calculator</Command.Item>
						</Command.Group>
					</Command.List>
				</Command.Dialog>
			</div>
		</div>
		<div
			class="flex flex-wrap items-center justify-between space-x-6 px-4 py-4 font-bold uppercase sm:px-6 md:hidden lg:px-8"
		>
			{#each links.slice(0, 3) as link}
				<a
					href="/{link.slug}"
					class="text-xs text-foreground hover:text-accent-foreground"
					data-sveltekit-preload-data="hover"
				>
					{link.title}
				</a>
			{/each}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					><span class="flex text-xs uppercase text-foreground hover:text-accent-foreground"
						>More <ChevronDown size="12" class="ml-1" /></span
					></DropdownMenu.Trigger
				>
				<DropdownMenu.Content>
					<DropdownMenu.Group class="uppercase">
						{#each links.slice(3) as link}
							<DropdownMenu.Item href="/{link.slug}" data-sveltekit-preload-data="hover"
								>{link.title}</DropdownMenu.Item
							>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</nav>
</header> -->

<header class="relative z-40 py-4 [view-transition-name:header]">
	<div class="container mx-auto flex max-w-6xl items-center justify-between py-2">
		<div class="flex items-center space-x-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="text-gray-700"
				><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line
					x1="4"
					x2="20"
					y1="18"
					y2="18"
				></line></svg
			>
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
		<div class="text-3xl font-bold tracking-tighter text-gray-800">.amaranth</div>
		<div class="flex items-center space-x-2">
			<Button class="inline-flex" variant="ghost">Author Login</Button>
			<Button class="inline-flex">Subscribe Now</Button>
		</div>
	</div>

	<div class="container mx-auto mt-4 max-w-6xl">
		<nav aria-label="Main navigation">
			<ul class="flex items-center justify-center space-x-8 border-b pb-4">
				{#each header_links as link}
					{#if pathname === `/${link.slug}`}
						<li>
							<a
								class="border-b-4 border-primary pb-4 text-gray-700"
								href="/{link.slug}"
								aria-current="page"
								data-sveltekit-preload-data
								>{link.title}
							</a>
						</li>
					{:else}
						<li>
							<a
								class="text-gray-500 hover:text-gray-700"
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
	a[aria-current='page']::before {
		view-transition-name: active-page;
	}
</style>
