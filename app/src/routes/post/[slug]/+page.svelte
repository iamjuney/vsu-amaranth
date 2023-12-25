<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import Image from '$lib/components/Image.svelte';
	import { FacebookIcon, TwitterIcon, MessageSquareIcon, LinkIcon } from 'lucide-svelte';

	let { data } = $props();
</script>

<div class="relative overflow-hidden bg-white py-8">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div>
				{#each data.categories as category}
					<a href="/" class="inline bg-primary p-1">
						<span class="text-sm uppercase tracking-wide text-primary-foreground"
							>{category.title}</span
						>
					</a>
				{/each}
				<h1 class="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
					{data.title}
				</h1>
				<p class="mt-2 text-lg text-gray-500">
					{data.excerpt}
				</p>
				<div class="mt-4 flex items-center space-x-2 text-sm text-gray-500">
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
						<FacebookIcon size="24" class="h-6 w-6 text-gray-500" />
					</a>
					<a href="/" class="block">
						<TwitterIcon size="24" class="h-6 w-6 text-gray-500" />
					</a>
					<a href="/" class="block">
						<LinkIcon size="24" class="h-6 w-6 text-gray-500" />
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
						<p class="mt-2 text-sm text-gray-500">
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
				<div>
					<h2 class="text-lg font-black">Most Read</h2>
					<ol class="mt-4 space-y-4">
						<li>
							<a href="/" class="block"
								><h3 class="text-base font-medium text-gray-900">Hello World</h3></a
							>
						</li>
						<li>
							<a href="/" class="block"
								><h3 class="text-base font-medium text-gray-900">Hello World</h3></a
							>
						</li>
						<li>
							<a href="/" class="block"
								><h3 class="text-base font-medium text-gray-900">Hello World</h3></a
							>
						</li>
						<li>
							<a href="/" class="block"
								><h3 class="text-base font-medium text-gray-900">Hello World</h3></a
							>
						</li>
						<li>
							<a href="/" class="block"
								><h3 class="text-base font-medium text-gray-900">Hello World</h3></a
							>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</div>
