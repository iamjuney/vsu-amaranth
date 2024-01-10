<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils/index.js';
	import MessageSquare from '$lib/svg/MessageSquare.svelte';

	let { data } = $props();
</script>

<div class="container mx-auto max-w-6xl">
	<div class="flex flex-col space-y-6">
		<div>
			<div class="h-1 w-10 bg-primary/50"></div>
			<h1 class="mt-2 inline-block text-2xl font-medium">
				{data.category.title}
			</h1>
		</div>
		<h3 class="max-w-3xl text-lg">
			{data.category.description}
		</h3>
	</div>
</div>

{#if data.articles.length > 2}
	<div
		class="hidden h-[100vh] grid-flow-row grid-cols-1 divide-y divide-gray-200 rounded-lg bg-gray-200 shadow-sm md:grid md:h-[60vh] md:grid-flow-col md:grid-cols-2 md:gap-px md:divide-y-0"
	>
		<a
			href="/article/{data.articles[0].slug}"
			class="group relative overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 md:row-span-2"
		>
			<img
				src={urlFor(data.articles[0].mainImage).url()}
				class="absolute h-full w-full object-cover group-hover:scale-105"
				style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
				alt=""
			/>
			<div
				class="absolute left-1/2 top-1/2 z-10 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-background/90 px-8 py-4 text-center md:w-2/3 md:px-16 md:py-8"
			>
				<div class="text-xl font-extrabold tracking-tight group-hover:underline md:text-4xl">
					{data.articles[0].title}
				</div>
				<h3 class="mt-6 line-clamp-3 italic">
					{data.articles[0].description}
				</h3>
			</div>
		</a>

		<a
			href="/article/{data.articles[1].slug}"
			class="group relative overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 md:row-span-1"
		>
			<img
				src={urlFor(data.articles[1].mainImage).url()}
				class="absolute h-full w-full object-cover group-hover:scale-105"
				style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
				alt=""
			/>
			<div class="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div>
			<div
				class="absolute bottom-0 left-1/2 z-10 max-w-md -translate-x-1/2 py-8 text-center text-darker-primary-foreground"
			>
				<div class="text-xl font-extrabold tracking-tight group-hover:underline md:text-xl">
					{data.articles[1].title}
				</div>
				<h3 class="mt-2 italic">
					{data.articles[1].authors[0].name}
				</h3>
			</div>
		</a>

		<a
			href="/article/{data.articles[2].slug}"
			class="group relative overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 md:row-span-1"
		>
			<img
				src={urlFor(data.articles[2].mainImage).url()}
				class="absolute h-full w-full object-cover group-hover:scale-105"
				style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
				alt=""
			/>
			<div class="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div>
			<div
				class="absolute bottom-0 left-1/2 z-10 max-w-md -translate-x-1/2 py-8 text-center text-darker-primary-foreground"
				role="button"
			>
				<div class="text-xl font-extrabold tracking-tight group-hover:underline lg:text-xl">
					{data.articles[2].title}
				</div>
				<h3 class="mt-2 italic">
					{data.articles[2].authors[0].name}
				</h3>
			</div>
		</a>
	</div>
{/if}

<div class="flex flex-col md:hidden">
	<a
		href="/article/{data.articles[0].slug}"
		class="group relative h-[33vh] overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
	>
		<img
			src={urlFor(data.articles[0].mainImage).url()}
			class="absolute h-full w-full object-cover group-hover:scale-105"
			style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
			alt=""
		/>
		<div
			class="absolute left-1/2 top-1/2 z-10 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-background/90 px-8 py-4 text-center md:w-2/3 md:px-16 md:py-8"
		>
			<div class="text-xl font-extrabold tracking-tight group-hover:underline md:text-4xl">
				{data.articles[0].title}
			</div>
			<h3 class="mt-6 line-clamp-3 italic">
				{data.articles[0].description}
			</h3>
		</div>
	</a>

	<div class="container max-w-6xl">
		<div class="mt-2 divide-y divide-foreground md:mt-6">
			{#each data.articles.slice(1) as article}
				<article class="flex w-full items-start py-4">
					<a
						href="/article/{article.slug}"
						class="relative block aspect-video w-full basis-1/3 items-center overflow-hidden"
						data-sveltekit-preload-data
					>
						<img
							src={urlFor(article.mainImage).url()}
							alt=""
							class="h-full w-full object-cover hover:scale-105"
							style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
						/>
					</a>
					<div class="w-full grow basis-2/3 pl-4">
						<div class="space-y-1 md:space-y-2">
							<div class="flex items-center">
								<div class="leading-140 tracking-15 relative z-10 inline-block text-xs uppercase">
									<div class="inline-block font-bold text-primary">
										{#each article.authors as author, index}
											{#if index > 0}
												<span class="px-1">,</span>
											{/if}
											<a href="/author/{author.slug}" class="hover:text-darker-primary">
												{author.name}</a
											>
										{/each}
									</div>
									<div class="inline-block">
										<time datetime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
										<span
											><span class="mx-1">|</span>
											<a class="group" href="/">
												<MessageSquare />
												<span class="decoration-primary group-hover:underline">26</span></a
											></span
										>
									</div>
								</div>
							</div>
							<h2>
								<a
									href="/article/{article.slug}"
									class=" text-lg font-bold leading-tight text-foreground hover:underline"
									data-sveltekit-preload-data>{article.title}</a
								>
							</h2>
							<h6 class="line-clamp-2 font-arial text-xs">
								{article.description}
							</h6>
							<div>
								<a
									class="text-sm font-medium text-primary hover:text-darker-primary"
									href="/article/{article.slug}"
									data-sveltekit-preload-data>Read More...</a
								>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</div>
