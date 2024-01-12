<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import MessageSquare from '$lib/svg/MessageSquare.svelte';
	import { urlFor } from '$lib/utils/image.js';
	import { formatDate } from '$lib/utils/index.js';
	import type { Article } from '$lib/utils/types.js';

	let { data } = $props();

	let articles = $derived(data.author.articles) as Article[];
</script>

<div class="container">
	<div class="flex flex-col space-y-6">
		<h4 class="text-lg uppercase text-primary">All Stories by:</h4>
		<div>
			<h1 class="relative inline-block overflow-hidden text-4xl font-medium">
				{data.author.name}
				<div class="absolute -bottom-1 z-10 h-4 w-full bg-primary/50"></div>
			</h1>
		</div>
		<h3 class="max-w-3xl text-lg">
			{data.author.bio}
		</h3>
	</div>

	<div class="max-w-3xl">
		<div class="mt-2 divide-y divide-foreground md:mt-6">
			{#each articles as article}
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
									class=" text-lg font-bold leading-tight text-foreground decoration-primary hover:underline"
									data-sveltekit-preload-data>{article.title}</a
								>
							</h2>
							<h4 class="line-clamp-2 font-arial text-xs">
								{article.description}
							</h4>
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

		<div class="mt-6">
			<Button class="w-full">Page 1 of 1</Button>
		</div>
	</div>
</div>
