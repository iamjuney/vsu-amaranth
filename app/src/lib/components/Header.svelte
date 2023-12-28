<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Search, ChevronDown } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Command from '$lib/components/ui/command';
	import logo from '$lib/images/amaranth_logo.png';
	import type { HeaderLink } from '$lib/utils/types';

	let { links } = $props<{ links: HeaderLink[] }>();
	let open = $state(false);

	$effect(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<header class="sticky top-0 z-40 bg-white/60 shadow-sm backdrop-blur">
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
							href="/explore/{link.slug}"
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
									<DropdownMenu.Item href="/explore/{link.slug}" data-sveltekit-preload-data="hover"
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
					href="/explore/{link.slug}"
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
							<DropdownMenu.Item href="/explore/{link.slug}" data-sveltekit-preload-data="hover"
								>{link.title}</DropdownMenu.Item
							>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</nav>
</header>
