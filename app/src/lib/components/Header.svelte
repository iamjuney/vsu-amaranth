<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Search, ChevronDown } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Command from '$lib/components/ui/command';

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

<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>National</Command.Item>
			<Command.Item>Campus News</Command.Item>
			<Command.Item>Editorial</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>

<header class="bg-[#f1f3f2]">
	<nav class="mx-auto max-w-6xl" aria-label="Top">
		<div
			class="flex w-full items-center justify-between border-b border-white bg-primary px-4 py-4 sm:px-6 md:bg-transparent lg:border-none lg:px-8"
		>
			<div class="flex items-center">
				<div class="z-10 flex-grow-0 basis-auto rounded-b bg-primary md:-mb-8 md:-mt-6">
					<a href="/" class="">
						<span class="sr-only">Amaranth</span>
						<img class="h-10 w-auto md:h-20" src="./amaranth_logo.png" alt="" />
					</a>
				</div>

				<div class="ml-10 hidden space-x-6 uppercase lg:block">
					<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
						National
					</a>
					<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
						Campus
					</a>
					<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
						Editorial
					</a>
					<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
						Sports
					</a>
					<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
						Science
					</a>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger
							><span
								class="flex text-xs font-semibold uppercase text-foreground hover:text-accent-foreground"
								>More <ChevronDown size="12" class="ml-1" /></span
							></DropdownMenu.Trigger
						>
						<DropdownMenu.Content>
							<DropdownMenu.Group class="uppercase ">
								<DropdownMenu.Item>Technology</DropdownMenu.Item>
								<DropdownMenu.Item>Literary</DropdownMenu.Item>
								<DropdownMenu.Item>Investigative</DropdownMenu.Item>
								<DropdownMenu.Item>Blog</DropdownMenu.Item>
								<DropdownMenu.Item>Bulletin</DropdownMenu.Item>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
			<div class="ml-10 flex space-x-2">
				<Button class="text-xs font-semibold">Subscribe</Button>
				<Button variant="ghost" size="icon" onclick={() => (open = !open)} class="bg-transparent"
					><Search size="16" /></Button
				>
			</div>
		</div>
		<div
			class="flex flex-wrap items-center justify-between space-x-6 px-4 py-4 uppercase sm:px-6 lg:hidden lg:px-8"
		>
			<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
				National
			</a>
			<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
				Campus
			</a>
			<a href="/" class="text-xs font-semibold text-foreground hover:text-accent-foreground">
				Editorial
			</a>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					><span
						class="flex text-xs font-semibold uppercase text-foreground hover:text-accent-foreground"
						>More <ChevronDown size="12" class="ml-1" /></span
					></DropdownMenu.Trigger
				>
				<DropdownMenu.Content>
					<DropdownMenu.Group class="uppercase ">
						<DropdownMenu.Item>Science</DropdownMenu.Item>
						<DropdownMenu.Item>Technology</DropdownMenu.Item>
						<DropdownMenu.Item>Literary</DropdownMenu.Item>
						<DropdownMenu.Item>Investigative</DropdownMenu.Item>
						<DropdownMenu.Item>Blog</DropdownMenu.Item>
						<DropdownMenu.Item>Bulletin</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</nav>
</header>
