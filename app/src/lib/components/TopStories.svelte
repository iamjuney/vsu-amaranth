<script lang="ts">
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

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
							<a href="/" class="inline-block">
								<span
									class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800"
								>
									Science
								</span>
							</a>
							<!-- <p class="inline bg-primary">
							<span class="px-1 text-xs font-bold uppercase text-primary-foreground">Science</span>
						</p> -->
						</div>
						<div class="block space-y-2 text-center">
							<h2>
								<a href="/" class="text-4xl font-black text-foreground hover:text-accent-foreground"
									>{top_stories[0].title}</a
								>
							</h2>
							<p>
								{top_stories[0].summary}
							</p>
							<h4 class="italic">
								By <a href="/" class="text-primary hover:text-foreground">{top_stories[0].author}</a
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
								By <a href="/" class="text-primary hover:text-foreground">{top_stories[4].author}</a
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
</div>
