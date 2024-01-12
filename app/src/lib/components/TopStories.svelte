<script lang="ts">
	import MessageSquare from '$lib/svg/MessageSquare.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Article } from '$lib/utils/types';

	let { articles } = $props<{ articles: Article[] }>();
</script>

{#snippet story({ article, index })}
	<div class={index < 2 ? 'border-b border-foreground' : ''}>
		{#if index === 0}
			<div class="block w-full">
				<a
					href="/article/{article.slug}"
					class="relative block aspect-video w-full overflow-hidden bg-center"
					data-sveltekit-preload-data
					><img
						src={urlFor(article.mainImage).url()}
						alt=""
						class="h-full w-full object-cover hover:scale-105"
						style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
					/></a
				>
			</div>
		{/if}

		<div class="py-4">
			<div class="flex flex-col space-y-2">
				<h2>
					<a
						href="/article/{article.slug}"
						class=" text-lg font-bold leading-tight text-foreground hover:underline"
						data-sveltekit-preload-data>{article.title}</a
					>
				</h2>
				<h4 class="line-clamp-2 font-arial text-sm">
					{article.description}
				</h4>
				<div class="leading-140 tracking-15 relative z-10 inline-block text-xs uppercase">
					{#each article.authors as author, index}
						<div class="inline-block">
							<a
								href="/author/{author.slug}"
								class="font-bold text-primary hover:text-darker-primary"
							>
								{#if index > 0}
									<span class="text-primary">and</span>
								{/if}
								{author.name}</a
							>
						</div>
					{/each}
					<div class="inline-block">
						<time datetime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
						<span
							><span class="mx-1">|</span>
							<a class="group" href="/">
								<MessageSquare />
								<span class=" group-hover:underline">26</span></a
							></span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/snippet}

<div class="container mx-auto max-w-6xl">
	<div class="relative hidden md:flex md:flex-col">
		<div class="relative flex flex-wrap">
			<div class="w-[22.5%] pr-4">
				{#each articles.slice(2, 5) as article, index}
					{@render story({ article, index })}
				{/each}
			</div>

			<div class="w-[55%]">
				<div class="border-b border-foreground">
					<div class="block w-full items-center">
						<a
							href="/article/{articles[0].slug}"
							class="relative block aspect-video w-full overflow-hidden"
							data-sveltekit-preload-data
							><img
								src={urlFor(articles[0].mainImage).url()}
								alt=""
								class="h-full w-full object-cover hover:scale-105"
								style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
							/></a
						>
					</div>
					<div class="py-6">
						<div class="mb-1 flex items-center justify-center">
							<a href="/{articles[0].category.slug}" class="inline bg-primary px-2">
								<span class="text-xs font-medium uppercase text-primary-foreground"
									>{articles[0].category.title}</span
								>
							</a>
						</div>
						<div class="block space-y-2 text-center">
							<h2>
								<a
									href="/article/{articles[0].slug}"
									class="text-4xl font-bold text-foreground hover:underline"
									data-sveltekit-preload-data>{articles[0].title}</a
								>
							</h2>
							<h4 class="line-clamp-3 font-arial">
								{articles[0].description}
							</h4>
							<p class="flex items-center justify-center space-x-2 text-base uppercase italic">
								{#each articles[0].authors as author, index}
									{#if index > 0}
										<span class="text-primary">and</span>
									{/if}
									<a
										href="/author/{author.slug}"
										class="font-bold text-primary hover:text-darker-primary">{author.name}</a
									>
								{/each}
								<span>{formatDate(articles[0].publishedAt)}</span>
							</p>
						</div>
					</div>
				</div>
				<div class="flex w-full items-start py-6">
					<a
						href="/article/{articles[1].slug}"
						class="relative order-2 block aspect-video w-full basis-1/3 items-center overflow-hidden"
						data-sveltekit-preload-data
						><img
							src={urlFor(articles[1].mainImage).url()}
							alt=""
							class="h-full w-full object-cover hover:scale-105"
							style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
						/></a
					>
					<div class="grow-1 w-full basis-2/3 pr-6">
						<div class="block space-y-2">
							<h2>
								<a
									href="/article/{articles[1].slug}"
									class=" text-lg font-bold leading-tight text-foreground hover:underline"
									data-sveltekit-preload-data>{articles[1].title}</a
								>
							</h2>
							<h4 class="line-clamp-2 font-arial text-sm">
								{articles[1].description}
							</h4>
							<div class="leading-140 tracking-15 relative z-10 inline-block text-xs uppercase">
								{#each articles[1].authors as author, index}
									<div class="inline-block">
										{#if index > 0}
											<span class="text-primary">and</span>
										{/if}
										<a
											href="/author/{author.slug}"
											class="font-bold text-primary hover:text-darker-primary">{author.name}</a
										>
									</div>
								{/each}
								<div class="inline-block">
									<time datetime={articles[1].publishedAt}
										>{formatDate(articles[1].publishedAt)}</time
									>
									<span
										><span class="mx-1">|</span>
										<a class="group" href="/">
											<MessageSquare />
											<span class=" group-hover:underline">26</span></a
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="w-[22.5%] pl-4">
				{#each articles.slice(5, 8) as article, index}
					{@render story({ article, index })}
				{/each}
			</div>
		</div>
	</div>

	<div class="flex flex-col md:hidden">
		<div class="border-b border-foreground">
			<div class="block w-full items-center">
				<a
					href="/article/{articles[0].slug}"
					class="relative block aspect-video w-full overflow-hidden"
					data-sveltekit-preload-data
					><img
						src={urlFor(articles[0].mainImage).url()}
						alt=""
						class="h-full w-full object-cover hover:scale-105"
						style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
					/></a
				>
			</div>
			<div class="py-6">
				<div class="mb-1 flex">
					<a href="/{articles[0].category.slug}" class="inline bg-primary px-2">
						<span class="text-xs font-medium uppercase text-primary-foreground"
							>{articles[0].category.title}</span
						>
					</a>
				</div>
				<div class="block space-y-2">
					<h2>
						<a
							href="/article/{articles[0].slug}"
							class="text-4xl font-bold text-foreground hover:underline"
							data-sveltekit-preload-data>{articles[0].title}</a
						>
					</h2>
					<h4 class="line-clamp-3 font-arial">
						{articles[0].description}
					</h4>
					<p class="flex items-center justify-start space-x-2 text-base uppercase italic">
						{#each articles[0].authors as author, index}
							{#if index > 0}
								<span class="text-primary">and</span>
							{/if}
							<a
								href="/author/{author.slug}"
								class="font-bold text-primary hover:text-darker-primary">{author.name}</a
							>
						{/each}
						<span>{formatDate(articles[0].publishedAt)}</span>
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col">
			<div class="mt-6">
				<h1 class="relative inline-block overflow-hidden text-xl font-medium md:text-4xl">
					Top Stories
					<div class="absolute -bottom-1 z-10 h-4 w-full bg-primary/50"></div>
				</h1>
			</div>

			<div class="mt-2 divide-y divide-foreground md:mt-6">
				{#each articles.slice(1, 8) as article}
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
													<span class=" group-hover:underline">26</span></a
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
		</div>
	</div>
</div>
