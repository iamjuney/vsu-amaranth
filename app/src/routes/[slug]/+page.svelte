<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils/index.js';
	import MessageSquare from '$lib/svg/MessageSquare.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

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
		class="hidden grid-flow-row grid-cols-1 divide-y divide-gray-200 rounded-lg bg-gray-200 shadow-sm md:grid md:h-[60vh] md:grid-flow-col md:grid-cols-2 md:gap-px md:divide-y-0"
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
			class="group relative overflow-hidden bg-white text-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 md:row-span-1"
		>
			<img
				src={urlFor(data.articles[1].mainImage).url()}
				class="absolute h-full w-full object-cover group-hover:scale-105"
				style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
				alt=""
			/>
			<div class="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div>
			<div class="absolute bottom-0 left-1/2 z-10 max-w-md -translate-x-1/2 py-8 text-center">
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
			class="group relative overflow-hidden bg-white text-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 md:row-span-1"
		>
			<img
				src={urlFor(data.articles[2].mainImage).url()}
				class="absolute h-full w-full object-cover group-hover:scale-105"
				style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
				alt=""
			/>
			<div class="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div>
			<div
				class="absolute bottom-0 left-1/2 z-10 max-w-md -translate-x-1/2 py-8 text-center"
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

	<div class="container hidden max-w-6xl md:flex">
		<div class="mt-2 max-w-3xl divide-y divide-foreground md:mt-6">
			{#each data.articles.slice(3) as article}
				<ArticleCard {article} />
			{/each}
		</div>
	</div>
{/if}

<div class="flex flex-col md:hidden">
	<a
		href="/article/{data.articles[0].slug}"
		class="group relative h-[40dvh] overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
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

	<div class="container max-w-3xl">
		<div class="mt-2 divide-y divide-foreground md:mt-6">
			{#each data.articles.slice(1) as article}
				<ArticleCard {article} />
			{/each}
		</div>
	</div>
</div>
