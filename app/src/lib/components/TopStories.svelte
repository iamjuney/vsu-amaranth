<script lang="ts">
	import type { Post } from '../../types';
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils';
	import { MessageSquareIcon } from 'lucide-svelte';

	let { posts } = $props<{ posts: Post[] }>();
</script>

{#snippet story({ post, index })}
	<div class={index < 2 ? 'border-b border-foreground' : ''}>
		{#if index === 0}
			<div class="block w-full">
				<a
					href="/post/{post.slug}"
					class="aspect-video relative block w-full overflow-hidden"
					data-sveltekit-preload-data="hover"
					><img
						src={urlFor(post.mainImage).url()}
						alt={post.imageCourtesy}
						class="h-full w-full object-cover hover:scale-105"
						style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
					/></a
				>
			</div>
		{/if}

		<div class="py-4">
			<div class="block space-y-2">
				<h2>
					<a
						href="/post/{post.slug}"
						class="font-helvetica-neue text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
						data-sveltekit-preload-data="hover">{post.title}</a
					>
				</h2>
				<h6 class="font-arial line-clamp-3 text-xs">
					{post.excerpt}
				</h6>
				<p class="flex items-center space-x-2 text-xs">
					<a href="/" class="font-bold text-primary hover:text-foreground">{post.author?.name}</a>
					<span>{formatDate(post.publishedAt)}</span><span>|</span>
					<span class="flex items-center"><MessageSquareIcon class="mr-1" size="12" /> 3</span>
				</p>
			</div>
		</div>
	</div>
{/snippet}

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<div class="relative hidden md:flex md:flex-col">
		<div class="absolute top-8 block w-full" aria-hidden="true">
			<div class="h-16 w-full border-l-4 border-r-4 border-t-4 border-primary"></div>
		</div>
		<div class="relative flex justify-center">
			<span class="font-helvetica-neue bg-white p-4 text-2xl font-black uppercase">
				Top Stories
			</span>
		</div>

		<div class="relative flex flex-wrap bg-white px-4">
			<div class="w-[22.5%] px-4">
				{#each posts.slice(1, 4) as post, index}
					{@render story({ post, index })}
				{/each}
			</div>

			<div class="w-[55%] px-4">
				<div class="border-b border-foreground">
					<div class="block w-full items-center">
						<a
							href="/post/{posts[0].slug}"
							class="aspect-video relative block w-full overflow-hidden"
							data-sveltekit-preload-data="hover"
							><img
								src={urlFor(posts[0].mainImage).url()}
								alt={posts[0].imageCourtesy}
								class="h-full w-full object-cover hover:scale-105"
								style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
							/></a
						>
					</div>
					<div class="py-6">
						<div class="mb-1 flex items-center justify-center">
							<a href="/" class="inline bg-primary">
								<span class=" px-1 text-xs font-medium uppercase text-primary-foreground"
									>{posts[0].categories[0]?.title}</span
								>
							</a>
						</div>
						<div class="block space-y-2 text-center">
							<h2>
								<a
									href="/post/{posts[0].slug}"
									class="font-helvetica-neue text-4xl font-black text-foreground hover:text-accent-foreground"
									data-sveltekit-preload-data="hover">{posts[0].title}</a
								>
							</h2>
							<h6 class="font-arial line-clamp-3">
								{posts[0].excerpt}
							</h6>
							<p class="flex items-center justify-center space-x-2 text-base font-medium italic">
								<a href="/" class=" font-black text-primary hover:text-foreground"
									>{posts[0].author?.name}</a
								>
								<span>{formatDate(posts[0].publishedAt ?? '')}</span>
							</p>
						</div>
					</div>
				</div>
				<div class="flex w-full items-start py-6">
					<a
						href="/post/{posts[4].slug}"
						class="aspect-video relative order-2 block w-full basis-1/3 items-center overflow-hidden"
						data-sveltekit-preload-data="hover"
						><img
							src={urlFor(posts[4].mainImage).url()}
							alt={posts[4].imageCourtesy}
							class="h-full w-full object-cover hover:scale-105"
							style="transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);"
						/></a
					>
					<div class="grow-1 w-full basis-2/3 pr-6">
						<div class="block space-y-2">
							<h2>
								<a
									href="/post/{posts[4].slug}"
									class="font-helvetica-neue text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
									data-sveltekit-preload-data="hover">{posts[4].title}</a
								>
							</h2>
							<h6 class="font-arial line-clamp-3 text-xs">
								{posts[4].excerpt}
							</h6>
							<p class="flex items-center space-x-2 text-xs">
								<a href="/" class="font-bold text-primary hover:text-foreground"
									>{posts[4].author?.name}</a
								>
								<span>{formatDate(posts[4].publishedAt ?? '')}</span><span>|</span>
								<span class="flex items-center"><MessageSquareIcon class="mr-1" size="12" /> 3</span
								>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="w-[22.5%] px-4">
				{#each posts.slice(5, 8) as post, index}
					{@render story({ post, index })}
				{/each}
			</div>
		</div>
	</div>
</div>
