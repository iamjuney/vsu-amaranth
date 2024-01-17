<script lang="ts">
	import MessageSquare from '$lib/svg/MessageSquare.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Article } from '$lib/utils/types';

	let { article } = $props<{ article: Article }>();
</script>

<article class="flex w-full flex-col items-start py-4 md:flex-row">
	<a
		href="/article/{article.slug}"
		class="relative mb-4 block aspect-video w-full items-center overflow-hidden md:basis-1/3"
		data-sveltekit-preload-data
	>
		<img
			src={urlFor(article.mainImage).url()}
			alt=""
			class="h-full w-full object-cover hover:scale-105"
			style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
		/>
	</a>
	<div class="w-full grow md:basis-2/3 md:pl-4">
		<div class="space-y-1 md:space-y-2">
			<div class="flex items-center">
				<div class="leading-140 tracking-15 relative z-10 inline-block text-xs uppercase">
					<div class="inline-block font-bold text-primary">
						{#each article.authors as author, index}
							{#if index > 0}
								<span class="px-1">,</span>
							{/if}
							<a href="/author/{author.slug}" class="hover:text-darker-primary"> {author.name}</a>
						{/each}
					</div>
					<div class="inline-block">
						<time datetime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
						<span
							><span class="mx-1">|</span>
							<a class="group" href="/">
								<MessageSquare />
								<span class="decoration-primary group-hover:underline">26</span></a
							>
						</span>
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
			<h3 class="line-clamp-2 font-arial text-xs">
				{article.description}
			</h3>
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
