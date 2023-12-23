<script lang="ts">
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import { Search, ChevronDown } from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Footer from '$lib/components/Footer.svelte';

	let open = $state(false);
	let { children } = $props();

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

	let top_stories = [
		{
			id: 1,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'In a big victory for Trump, the Supreme Court tells Jack Smith to go away',
			author: ' Ian Millhiser',
			summary:
				'Trump wants to run out the clock on his criminal trials. The Supreme Court just gave him a significant assist.'
		},
		{
			id: 2,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'We dined out less this year — but it wasn’t just about the price',
			author: 'Dane Riechel Oja',
			summary: 'The shifting value of going out to eat.'
		},
		{
			id: 3,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'Missing the feeling of a white Christmas? That might be solastalgia.',
			author: 'Anna North',
			summary:
				'Finally, a term that explains the sadness of a whole season — and a way of life — melting before our eyes.'
		},
		{
			id: 4,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'It was a great year for movie sex scenes, despite the discourse',
			author: 'Esther Zuckerman',
			summary: 'In Poor Things, Oppenheimer, Passages, and more, sex on screen drove the plot.'
		},
		{
			id: 5,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'The US may be flouting its own laws by sending unrestricted aid to Israel',
			author: 'Nicole Narea',
			summary:
				'US law limits aid to countries that violate human rights. Here’s why it isn’t applied to Israel.'
		},
		{
			id: 6,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'This year’s “great man” biopics have a couple of things in common',
			author: 'Esther Zuckerman',
			summary:
				'What Oppenheimer, Napoleon, Maestro, and Ferrari have to say about the men at their centers.'
		},
		{
			id: 7,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'The greenwashing of wool, explained',
			author: 'Marina Bolotnikova',
			summary: 'Big Wool wants you to believe it’s nice to animals and the environment. It’s not.'
		},
		{
			id: 8,
			img: 'https://amaranth.vsu.edu.ph/images/electronica.png',
			category: 'Science',
			title: 'How Republicans are weaponizing antisemitism to take down DEI',
			author: 'Fabiola Cineas',
			summary:
				'Congressional Republicans say that college diversity, equity, and inclusion programs exacerbate anti-Jewish prejudice.'
		}
	];
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

