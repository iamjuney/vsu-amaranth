<script lang="ts">
	import { page } from '$app/stores';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { client } from '$lib/utils/sanity';
	import groq from 'groq';

	let searchQuery = $derived($page.url.searchParams.toString().split('q=')[1]);
	let timeout = $state(false);
	let results = $state([]);

	async function search(query: string) {
		timeout = false;

		let response = await client.fetch(
			groq`*[_type == "article" && (title match $query || description match $query)]{
                ...,
                'slug': slug.current,
                'authors': authors[]->{name, 'slug': slug.current},
                'category': category->{title, 'slug': slug.current},
                'subcategory': subcategory->{title, 'slug': slug.current},
            }`,
			{ query: query }
		);

		timeout = true;
		return response;
	}

	$effect(() => {
		search(searchQuery).then((response) => {
			results = response;
		});
	});
</script>

<div class="container max-w-6xl space-y-6">
	<div class="flex flex-col items-center">
		<div class="h-1 w-10 bg-primary/50"></div>

		<h1 class="mt-2 inline-block text-lg font-medium md:text-2xl">Search Results</h1>
	</div>
	{#if !searchQuery}
		<h1>No search query</h1>
		<p>Try searching from the search bar above.</p>
	{:else if !timeout && !results.length}
		<h1>Searching...</h1>
		<p>Searching for articles matching <strong>{searchQuery}</strong></p>
		<svg
			width="48"
			class="animate-spin"
			height="48"
			viewBox="0 0 24	 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="spinner_7mtw"
				d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
			/>
		</svg>
	{:else if timeout && results.length == 0}
		<h1>Sorry, No Results found</h1>
		<p>Try searching for something more specific.</p>
	{:else if results.length > 0}
		<div class="flex flex-col md:flex-row md:gap-16">
			<div class="max-w-md md:flex-none">
				<div class="md:sticky md:top-8">
					<div class="mx-auto mt-6 max-w-md text-card-foreground" data-v0-t="card">
						<div class="flex flex-col space-y-1">
							<h3 class="text-2xl font-bold tracking-tight">Filters</h3>
							<p class="text-sm text-muted-foreground">
								The latest news, articles, and resources, sent to your inbox weekly.
							</p>
						</div>
						<div class="p-6"></div>
					</div>
				</div>
			</div>
			<div class="grow">
				<div class="mt-2 divide-y divide-foreground md:mt-6">
					{#each results as article}
						<ArticleCard {article} />
					{/each}
				</div>

				<div class="mt-6">
					<Button class="w-full">More Stories</Button>
				</div>
			</div>
		</div>
	{/if}
</div>
