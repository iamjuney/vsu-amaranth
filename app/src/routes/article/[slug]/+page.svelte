<script lang="ts">
	import Image from '$lib/components/PortableTextImage.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import { PortableText } from '@portabletext/svelte';
	import { FacebookIcon, MessageSquareIcon, ShareIcon, TwitterIcon } from 'lucide-svelte';
	let { data } = $props();

	let article = $derived(data.article);
	let most_popular = $derived(data.most_popular);
</script>

<article class="container mx-auto max-w-6xl">
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
		<div class="flex items-center space-x-2 text-sm text-foreground">
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
			<MessageSquareIcon class="mr-1" size="16" />
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

			<div class="prose prose-lg prose-indigo w-full overflow-x-hidden text-foreground">
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
					class="flex flex-col items-center border-2 border-muted p-6 text-card-foreground"
					data-v0-t="card"
				>
					<h3 class="text-sm uppercase tracking-widest text-foreground">Share this on</h3>
					<div class="flex space-x-4 py-6">
						<a href="/" class="block rounded-full border border-primary p-4">
							<FacebookIcon size="16" class=" text-foreground" />
						</a>
						<a href="/" class="block rounded-full border border-primary p-4">
							<TwitterIcon size="16" class=" text-foreground" />
						</a>
						<a href="/" class="block rounded-full border border-primary p-4">
							<ShareIcon size="16" class=" text-foreground" />
						</a>
					</div>
				</div>

				<div class="mt-6">
					<h2 class="ml-8 text-lg text-primary">Related Stories</h2>
					<ol class="mt-6 space-y-4">
						{#each most_popular as article, i}
							<li class="flex flex-row justify-center">
								<div
									class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] text-foreground"
								>
									{i + 1}
								</div>
								<div class="ml-3 flex w-full items-start border-b border-gray-300 pb-4">
									<a
										href="/article/{article.slug}"
										class="relative order-2 block aspect-video w-full basis-1/3 items-center overflow-hidden"
										data-sveltekit-preload-data
										><img
											src={urlFor(article.mainImage).url()}
											alt="Unsplash"
											class="h-full w-full object-cover hover:scale-105"
											style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
										/></a
									>
									<div class="grow-1 w-full basis-2/3 pr-6">
										<div class="block space-y-2">
											<h2>
												<a
													href="/article/{article.slug}"
													class=" text-lg font-bold leading-tight text-foreground hover:underline"
													data-sveltekit-preload-data>{article.title}</a
												>
											</h2>
											<div
												class="leading-140 tracking-15 relative z-10 inline-block text-xs uppercase"
											>
												{#each article.authors as author, index}
													<div class="inline-block">
														{#if index > 0}
															<span class="text-primary">and</span>
														{/if}
														<a
															href="/author/{author.slug}"
															class="font-bold text-primary hover:text-darker-primary"
															>{author.name}</a
														>
													</div>
												{/each}
												<div class="inline-block">
													<time datetime={article.publishedAt}
														>{formatDate(article.publishedAt)}</time
													>
													<span
														><span class="mx-1">|</span>
														<a class="group" href="/">
															<MessageSquareIcon class="inline" size="12" />
															<span class="group-hover:underline">26</span></a
														></span
													>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</article>
