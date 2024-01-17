<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import Image from '$lib/components/PortableTextImage.svelte';
	import { MessageSquare } from '$lib/svg';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import { PortableText } from '@portabletext/svelte';
	import { FacebookIcon, ShareIcon, TwitterIcon } from 'lucide-svelte';
	let { data } = $props();

	let article = $derived(data.article);
	let most_popular = $derived(data.most_popular);
</script>

<article class="container">
	<div class="flex flex-col items-center space-y-4 text-center">
		<div class="h-1 w-10 bg-primary/50"></div>
		<div>
			<a href="/" class="inline">
				<span class="text-sm uppercase tracking-widest text-foreground"
					>{article.category.title}</span
				>
			</a>
			{#if article.subcategory}
				<a href="/" class="inline">
					<span class="text-sm uppercase tracking-widest text-foreground"
						>, {article.subcategory.title}</span
					>
				</a>
			{/if}
		</div>
		<div class="max-w-3xl">
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
				{article.title}
			</h1>
			<p class="mt-2 text-lg text-foreground">
				{article.description}
			</p>
		</div>
		<div class="flex items-center space-x-2 text-xs text-foreground md:text-sm">
			<span>By</span>
			{#each article.authors as author, index}
				{#if index > 0}
					<span class="text-primary">and</span>
				{/if}
				<a href="/" class="text-primary hover:text-foreground">{author.name}</a>
			{/each}
			<span>|</span>
			<time datetime={article.publishedAt}>{formatDate(article.publishedAt, true, false)}</time>
			<span>|</span>
			<MessageSquare />
			<span class="flex items-center underline"> 3 comments</span>
		</div>
	</div>

	<div class="mt-12 flex flex-col md:flex-row md:gap-16">
		<div class="grow space-y-6">
			<div class="">
				{#if article.mainImage}
					<img src={urlFor(article.mainImage).url()} alt="" class="h-auto w-full" />
				{/if}
				<p class="mt-2 text-sm text-foreground">
					{article.mainImage.source}
				</p>
			</div>
			<hr class="border-t border-foreground" />

			<div
				class="prose prose-lg prose-indigo w-full overflow-x-hidden text-foreground prose-strong:text-foreground"
			>
				<PortableText
					value={article.body}
					components={{
						types: {
							image: Image
						}
					}}
				/>
			</div>
		</div>

		<div class="max-w-sm md:flex-none">
			<div class="sticky top-8">
				<div
					class="flex flex-col items-center border-2 border-card p-6 text-card-foreground shadow-sm"
					data-v0-t="card"
				>
					<h3 class="text-sm uppercase tracking-widest text-foreground">Share this on</h3>
					<div class="flex space-x-4 py-6">
						<a href="/" class="block rounded-full border-2 border-primary p-4">
							<FacebookIcon size="16" class=" text-foreground" />
						</a>
						<a href="/" class="block rounded-full border-2 border-primary p-4">
							<TwitterIcon size="16" class=" text-foreground" />
						</a>
						<a href="/" class="block rounded-full border-2 border-primary p-4">
							<ShareIcon size="16" class=" text-foreground" />
						</a>
					</div>
				</div>

				<div class="mt-12">
					<div class="h-1 w-10 bg-primary/50"></div>

					<h1 class="mt-2 inline-block text-lg font-medium md:text-2xl">Related Stories</h1>
				</div>

				<div class="mt-2 divide-y divide-foreground md:mt-6">
					{#each most_popular as article}
						<ArticleCard {article} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</article>