<div class="relative h-full">
	<header class="bg-[#f1f3f2]">
		<nav class="mx-auto max-w-6xl" aria-label="Top">
			<div
				class="flex w-full items-center justify-between border-b border-white bg-primary px-4 py-4 sm:px-6 md:bg-transparent lg:border-none lg:px-8"
			>
				<div class="flex items-center">
					<div class="z-10 flex-grow-0 basis-auto bg-primary md:-mb-8 md:-mt-6">
						<a href="/" class="">
							<span class="sr-only">Workflow</span>
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

	<main class="relative mx-auto mt-4 max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="relative hidden md:flex md:flex-col">
			<div class="absolute top-8 block w-full" aria-hidden="true">
				<div class="h-16 w-full border-l-4 border-r-4 border-t-4 border-primary"></div>
			</div>
			<div class="relative flex justify-center">
				<span class="bg-white p-4 text-2xl font-black uppercase italic"> Top Stories </span>
			</div>

			<div class="relative flex flex-wrap bg-white px-4">
				<div class="w-[22.5%] px-4">
					{#each top_stories.slice(1, 4) as story, index}
						<div class={index < 2 ? 'border-b border-foreground' : ''}>
							{#if story.id === 2}
								<div class="block w-full">
									<a href="/" class="relative block w-full"
										><img
											src="https://amaranth.vsu.edu.ph/images/electronica.png"
											alt=""
											class="h-full w-full"
										/></a
									>
								</div>
							{/if}

							<div class="py-4">
								<div class="block space-y-2">
									<h2>
										<a
											href="/"
											class="text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
											>{story.title}</a
										>
									</h2>
									<p class="text-xs">
										{story.summary}
									</p>
									<h4 class="text-xs italic">
										By <a href="/" class="text-primary hover:text-foreground">{story.author}</a>
									</h4>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="w-[55%] px-4">
					<div class="border-b border-foreground">
						<div class="block w-full items-center">
							<a href="/" class="relative block w-full"
								><img
									src="https://amaranth.vsu.edu.ph/images/electronica.png"
									alt=""
									class="h-full w-full"
								/></a
							>
						</div>
						<div class="py-6">
							<div class="mb-1 flex items-center justify-center">
								<p class="inline bg-primary">
									<span class="px-1 text-xs font-bold uppercase text-primary-foreground"
										>Science</span
									>
								</p>
							</div>
							<div class="block space-y-2 text-center">
								<h2>
									<a
										href="/"
										class="text-4xl font-black text-foreground hover:text-accent-foreground"
										>{top_stories[0].title}</a
									>
								</h2>
								<p>
									{top_stories[0].summary}
								</p>
								<h4 class="italic">
									By <a href="/" class="text-primary hover:text-foreground"
										>{top_stories[0].author}</a
									>
								</h4>
							</div>
						</div>
					</div>
					<div class="flex w-full items-start py-6">
						<a href="/" class="relative order-2 block w-full basis-1/3 items-center"
							><img
								src="https://amaranth.vsu.edu.ph/images/electronica.png"
								alt=""
								class="h-full w-full"
							/></a
						>
						<div class="grow-1 w-full basis-2/3 pr-6">
							<div class="block space-y-2">
								<h2>
									<a
										href="/"
										class="text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
										>{top_stories[4].title}</a
									>
								</h2>
								<p class="text-xs">
									{top_stories[4].summary}
								</p>
								<h4 class="text-xs italic">
									By <a href="/" class="text-primary hover:text-foreground"
										>{top_stories[4].author}</a
									>
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div class="w-[22.5%] px-4">
					{#each top_stories.slice(5, 8) as story, index}
						<div class={index < 2 ? 'border-b border-foreground' : ''}>
							{#if story.id === 6}
								<div class="block w-full">
									<a href="/" class="relative block w-full"
										><img
											src="https://amaranth.vsu.edu.ph/images/electronica.png"
											alt=""
											class="h-full w-full"
										/></a
									>
								</div>
							{/if}

							<div class="py-4">
								<div class="block space-y-2">
									<h2>
										<a
											href="/"
											class="text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
											>{story.title}</a
										>
									</h2>
									<p class="text-xs">
										{story.summary}
									</p>
									<h4 class="text-xs italic">
										By <a href="/" class="text-primary hover:text-foreground">{story.author}</a>
									</h4>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- <div
				class="mx-auto grid max-w-md grid-flow-dense grid-cols-1 grid-rows-[masonry] gap-8 px-8 text-sm leading-6 text-foreground sm:max-w-2xl sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4"
			>
				{#each top_stories as story}
					<div class="first:sm:col-span-2 first:xl:col-start-2">
						<style>
							/* Add col-span-2 to the 6th child */
							div > div:nth-child(6) {
								grid-column: span 2;
							}
						</style>
						<div class="block w-full items-center">
							<a href="/" class="relative block w-full"
								><img
									src="https://amaranth.vsu.edu.ph/images/electronica.png"
									alt=""
									class="h-full w-full"
								/></a
							>
						</div>
						<div class="py-4">
							<div class="mb-1 flex items-center justify-center">
								<p class="inline bg-primary">
									<span class="px-1 text-xs font-bold uppercase text-primary-foreground"
										>Science</span
									>
								</p>
							</div>
							<div class="block space-y-2 text-center">
								<h2>
									<a
										href="/"
										class="text-lg font-black text-foreground hover:text-accent-foreground"
										>{story.title}</a
									>
								</h2>
								<p class="text-xs">
									{story.summary}
								</p>
								<h4 class="text-xs italic">
									By <a href="/" class="text-primary hover:text-foreground">{story.author}</a>
								</h4>
							</div>
						</div>
					</div>
				{/each}
			</div> -->
		</div>

		{@render children()}
	</main>

	<div class="relative bg-[#f1f3f2]">
		<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-6xl lg:px-8">
			<div class="px-6 py-10 sm:py-16 lg:flex lg:items-center lg:py-20">
				<div class="lg:w-0 lg:flex-1">
					<h2 class="text-3xl font-extrabold tracking-tight text-foreground">
						Sign up for our newsletter
					</h2>
					<p class="mt-4 text-lg text-foreground">
						The latest news, articles, and resources, sent to your inbox weekly.
					</p>
				</div>
				<div class="mt-12 sm:w-full lg:ml-8 lg:mt-0 lg:flex-1">
					<form class="sm:flex">
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email-address"
							type="email"
							autocomplete="email"
							required
							class="placeholder-warm-gray-500 w-full rounded-md border-white px-5 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-medium text-foreground hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
						>
							Notify me
						</button>
					</form>
					<p class="mt-3 text-sm">
						We care about the protection of your data. Read our
						<!-- space -->
						<a href="/" class="font-medium text-foreground underline"> Privacy Policy. </a>
					</p>
				</div>
			</div>
		</div>
	</div>

	<Footer />
</div>
