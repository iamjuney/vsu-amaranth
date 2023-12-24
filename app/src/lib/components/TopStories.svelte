<script lang="ts">
	import type { Post, Author, Category } from '../../types';
	import { urlFor } from '$lib/utils/image';

	let { posts } = $props<{ posts: Post[] }>();
</script>

{#snippet story({ post, index })}
	<div class={index < 2 ? 'border-b border-foreground' : ''}>
		{#if index === 0}
			<div class="block w-full">
				<a href="/" class="relative block aspect-video w-full"
					><img
						src={post.mainImage && urlFor(post.mainImage).url()}
						alt=""
						class="h-full w-full object-cover"
					/></a
				>
			</div>
		{/if}

		<div class="py-4">
			<div class="block space-y-2">
				<h2>
					<a
						href="/"
						class="text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
						>{post.title}</a
					>
				</h2>
				<p class="line-clamp-4 text-xs">
					{post.excerpt}
				</p>
				<h4 class="text-xs italic">
					By <a href="/" class="text-primary hover:text-foreground">{post.author?.name}</a>
				</h4>
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
			<span class="bg-white p-4 font-dm_serif text-2xl uppercase italic"> Top Stories </span>
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
						<a href="/" class="relative block aspect-video w-full"
							><img
								src={posts[0].mainImage && urlFor(posts[0].mainImage).url()}
								alt=""
								class="h-full w-full object-cover"
							/></a
						>
					</div>
					<div class="py-6">
						<div class="mb-1 flex items-center justify-center">
							<a href="/" class="inline bg-primary">
								<span class="px-1 text-xs font-medium uppercase text-primary-foreground"
									>{posts[0].categories && posts[0].categories[0]?.title}</span
								>
							</a>
						</div>
						<div class="block space-y-2 text-center">
							<h2>
								<a href="/" class="text-4xl font-black text-foreground hover:text-accent-foreground"
									>{posts[0].title}</a
								>
							</h2>
							<p class="line-clamp-3">
								{posts[0].excerpt}
							</p>
							<h4 class="italic">
								By <a href="/" class="text-primary hover:text-foreground">{posts[0].author?.name}</a
								>
							</h4>
						</div>
					</div>
				</div>
				<div class="flex w-full items-start py-6">
					<a href="/" class="relative order-2 block aspect-video w-full basis-1/3 items-center"
						><img
							src={posts[4].mainImage && urlFor(posts[4].mainImage).url()}
							alt=""
							class="h-full w-full object-cover"
						/></a
					>
					<div class="grow-1 w-full basis-2/3 pr-6">
						<div class="block space-y-2">
							<h2>
								<a
									href="/"
									class="text-lg font-black leading-tight text-foreground hover:text-accent-foreground"
									>{posts[4].title}</a
								>
							</h2>
							<p class="line-clamp-3 text-xs">
								{posts[4].excerpt}
							</p>
							<h4 class="text-xs italic">
								By <a href="/" class="text-primary hover:text-foreground">{posts[4].author?.name}</a
								>
							</h4>
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
