<script lang="ts">
	import { smoothload } from '$lib/utils/actions';
	import { urlFor } from '$lib/utils/image';

	let { data } = $props();
</script>

<div class="container mx-auto max-w-6xl">
	<div class="flex flex-col space-y-6">
		<div>
			<h1 class="relative inline-block overflow-hidden text-4xl font-medium">
				{data.category.title}
				<div class="absolute -bottom-1 z-10 h-4 w-full bg-primary/50"></div>
			</h1>
		</div>
		<h3 class="max-w-3xl text-lg">
			{data.category.description}
		</h3>
		<!-- <div class="h-4 w-full border-t-4 border-primary"></div> -->
	</div>
</div>

{#if data.articles.length > 2}
	<div
		class="divide-y divide-gray-200 rounded-lg bg-gray-200 shadow-sm sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 lg:h-[60vh]"
	>
		<a
			href="/article/{data.articles[0].slug}"
			class="group relative overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 lg:row-span-2"
		>
			<img
				src={urlFor(data.articles[0].mainImage).url()}
				class="absolute h-full w-full object-cover group-hover:scale-105"
				style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
				alt=""
			/>
			<div
				class="absolute left-1/2 top-1/2 z-10 w-2/3 -translate-x-1/2 -translate-y-1/2 bg-background/90 px-16 py-8 text-center"
			>
				<div class="text-3xl font-extrabold tracking-tight group-hover:underline lg:text-4xl">
					{data.articles[0].title}
				</div>
				<h3 class="mt-6 italic">
					{data.articles[0].description}
				</h3>
			</div>
		</a>

		<a
			href="/article/{data.articles[1].slug}"
			class="group relative overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 lg:row-span-1"
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
				<div class="text-xl font-extrabold tracking-tight group-hover:underline lg:text-xl">
					{data.articles[1].title}
				</div>
				<h3 class="mt-2 italic">
					{data.articles[1].authors[0].name}
				</h3>
			</div>
		</a>

		<a
			href="/article/{data.articles[2].slug}"
			class="group relative overflow-hidden bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 lg:row-span-1"
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
