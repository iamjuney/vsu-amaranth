<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import Image from '$lib/components/Image.svelte';
	import { FacebookIcon, TwitterIcon, MessageSquareIcon, LinkIcon } from 'lucide-svelte';

	let { data } = $props();
</script>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<div class="relative py-3">
		<div>
			{#each data.categories as category}
				<a href="/" class="inline bg-gray-200 p-1 first:bg-primary">
					<span class="text-sm uppercase tracking-wide text-primary-foreground"
						>{category.title}</span
					>
				</a>
			{/each}
			<h1 class="font-helvetica-neue mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
				{data.title}
			</h1>
			<p class="mt-2 text-lg text-foreground">
				{data.excerpt}
			</p>
			<div class="mt-4 flex items-center space-x-2 text-sm text-foreground">
				<span>By</span>
				<a href="/" class="text-primary hover:text-foreground">{data.author?.name}</a>
				<span>|</span>
				<time datetime="2023-12-16T07:00:00Z">{formatDate(data.publishedAt, true, true)}</time>
				<span>|</span>
				<MessageSquareIcon class="mr-1" size="16" />
				<span class="flex items-center underline"> 3 comments</span>
			</div>
			<div class="mt-4 flex space-x-4">
				<a href="/" class="block">
					<FacebookIcon size="24" class="h-6 w-6 text-foreground" />
				</a>
				<a href="/" class="block">
					<TwitterIcon size="24" class="h-6 w-6 text-foreground" />
				</a>
				<a href="/" class="block">
					<LinkIcon size="24" class="h-6 w-6 text-foreground" />
				</a>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-8">
			<div class="col-span-2">
				<div class="mt-6">
					{#if data.mainImage}
						<img
							src={urlFor(data.mainImage).url()}
							alt={data.imageCourtesy}
							class="h-auto w-full"
						/>
					{/if}
					<p class="mt-2 text-sm text-foreground">
						{data.imageCourtesy}
					</p>
				</div>
				<div class="prose prose-lg prose-indigo mt-6 max-w-full text-foreground">
					<PortableText
						value={data.body}
						components={{
							types: {
								image: Image
							}
						}}
					/>
				</div>
			</div>
			<div class="col-span-1 lg:block">
				<div class="sticky top-4">
					<h2 class="ml-11 text-primary">Most Read</h2>
					<ol class="mt-6 space-y-4">
						{#each { length: 5 } as _, i}
							<li class="flex flex-row justify-center">
								<div
									class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] text-foreground"
								>
									{i + 1}
								</div>
								<div class="ml-6 flex w-full items-start border-b pb-4">
									<a
										href="/post/hello-world"
										class="relative order-2 block aspect-video w-full basis-1/3 items-center overflow-hidden"
										data-sveltekit-preload-data="hover"
										><img
											src="https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											alt="Unsplash"
											class="h-full w-full object-cover hover:scale-105"
											style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
										/></a
									>
									<div class="grow-1 w-full basis-2/3">
										<div class="block space-y-2">
											<h2>
												<a
													href="/post/hello-world"
													class="font-helvetica-neue text-xl font-black leading-tight text-foreground hover:text-accent-foreground"
													data-sveltekit-preload-data="hover">Hello World</a
												>
											</h2>
											<p class="flex items-center space-x-2 text-xs">
												<a href="/" class="text-primary hover:text-foreground">Super User</a>
												<span>Dec 24</span><span>|</span>
												<span class="flex items-center"
													><MessageSquareIcon class="mr-1" size="12" /> 3</span
												>
											</p>
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
</div>
