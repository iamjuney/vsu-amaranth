<script lang="ts">
	import MessageSquare from './../lib/svg/MessageSquare.svelte';
	import NewsLetter from '$lib/components/NewsLetter.svelte';
	import TopStories from '$lib/components/TopStories.svelte';
	import { Button } from '$lib/components/ui/button';
	import { urlFor } from '$lib/utils/image.js';
	import { formatDate } from '$lib/utils/index.js';
	import { MessageSquareIcon, Share2Icon } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';

	let { data } = $props();

	let top_articles = $derived(data.top_articles);
	let more_articles = $derived(data.more_articles);
	let announcements = $derived(data.bulletin);
</script>

<TopStories articles={top_articles} />

<div class="container mx-auto max-w-6xl">
	<hr class="border-t" />

	<div class="flex flex-col md:flex-row md:gap-16">
		<div class="grow">
			<div class="mt-6">
				<h1 class="relative inline-block overflow-hidden text-xl font-medium md:text-4xl">
					Latest Stories
					<div class="absolute -bottom-1 z-10 h-4 w-full bg-primary/50"></div>
				</h1>
			</div>

			<div class="mt-2 divide-y divide-foreground md:mt-6">
				{#each more_articles as article}
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

			<div class="mt-6">
				<Button class="w-full">More Stories</Button>
			</div>
		</div>

		<div class="mt-6 max-w-md md:flex-none">
			<div class="md:sticky md:top-8">
				<div class="space-y-3 border bg-card p-6 text-foreground shadow-sm">
					<div class="flex items-center justify-between">
						<h4 class="text-lg text-primary">Recent Announcements</h4>
						<a class="text-foreground hover:underline" href="/">See all</a>
					</div>
					<div class="border-l-2 border-primary pl-2">
						<a
							href="/article/{announcements[0].slug}"
							class=" mt-3 text-4xl font-bold tracking-tight decoration-primary hover:underline"
							>{announcements[0].title}</a
						>
						<p class="mt-2 text-foreground">
							{announcements[0].description}
						</p>
					</div>
					<div class="mb-2 flex items-center">
						<a href="/" class="relative h-10 w-10 overflow-hidden rounded-full bg-center">
							<img
								class="h-full w-full object-cover hover:scale-105"
								src={urlFor(announcements[0].authors[0].image).url()}
								alt="Emilia David"
							/>
						</a>
						<div class="ml-2">
							<p class="text-sm font-semibold">{announcements[0].authors[0].name}</p>
							<p class="text-xs">Dec 24</p>
						</div>
						<Share2Icon size="24" class="ml-auto text-foreground" />
					</div>
					<img
						src={urlFor(announcements[0].mainImage).url()}
						alt="Bard"
						class="my-4"
						width="300"
						height="200"
						style="aspect-ratio: 300 / 200; object-fit: cover;"
					/>
					<div class="p-6">
						<ul class="space-y-8">
							<li class="flex flex-row">
								<div
									class="flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-foreground"
								></div>
								<div class="-mt-2 ml-4 space-y-2">
									<a
										class="block text-lg font-semibold leading-tight decoration-primary hover:underline"
										href="/post/hello-world">New Course: AI for Business</a
									>
									<p class="flex items-center space-x-2 text-xs">
										<a href="/" class="font-bold text-primary hover:text-foreground">Super user</a>
										<span>Dec 24</span><span>|</span>
										<span class="flex items-center"
											><MessageSquareIcon class="mr-1" size="12" /> 3</span
										>
									</p>
								</div>
							</li>
							<li class="flex flex-row">
								<div
									class="flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-foreground"
								></div>
								<div class="-mt-2 ml-4 space-y-2">
									<a
										class="block text-lg font-semibold leading-tight decoration-primary hover:underline"
										href="/post/hello-world">Library Hours Extended</a
									>
									<p class="flex items-center space-x-2 text-xs">
										<a href="/" class="font-bold text-primary hover:text-foreground">Super user</a>
										<span>Dec 24</span><span>|</span>
										<span class="flex items-center"
											><MessageSquareIcon class="mr-1" size="12" /> 3</span
										>
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="mx-auto mt-6 max-w-md border bg-card text-card-foreground shadow-sm"
					data-v0-t="card"
				>
					<div class="flex flex-col space-y-1 p-6">
						<h3 class="text-2xl font-bold tracking-tight">Newsletter</h3>
						<p class="text-sm text-muted-foreground">
							The latest news, articles, and resources, sent to your inbox weekly.
						</p>
					</div>
					<div class="p-6">
						<div class="space-y-4">
							<div class="space-y-2">
								<label
									class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									for="email">Email</label
								><Input
									class="w-full"
									id="email"
									placeholder="m@example.com"
									required
									type="email"
								/>
							</div>
							<Button class="w-full" type="submit">Subscribe</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
