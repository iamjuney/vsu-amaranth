<script lang="ts">
	import TopStories from '$lib/components/TopStories.svelte';
	import NewsLetter from '$lib/components/NewsLetter.svelte';

	let { data } = $props();
</script>

<TopStories posts={data.posts} />

<NewsLetter />

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<div class="relative flex flex-row flex-nowrap bg-white px-4">
		<div class=" min-w-0 shrink grow basis-0">
			<div class="relative">
				<div class="absolute top-8 block w-full" aria-hidden="true">
					<div class="h-16 w-full border-t-4 border-primary"></div>
				</div>
				<div class="relative flex">
					<span class="bg-white p-4 font-dm_serif text-2xl uppercase italic"> The Latest </span>
				</div>
			</div>
			<div class="relative space-y-4 bg-white px-4">
				{#each { length: 10 } as _, i}
					<div class="flex w-full items-start border-t first:border-0">
						<a href="/" class="relative block w-full basis-1/3 items-center">
							<img
								src="https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Unsplash"
								class="h-full w-full"
							/>
						</a>
						<div class="grow-1 w-full basis-2/3 p-4">
							<div class="block space-y-2">
								<h2>
									<a
										href="/"
										class="text-xl font-black leading-tight text-foreground hover:text-accent-foreground"
										>Hello World</a
									>
								</h2>
								<h4>
									By <a href="/" class="text-primary hover:text-foreground">Super User</a> | October
									7
								</h4>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class=" ml-6 min-w-0 shrink-0 grow-0 basis-72">
			<div class="mt-8 block">
				<span class="p-4 text-2xl font-black uppercase italic"> National News </span>
			</div>
		</div>
	</div>
</div>
