<script lang="ts">
	import TopStories from '$lib/components/TopStories.svelte';
	import { MessageSquareIcon, Share2Icon } from 'lucide-svelte';

	let { data } = $props();
</script>

<TopStories posts={data.posts} />

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
	<div class="grid grid-cols-2 gap-16 px-8">
		<div class="lg:col-span-1">
			<div class="relative">
				<div class="absolute top-8 block w-full pl-4" aria-hidden="true">
					<div class="h-16 w-full border-t-4 border-primary"></div>
				</div>
				<div class="relative flex">
					<span class="bg-white py-4 pr-4 text-2xl uppercase italic"> The Latest </span>
				</div>
			</div>
			<article class="mb-6">
				<div class="mb-2 flex items-center">
					<img
						class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
						src="https://thispersondoesnotexist.com/"
						alt="Wes Davis"
					/>
					<div class="ml-2">
						<p class="text-sm font-semibold">Wes Davis</p>
						<p class="text-xs text-gray-500">Dec 24</p>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="ml-auto text-gray-500"
						><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"
						></polyline></svg
					>
				</div>
				<h2 class="mb-2 text-xl font-bold">
					What do Houston, Nashville, and Dallas have in common?
				</h2>
				<p class="mb-4 text-gray-700">
					It’s not just that you’re more likely to come across cowboy boots in those places. They’re
					also increasingly home to technology workers as demand for their skills comes from more
					companies in more industries in more cities.
				</p>
				<p class="mb-4 italic text-gray-700">
					The Wall Street Journal hits that and other factors leading to the shrinkage — both in
					percentage and absolute figures — of the tech workforce in former strongholds of the
					industry like the Bay Area and New York City.
				</p>
				<a class="text-blue-600 hover:underline" href="/"
					>Tech Hubs Are Losing the Talent War to Everywhere Else [WSJ]</a
				>
			</article>
			<hr class="mb-6 border-t border-gray-300" />
		</div>
		<div class="mt-8 lg:col-span-1">
			<div class="sticky top-8">
				<div class="space-y-3 rounded-lg bg-[#16a34a] p-6 text-white">
					<div class="flex items-center justify-between">
						<h4 class="font-semibold">National News</h4>
						<a class="text-white underline" href="/">See all Tech</a>
					</div>
					<h2 class="mb-4 ml-12 border-l-2 pl-2 text-4xl font-bold">
						Google's ChatGPT competitor Bard is nearly as good – just slower
					</h2>
					<div class="mb-2 flex items-center">
						<img
							class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
							src="https://thispersondoesnotexist.com/"
							alt="Emilia David"
						/>
						<div class="ml-2">
							<p class="text-sm font-semibold">Emilia David</p>
							<p class="text-xs">Dec 22</p>
						</div>
						<Share2Icon size="24" class="ml-auto text-white" />
					</div>
					<img
						src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
						alt="Bard"
						class="my-4"
						width="300"
						height="200"
						style="aspect-ratio: 300 / 200; object-fit: cover;"
					/>
					<div class="p-6">
						<ul class="space-y-4">
							<li>
								<a class="mt-2 block text-lg font-semibold hover:underline" href="/"
									>The hyperloop is dead for real this time</a
								>
								<div class="mt-1 flex items-center">
									<p class="ml-1 text-xs">Andrew J. Hawkins Dec 22</p>
									<div class="ml-auto flex w-fit items-center space-x-1 text-xs font-semibold">
										<MessageSquareIcon size="12" class="" />
										<span>178</span>
									</div>
								</div>
							</li>
							<li>
								<a class="mt-2 block text-lg font-semibold hover:underline" href="/"
									>Here are over 40 last-minute gifts you can still nab before Christmas</a
								>
								<div class="mt-1 flex items-center">
									<p class="ml-1 text-xs">Sheena Vasani Dec 25</p>
									<div class="ml-auto flex w-fit items-center space-x-1 text-xs font-semibold">
										<MessageSquareIcon size="12" class="" />
										<span>178</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
